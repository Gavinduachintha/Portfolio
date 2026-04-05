import { createWriteStream } from 'fs';
import { mkdir } from 'fs/promises';
import { dirname } from 'path';

const dir = 'src/hooks';
await mkdir(dir, { recursive: true });
console.log('Directory created:', dir);
