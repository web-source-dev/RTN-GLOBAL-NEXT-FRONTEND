import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Extract list of unused variables from a file by parsing the error log output
function getUnusedVarsFromLog(logContent, filePath) {
  const unused = new Set();
  const relativeFilePath = filePath.replace(rootDir, '').replace(/\\/g, '/');
  
  // Find each error line that contains no-unused-vars for this file
  const regex = new RegExp(`${relativeFilePath}:[\\d]+:[\\d]+\\s+Error:\\s+'([^']+)'\\s+is\\s+(defined but never used|assigned a value but never used).+no-unused-vars`, 'g');
  
  let match;
  while ((match = regex.exec(logContent)) !== null) {
    unused.add(match[1]);
  }
  
  return Array.from(unused);
}

// Fix unused variables by prefixing them with underscore
function fixUnusedVars(content, unusedVars) {
  let result = content;
  
  for (const varName of unusedVars) {
    // Replace variable declarations with underscored version
    result = result.replace(
      new RegExp(`(const|let|var)\\s+(${varName})(\\s*=|:)`, 'g'),
      '$1 _$2$3'
    );
    
    // Replace import declarations with underscored version
    result = result.replace(
      new RegExp(`import\\s+{([^}]*?)(\\s+|,)(${varName})(\\s*|,)([^}]*?)}\\s+from`, 'g'),
      (match, before, beforeSpace, importName, afterSpace, after) => {
        return `import {${before}${beforeSpace}_${importName}${afterSpace}${after}} from`;
      }
    );
    
    // Handle named imports
    result = result.replace(
      new RegExp(`import\\s+{\\s*${varName}\\s*}\\s+from`, 'g'),
      `import { _${varName} } from`
    );
    
    // Handle default imports
    result = result.replace(
      new RegExp(`import\\s+${varName}\\s+from`, 'g'),
      `import _${varName} from`
    );
  }
  
  return result;
}

// Function to process a file
async function processFile(filePath, logContent) {
  try {
    // Read file content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Get list of unused variables for this file
    const unusedVars = getUnusedVarsFromLog(logContent, filePath);
    
    if (unusedVars.length > 0) {
      // Apply the fix
      const fixedContent = fixUnusedVars(content, unusedVars);
      
      // Only write back if changes were made
      if (content !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`Fixed unused vars in: ${filePath}`);
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return false;
  }
}

// Function to recursively process files in a directory
async function processDirectory(dirPath, logContent) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  let filesFixed = 0;
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    
    if (entry.isDirectory()) {
      // Skip node_modules and .next directories
      if (entry.name !== 'node_modules' && entry.name !== '.next') {
        filesFixed += await processDirectory(fullPath, logContent);
      }
    } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) {
      if (await processFile(fullPath, logContent)) {
        filesFixed++;
      }
    }
  }
  
  return filesFixed;
}

// Main function
async function main() {
  // First, we need to get the ESLint output
  console.log('Running ESLint to find unused variables...');
  try {
    // Create a temporary file to store ESLint output
    const tempLogFile = path.join(rootDir, 'eslint-output.log');
    
    // Run ESLint and save output
    const { execSync } = require('child_process');
    execSync(`cd "${rootDir}" && npx eslint "src/**/*.{ts,tsx}" > "${tempLogFile}" 2>&1`, { stdio: 'inherit' });
    
    // Read the log file
    const logContent = fs.readFileSync(tempLogFile, 'utf8');
    
    // Process files
    console.log('Starting to fix unused variables...');
    const filesFixed = await processDirectory(path.join(rootDir, 'src'), logContent);
    console.log(`Completed fixing unused variables! Fixed ${filesFixed} files.`);
    
    // Clean up
    fs.unlinkSync(tempLogFile);
  } catch (error) {
    console.error('Error running ESLint or processing files:', error);
  }
}

main().catch(error => {
  console.error('Error in main execution:', error);
}); 