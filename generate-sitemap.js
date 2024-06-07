import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const routes = [
  '/',
  '/productos',
  '/servicios',
  '/chipeado',
  '/nosotros'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>${`https://veterinariadelparque.com.ar${route}`}</loc>
  </url>`).join('')}
</urlset>`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

writeFileSync(`${__dirname}/public/sitemap.xml`, sitemap);

console.log('Sitemap generado exitosamente.');