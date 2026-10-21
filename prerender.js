import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routesToPrerender = [
  '/',
  '/why-choose-us',
  '/technology',
  '/about-us',
  '/team',
  '/partners',
  '/facilities',
  '/documentation',
  '/active-trials',
  '/become-volunteer',
  '/blog',
  '/blog/patient-safety',
  '/understanding-clinical-trials.html',
  '/blog/copd-advancements',
  '/copd-treatment-advancements.html',
  '/blog/gut-health',
  '/gut-health-and-microbiome.html',
  '/faq',
  '/404'
];

async function prerender() {
  const template = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8');
  const { render } = await import('./dist/server/entry-server.js');

  console.log('🚀 Starting SSG Prerendering for Azul Bio Research...');

  for (const url of routesToPrerender) {
    const helmetContext = {};
    const { html: appHtml } = render(url, helmetContext);
    const { helmet } = helmetContext;

    let headTags = '';
    if (helmet) {
      if (helmet.title) headTags += helmet.title.toString() + '\n';
      if (helmet.meta) headTags += helmet.meta.toString() + '\n';
      if (helmet.link) headTags += helmet.link.toString() + '\n';
    }

    let htmlAttrs = '';
    if (helmet && helmet.htmlAttributes) {
      htmlAttrs = helmet.htmlAttributes.toString();
    }

    // React 19 hoists <title>/<meta>/<link>/<script type="application/ld+json"> rendered by
    // react-helmet-async to the start of the render output (inside #root) instead of the
    // helmet context. Pull those tags out of the app markup so they end up in <head>.
    let bodyHtml = appHtml;
    const hoistable = /^(?:\s*(?:<title>[\s\S]*?<\/title>|<meta\s[^>]*\/?>|<link\s[^>]*\/?>|<script type="application\/ld\+json">[\s\S]*?<\/script>))+/i;
    const hoistedMatch = bodyHtml.match(hoistable);
    if (hoistedMatch) {
      headTags += hoistedMatch[0] + '\n';
      bodyHtml = bodyHtml.slice(hoistedMatch[0].length);
    }

    let pageHtml = template;

    if (htmlAttrs) {
      pageHtml = pageHtml.replace('<html lang="en">', `<html ${htmlAttrs}>`);
    }

    if (headTags) {
      // Replace the template's fallback title and description with the page-specific ones
      if (/<title>/i.test(headTags)) pageHtml = pageHtml.replace(/<title>.*?<\/title>\s*/i, '');
      if (/name="description"/i.test(headTags)) pageHtml = pageHtml.replace(/<meta name="description" content=".*?"\s*\/?>\s*/i, '');
      pageHtml = pageHtml.replace('</head>', `${headTags}</head>`);
    }

    pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);

    let filePath;
    if (url === '/') {
      filePath = 'dist/index.html';
    } else if (url === '/404') {
      // Served by Vercel with a real 404 status for any path that has no file
      filePath = 'dist/404.html';
    } else if (url.endsWith('.html')) {
      filePath = `dist${url}`;
    } else {
      filePath = `dist${url}/index.html`;
      // Also write dist/route.html for servers serving route.html directly
      const htmlExtPath = `dist${url}.html`;
      const htmlExtDir = path.dirname(htmlExtPath);
      if (!fs.existsSync(htmlExtDir)) {
        fs.mkdirSync(htmlExtDir, { recursive: true });
      }
      fs.writeFileSync(htmlExtPath, pageHtml);
    }

    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, pageHtml);
    console.log(`  ✓ Pre-rendered SSG route: ${url} -> ${filePath}`);
  }

  // Clean up server build folder
  fs.rmSync(path.resolve(__dirname, 'dist/server'), { recursive: true, force: true });
  console.log('✅ SSG Prerendering complete! Full pre-rendered HTML files generated in dist/\n');
}

prerender().catch((err) => {
  console.error('❌ Error during SSG prerendering:', err);
  process.exit(1);
});
