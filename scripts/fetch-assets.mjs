// Downloads the MR Services logo, photos and brand logos into /public.
// Run once from the project root:  npm run fetch-assets
import { mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";

const BASE = "https://www.mrservices.co.in";
const root = path.resolve(import.meta.dirname, "..", "public");

const images = [
  "logo.png",
  "hero_branded.png",
  "workshop_branded.png",
  "appliance_branded.png",
  "tv_repair.png",
  "lab.png",
  "mobile_repair.png",
].map((f) => [`${BASE}/${f}`, path.join(root, "images", f)]);

const brands = [
  "samsung", "lg", "sony", "apple", "dell", "hp",
  "acer", "asus", "xiaomi", "oneplus", "panasonic",
].map((b) => [`${BASE}/brands/${b}.png`, path.join(root, "brands", `${b}.png`)]);

const force = process.argv.includes("--force");
let failed = 0;

for (const [url, dest] of [...images, ...brands]) {
  await mkdir(path.dirname(dest), { recursive: true });
  if (!force) {
    try {
      await access(dest);
      console.log(`skip  ${path.relative(root, dest)} (exists)`);
      continue;
    } catch {}
  }
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    console.log(`ok    ${path.relative(root, dest)}`);
  } catch (err) {
    failed++;
    console.error(`FAIL  ${url} -> ${err.message}`);
  }
}

console.log(failed ? `\n${failed} file(s) failed.` : "\nAll assets downloaded.");
process.exitCode = failed ? 1 : 0;
