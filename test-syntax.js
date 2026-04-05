// Simple syntax check for the GridDistortion component
import fs from 'fs';
import { parse } from '@babel/parser';

try {
  const code = fs.readFileSync('./src/components/common/GridDistortion.jsx', 'utf-8');
  
  // Try to parse as JSX
  parse(code, {
    sourceType: 'module',
    plugins: ['jsx']
  });
  
  console.log('✓ GridDistortion.jsx syntax is valid!');
  process.exit(0);
} catch (error) {
  console.error('✗ Syntax error in GridDistortion.jsx:');
  console.error(error.message);
  process.exit(1);
}
