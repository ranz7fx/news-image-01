// news-image-01 entry (Node 22, standard library only): the picture is the
// entry.png beside this file, and the program copies it to /output/entry.png.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);

// Guard: fail loudly if the entry image is missing instead of writing nothing.
if (!existsSync(source)) {
  throw new Error('entry.png is missing next to main.ts; cannot produce /output/entry.png');
}

// The grader's /output may not exist yet — create it (no-op if it does).
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(source, dest);

// Verify the copy: the written file must match the source byte for byte in size,
// and log the size so a bad write is visible in the run log.
const srcBytes = statSync(source).size;
const dstBytes = statSync(dest).size;
if (srcBytes !== dstBytes) {
  throw new Error(`entry.png copy mismatch: source ${srcBytes} bytes, wrote ${dstBytes} bytes`);
}
console.log(`wrote ${dest} (${dstBytes} bytes)`);
