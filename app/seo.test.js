import robots from './robots';
import sitemap from './sitemap';
import { siteConfig } from '@/lib/site';

describe('sitemap', () => {
  it('lista a home com a URL absoluta do site', () => {
    const [home] = sitemap();
    expect(home.url).toBe(siteConfig.url);
  });
});

describe('robots', () => {
  it('libera todos os robôs e aponta para o sitemap', () => {
    const result = robots();
    expect(result.rules).toEqual({ userAgent: '*', allow: '/' });
    expect(result.sitemap).toBe(`${siteConfig.url}/sitemap.xml`);
  });
});
