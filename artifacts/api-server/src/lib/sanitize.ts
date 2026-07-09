/**
 * Strips HTML/script content and control characters from user-supplied text
 * before it is persisted or rendered anywhere. This is a defense-in-depth
 * measure -- data is also always rendered as plain text on the frontend --
 * but we never want raw markup sitting in the database.
 */
export function sanitizeText(input: string): string {
  return input
    .replace(/<[^>]*>/g, "")
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "")
    .trim();
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email);
}
