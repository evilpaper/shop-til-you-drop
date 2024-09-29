export async function isValidPassword(
  incomingRawPassword: string,
  savedHashedPassword: string
) {
  const incomingHashedPassword = await hashPassword(incomingRawPassword);
  return incomingHashedPassword === savedHashedPassword;
}

async function hashPassword(password: string) {
  const arrayBuffer = await crypto.subtle.digest(
    "SHA-512",
    new TextEncoder().encode(password)
  );

  return Buffer.from(arrayBuffer).toString("base64");
}
