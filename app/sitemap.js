import { siteConfig } from '@/lib/site';

// Gera /sitemap.xml; one-page, então só a home
export default function sitemap() {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
