import fs from "fs";
import path from "path";

const photos = [
  {
    name: "hero.jpg",
    url: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TsD7v4nPCQTkksjARbo6sRRAHWL3Lgjt-jwBild_RdNuPTRFW7TRGEtN4b2cOzDZ0FiQ4NDIhRBRWUbFwB_2OQ3joKBadM_EqNfvk9_Il4BfJUyjN8RByLkN6DV_-tcSXMZPFbuq4R8K06=w1600",
  },
  {
    name: "team-vitres.jpg",
    url: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TsD7v4nPCQTkksjARbo6sRRAHWL3Lgjt-jwBild_RdNuPTRFW7TRGEtN4b2cOzDZ0FiQ4NDIhRBRWUbFwB_2OQ3joKBadM_EqNfvk9_Il4BfJUyjN8RByLkN6DV_-tcSXMZPFbuq4R8K06=w1200",
  },
  {
    name: "realisation-1.jpg",
    url: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RRNO6dmbo3jhhW9yE99tQZWrD5LAbC0I6OAq6CvwivpzjIY8oEz2CuJk-9rIdjKqJcbw58i1vFlxmPKspKJzOGwTfB0ZkYViPXbHerqMNR823KTT3LcC712JQekeEimKwjhpjwmBzlEdao=w1600",
  },
  {
    name: "realisation-2.jpg",
    url: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SVG_x94w7CUvp_nfFKaW2VEv0dt5biP1Rfh-jR6vrTg7E9MIE_52ia-9MMwVbok5-N09yO9J7VZiIbdNOn9YkeDva6z0gB21BDW43hlojebDOIZ5D7PqOLcfPg-uTh7lYUcGcQzrPl7jmk=w1600",
  },
  {
    name: "realisation-3.jpg",
    url: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9THUF8WupLRqtRWPcSXHTwo6p7KVu4Wp2AxXeCwnvun9lOM5qYcudZ97fKVnWm4LqRcOo3yYsCJzKaVEVSymG_7-HAJBDWc5pVgbS9898CK_IkrQBFCrnEefblbQmQGy3OXJKaOWqtmoPzr=w1600",
  },
];

const outDir = path.join("public", "img");
fs.mkdirSync(outDir, { recursive: true });

for (const photo of photos) {
  const res = await fetch(photo.url, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });
  if (!res.ok) {
    console.error("Failed", photo.name, res.status);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(path.join(outDir, photo.name), buf);
  console.log("Saved", photo.name, buf.length);
}
