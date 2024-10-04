export async function isValidPassword(
  incomingRawPassword: string,
  savedHashedPassword: string
) {
  const incomingHashedPassword = await hashPassword(incomingRawPassword);
  // Uncomment this line. Goto `/admin` page. Write the username and password you want to use.
  // Pick up the hashed password in you terminal and paste it into your environmental variable named HASHED_ADMIN_PASSWORD.
  // Comment out this line again.
  // Done!
  // console.log(incomingHashedPassword);
  return incomingHashedPassword === savedHashedPassword;
}

async function hashPassword(password: string) {
  const arrayBuffer = await crypto.subtle.digest(
    "SHA-512",
    new TextEncoder().encode(password)
  );

  return Buffer.from(arrayBuffer).toString("base64");
}
