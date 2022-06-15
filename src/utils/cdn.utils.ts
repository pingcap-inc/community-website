export function getImageUrl(relativePath: string): string {
  return `${process.env.NEXT_PUBLIC_CDN_URL}/${relativePath}`;
}
