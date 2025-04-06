import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Function to fix unescaped entities
function fixUnescapedEntities(content) {
  // Replace apostrophes (') with &apos; in JSX content
  let result = content.replace(
    /(<[^>]*>)([^<]*)([''])([^<]*<)/g,
    (match, openTag, beforeApos, apos, afterApos) => {
      return `${openTag}${beforeApos}&apos;${afterApos}`;
    }
  );
  
  // Replace quotes (") with &quot; in JSX content
  result = result.replace(
    /(<[^>]*>)([^<]*)([""])([^<]*<)/g,
    (match, openTag, beforeQuote, quote, afterQuote) => {
      return `${openTag}${beforeQuote}&quot;${afterQuote}`;
    }
  );
  
  return result;
}

// Function to process a file
async function processFile(filePath) {
  try {
    // Read file content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Apply the fix
    const fixedContent = fixUnescapedEntities(content);
    
    // Only write back if changes were made
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed unescaped entities in: ${filePath}`);
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
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {
      await processFile(fullPath);
    }
  }
}

// Start processing from the src directory
console.log('Starting to fix unescaped entities...');
processDirectory(path.join(rootDir, 'src'))
  .then(() => {
    console.log('Completed fixing unescaped entities!');
  })
  .catch(error => {
    console.error('Error:', error);
  }); 