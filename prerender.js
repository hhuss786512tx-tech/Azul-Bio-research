import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routesToPrerender = [
  '/',
  '/why-choose-us',
  '/technology',
  '/diversity',
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
  '/faq'
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

    let pageHtml = template;

    if (htmlAttrs) {
      pageHtml = pageHtml.replace('<html lang="en">', `<html ${htmlAttrs}>`);
    }

    if (headTags) {
      // Replace existing title and description if present in template
      pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, '');
      pageHtml = pageHtml.replace(/<meta name="description" content=".*?"\s*\/?>/i, '');
      pageHtml = pageHtml.replace('</head>', `${headTags}</head>`);
    }

    pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    let filePath;
    if (url === '/') {
      filePath = 'dist/index.html';
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
