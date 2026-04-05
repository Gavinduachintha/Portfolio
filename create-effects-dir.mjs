import { mkdir } from 'fs/promises';

const dir = 'src/components/effects';
await mkdir(dir, { recursive: true });
console.log('Directory created:', dir);
