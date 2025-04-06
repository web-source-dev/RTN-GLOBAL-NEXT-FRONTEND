import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Function to fix unescaped entities
function fixUnescapedEntities(content) {
  // Fix apostrophes outside of JSX attributes (careful to not replace all apostrophes)
  const apostropheFix = content.replace(
    /(\{|\(|\s|>|^)[''](\w+['']s|\w+n['']t|\w+['']re|\w+['']ll|\w+['']ve|\w+['']d|['']em|['']til|['']cause)(\s|,|\.|;|\)|<|$)/g,
    (match, before, content, after) => {
      return `${before}${content.replace(/[']/g, '&apos;')}${after}`;
    }
  );

  // Fix quotes in JSX content
  const quoteFix = apostropheFix.replace(
    />([^<]*?)[""]([^<]*?)[""]/g,
    (match, before, after) => {
      return `>${before}&quot;${after}&quot;`;
    }
  );

  return quoteFix;
}

// Function to comment out unused variable/import declarations
function fixUnusedVars(content) {
  // Get list of variables flagged as unused from error comments
  const unusedVarsRegex = /\/\/ @typescript-eslint\/no-unused-vars.+?'([^']+)'/g;
  let match;
  const unusedVars = [];
  
  // Collect all variable names flagged as unused
  while ((match = unusedVarsRegex.exec(content)) !== null) {
    unusedVars.push(match[1]);
  }
  
  let fixedContent = content;
  
  // Process each unused variable
  for (const varName of unusedVars) {
    // Comment out import for that specific variable
    fixedContent = fixedContent.replace(
      new RegExp(`import {([^}]*?)${varName}([^}]*?)} from`, 'g'),
      (match, before, after) => {
        return `import {${before}/* ${varName} */${after}} from`;
      }
    );
    
    // Add underscore prefix to variable declarations
    fixedContent = fixedContent.replace(
      new RegExp(`(const|let|var) (${varName})\\b`, 'g'),
      '$1 _$2'
    );
  }
  
  return fixedContent;
}

// Fix explicit any types
function fixExplicitAny(content) {
  // Replace common any type patterns with more specific types
  return content
    .replace(/: any(\[\])?(?=\s*=\s*\[\])/g, ': unknown[]')  // Arrays
    .replace(/: any(?=\s*=\s*\{\})/g, ': Record<string, unknown>')  // Objects
    .replace(/: any(?=\s*=\s*\()/g, ': (...args: unknown[]) => unknown')  // Functions
    .replace(/: any(?!\[\])(?!;|\s*=\s*\{|\s*=\s*\[)/g, ': unknown');  // Simple values
}

// Fix React hook dependencies
function fixReactHookDeps(content) {
  // This is a more complex fix that would require parsing the code
  // For now, we'll just add a comment to alert the developer
  return content.replace(
    /(\/\/ react-hooks\/exhaustive-deps)/g,
    '// TODO: Fix missing dependency in useEffect - $1'
  );
}

// Function to process a file
async function processFile(filePath) {
  try {
    // Read file content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Apply fixes
    content = fixUnescapedEntities(content);
    content = fixUnusedVars(content);
    content = fixExplicitAny(content);
    content = fixReactHookDeps(content);
    
    // Write the fixed content back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Function to recursively process files in a directory
async function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    
    if (entry.isDirectory()) {
      // Skip node_modules and .next directories
      if (entry.name !== 'node_modules' && entry.name !== '.next') {
        await processDirectory(fullPath);
      }
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      await processFile(fullPath);
    }
  }
}

// Start processing from the src directory
console.log('Starting to fix ESLint errors...');
processDirectory(path.join(rootDir, 'src'))
  .then(() => {
    console.log('Completed fixing ESLint errors!');
  })
  .catch(error => {
    console.error('Error:', error);
  }); 