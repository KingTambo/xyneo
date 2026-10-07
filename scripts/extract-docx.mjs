import fs from "fs";
import path from "path";
import os from "os";
import { execSync } from "child_process";

const name = process.argv[2];
if (!name) {
  console.error("Usage: node scripts/extract-docx.mjs <filename-in-Downloads>");
  process.exit(1);
}

const docx = path.join("c:/Users/admin/Downloads", name);
const out = path.join(os.tmpdir(), "docx-extract-" + Date.now());
fs.mkdirSync(out, { recursive: true });
execSync(`tar -xf "${docx}" -C "${out}"`);

const xml = fs.readFileSync(path.join(out, "word/document.xml"), "utf8");
const text = xml
  .replace(/<w:tab\/>/g, "\t")
  .replace(/<\/w:p>/g, "\n")
  .replace(/<[^>]+>/g, "")
  .replace(/&amp;/g, "&")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">")
  .replace(/&quot;/g, '"')
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));

console.log(text);
fs.rmSync(out, { recursive: true, force: true });
