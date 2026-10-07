import fs from "fs";
import path from "path";

const outDir = path.join("public", "img");
fs.mkdirSync(outDir, { recursive: true });

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
  });
  return res.text();
}

async function download(url, dest) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log("Saved", dest, buf.length, "bytes");
}

const html = await fetchText("https://oaoproprete.fr");
const imgUrls = [...html.matchAll(/https?:\/\/[^"'\s>]+\.(?:jpg|jpeg|png|webp)/gi)].map((m) => m[0]);
console.log("oaoproprete images:", imgUrls);

const mapHtml = await fetchText(
  "https://www.google.com/maps/search/OAO+proprete+Bourg-en-Bresse/@46.205382,5.242015,15z",
);
const googleUrls = [...mapHtml.matchAll(/https:\/\/lh3\.googleusercontent\.com[^"\\]+/g)].map((m) => m[0]);
console.log("google photos found:", googleUrls.length);
googleUrls.slice(0, 8).forEach((u, i) => console.log(i, u.slice(0, 100)));
