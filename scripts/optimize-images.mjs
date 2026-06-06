// One-off image optimizer. Run: node scripts/optimize-images.mjs
// Outputs resized .webp next to the source files.
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { statSync, existsSync } from "node:fs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "assets", "images");

// [source, output-basename, max-width, quality]
const jobs = [
  ["robot.png", "robot", 840, 80],
  ["astronaut.png", "astronaut", 840, 80],
  ["work1.jpg", "work1", 1000, 72],
  ["work2.jpg", "work2", 1000, 72],
  ["work3.jpg", "work3", 1000, 72],
  ["myprofile.jpg", "myprofile", 400, 78],
];

const kb = (p) => (statSync(p).size / 1024).toFixed(0);

for (const [src, out, width, quality] of jobs) {
  const inPath = join(root, src);
  const outPath = join(root, `${out}.webp`);
  if (!existsSync(inPath)) {
    console.log(`skip ${src} (source removed — already optimized)`);
    continue;
  }
  await sharp(inPath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(outPath);
  console.log(`${src} (${kb(inPath)}KB) -> ${out}.webp (${kb(outPath)}KB)`);
}
