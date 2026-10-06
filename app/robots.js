import { siteConfig } from '@/lib/site';

// Gera /robots.txt
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
