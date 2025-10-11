// lib/crypto.ts
import crypto from "node:crypto";

const keyB64 = process.env.FIELD_ENCRYPTION_KEY;
if (!keyB64) {
  console.warn("[crypto] FIELD_ENCRYPTION_KEY no está definido (usa .env)");
}
const key = keyB64 ? Buffer.from(keyB64, "base64") : undefined;

export function encryptText(plain: string): Buffer {
  if (!key) throw new Error("FIELD_ENCRYPTION_KEY faltante");
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const ciphertext = Buffer.concat([cipher.update(plain, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, tag, ciphertext]); 
}

export function decryptText(buf: Buffer): string {
  if (!key) throw new Error("FIELD_ENCRYPTION_KEY faltante");
  const iv = buf.subarray(0, 12);
  const tag = buf.subarray(12, 28);
  const ciphertext = buf.subarray(28);
  const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
  decipher.setAuthTag(tag);
  const plain = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  return plain.toString("utf8");
}
