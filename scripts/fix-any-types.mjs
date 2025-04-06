import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Function to fix explicit any types
function fixExplicitAny(content) {
  // Create a map of common patterns for 'any' types
  const replacements = [
    // For event handlers
    { 
      pattern: /\((e|event): any\)/g, 
      replacement: '(e: React.SyntheticEvent)' 
    },
    // For form events
    { 
      pattern: /\((e|event): any, (.*?)\)/g, 
      replacement: '(e: React.FormEvent, $2)' 
    },
    // For API responses
    { 
      pattern: /(response|res|data): any/g, 
      replacement: '$1: Record<string, unknown>' 
    },
    // For error handlers
    { 
      pattern: /(error|err): any/g, 
      replacement: '$1: Error | unknown' 
    },
    // For generic handlers
    { 
      pattern: /\((.*?): any\)/g, 
      replacement: '($1: unknown)' 
    },
    // For arrays of any
    { 
      pattern: /: any\[\]/g, 
      replacement: ': unknown[]' 
    },
    // For function parameters
    { 
      pattern: /\(([^)]*): any([^)]*)\)/g, 
      replacement: '($1: unknown$2)' 
    },
    // For remaining cases of simple any
    { 
      pattern: /: any(?!\[)/g, 
      replacement: ': unknown' 
    }
  ];

  // Apply each replacement
  let result = content;
  for (const { pattern, replacement } of replacements) {
    result = result.replace(pattern, replacement);
  }

  return result;
}

// Function to process a file
async function processFile(filePath) {
  try {
    // Read file content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Apply the fix
    const fixedContent = fixExplicitAny(content);
    
    // Only write back if changes were made
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed any types in: ${filePath}`);
    }
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
    } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) {
      await processFile(fullPath);
    }
  }
}

// Start processing from the src directory
console.log('Starting to fix any types...');
processDirectory(path.join(rootDir, 'src'))
  .then(() => {
    console.log('Completed fixing any types!');
  })
  .catch(error => {
    console.error('Error:', error);
  }); 