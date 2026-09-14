export const SITE_NAME = 'PDFCraft';
export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || 'https://www.pdfcraft.app';
export const DEFAULT_TITLE = 'PDFCraft - Free Online PDF Tools (Merge, Split, Compress & More)';
export const DEFAULT_DESCRIPTION =
  'Free online PDF tools that run entirely in your browser: merge, split, compress, rotate, watermark, add page numbers, and convert PDFs to/from images. No sign-up, no uploads, no watermark ads.';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
