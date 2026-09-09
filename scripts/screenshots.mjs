/**
 * Capturas y comprobaciones sobre el sitio ya compilado.
 *
 * Revisa tres cosas que no se ven leyendo el código:
 *  - cómo queda la primera pantalla en móvil, tablet y escritorio;
 *  - si la consola escupe errores o avisos;
 *  - si algún bloque desborda el ancho de la ventana.
 *
 * Uso: node scripts/screenshots.mjs [url] [carpetaDeSalida]
 */
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const BASE = process.argv[2] ?? 'http://localhost:4322';
const OUT = process.argv[3] ?? 'shots';

const VIEWPORTS = [
  { name: '360-movil', width: 360, height: 780 },
  { name: '768-tablet', width: 768, height: 1024 },
  { name: '1440-escritorio', width: 1440, height: 900 },
];

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
const problems = [];

for (const viewport of VIEWPORTS) {
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  page.on('console', (message) => {
    if (message.type() === 'error' || message.type() === 'warning') {
      problems.push(`[consola ${viewport.name}] ${message.type()}: ${message.text()}`);
    }
  });
  page.on('pageerror', (error) => {
    problems.push(`[pageerror ${viewport.name}] ${error.message}`);
  });

  await page.goto(BASE, { waitUntil: 'networkidle' });

  // Primera pantalla: lo que decide la prueba de los cinco segundos.
  await page.screenshot({ path: `${OUT}/${viewport.name}-primera-pantalla.png` });
  await page.screenshot({ path: `${OUT}/${viewport.name}-completa.png`, fullPage: true });

  // ¿Algo se sale del ancho de la ventana?
  const overflow = await page.evaluate(() => {
    const width = document.documentElement.clientWidth;
    return [...document.querySelectorAll('body *')]
      .filter((element) => element.getBoundingClientRect().right > width + 1)
      .slice(0, 5)
      .map((element) => `${element.tagName.toLowerCase()}.${element.className || '(sin clase)'}`);
  });
  if (overflow.length > 0) {
    problems.push(`[desborde ${viewport.name}] ${overflow.join(' | ')}`);
  }

  await context.close();
}

// La versión en inglés, en escritorio.
const enContext = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
const enPage = await enContext.newPage();
await enPage.goto(`${BASE}/en`, { waitUntil: 'networkidle' });
await enPage.screenshot({ path: `${OUT}/en-primera-pantalla.png` });
await enContext.close();

// Sin JavaScript: el héroe tiene que seguir completo.
const noJsContext = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  javaScriptEnabled: false,
  deviceScaleFactor: 2,
});
const noJsPage = await noJsContext.newPage();
await noJsPage.goto(BASE, { waitUntil: 'load' });
await noJsPage.screenshot({ path: `${OUT}/sin-javascript.png` });

const heroVisible = await noJsPage.evaluate(() => {
  const text = document.querySelector('main')?.textContent ?? '';
  return {
    nombre: text.includes('Eduver'),
    rol: text.includes('Data Engineer'),
    empresas: text.includes('TIMIA') && text.includes('GECELCA'),
    cta: text.includes('Descargar CV'),
  };
});
await noJsContext.close();

await browser.close();

console.log('Héroe sin JavaScript:', JSON.stringify(heroVisible));
console.log(
  problems.length === 0
    ? '\nSin errores de consola ni desbordes.'
    : `\nProblemas encontrados (${problems.length}):\n- ${problems.join('\n- ')}`,
);
