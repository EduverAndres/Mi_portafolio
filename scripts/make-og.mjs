/**
 * Genera public/og.png (1200x630), la tarjeta que se ve al compartir el enlace
 * en LinkedIn o WhatsApp. Se ejecuta antes de `astro build`.
 *
 * La tarjeta reproduce la placa del héroe: mismo fondo, mismo orden de lectura
 * (nombre, roles, valor, evidencia). Todo su texto es idéntico en español y en
 * inglés —nombres propios, cargos y tecnologías—, así que una sola imagen sirve
 * para las dos versiones del sitio.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;

const INK = '#14212e';
const PAPER = '#f2f4f5';
const MUTED = '#9aa8b8';
const RULE = '#2c3d51';
const LIVE = '#34c48a';

// Archivo no está instalada en el sistema que corre el build, así que la pila
// degrada a la grotesca disponible. La identidad de la tarjeta la sostienen la
// composición y el color, no solo la fuente.
const DISPLAY = "'Archivo', 'Archivo Variable', 'Segoe UI Semibold', 'Segoe UI', Arial, sans-serif";
const SANS = "'IBM Plex Sans', 'Segoe UI', Arial, sans-serif";

const escape = (text) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * SVG colapsa los espacios repetidos, así que separar palabras con varios
 * espacios no funciona: hay que darle a cada una su propia coordenada.
 * El ancho se estima a partir del tamaño de fuente, que basta para una
 * composición de anchos holgados como esta.
 */
function spacedRow(words, { x, y, size, weight = '400', fill = PAPER, gap = 26, opacity = 1 }) {
  let cursor = x;
  return words
    .map((word) => {
      const element =
        `<text x="${cursor}" y="${y}" font-family="${SANS}" font-size="${size}" ` +
        `font-weight="${weight}" fill="${fill}" opacity="${opacity}">${escape(word)}</text>`;
      cursor += word.length * size * 0.56 + gap;
      return element;
    })
    .join('\n  ');
}

const companies = ['TIMIA', 'ICUBO', 'GECELCA'];
const stackTop = ['Python', 'FastAPI', 'PySpark'];
const stackBottom = ['Snowflake', 'AWS', 'SQL'];

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${INK}"/>

  <circle cx="82" cy="80" r="7" fill="${LIVE}"/>
  <text x="104" y="88" font-family="${SANS}" font-size="23" fill="${PAPER}">Data Engineer</text>
  <line x1="272" y1="66" x2="272" y2="92" stroke="${RULE}" stroke-width="1"/>
  <text x="294" y="88" font-family="${SANS}" font-size="23" fill="${PAPER}">Full Stack Developer</text>

  <text x="78" y="242" font-family="${DISPLAY}" font-size="104" font-weight="700" fill="${PAPER}" letter-spacing="-3">
    Eduver Guti&#233;rrez
  </text>

  <text x="78" y="304" font-family="${SANS}" font-size="30" fill="${PAPER}" opacity="0.88">
    Pipelines ETL/ELT y APIs que corren en producci&#243;n
  </text>

  <line x1="78" y1="396" x2="${WIDTH - 78}" y2="396" stroke="${RULE}" stroke-width="1"/>

  <text x="78" y="466" font-family="${DISPLAY}" font-size="56" font-weight="700" fill="${PAPER}">3+</text>
  <text x="78" y="500" font-family="${SANS}" font-size="20" fill="${MUTED}">a&#241;os de experiencia</text>

  <line x1="240" y1="414" x2="240" y2="520" stroke="${RULE}" stroke-width="1"/>

  ${spacedRow(companies, { x: 284, y: 460, size: 29, weight: '600', gap: 30 })}
  <text x="284" y="500" font-family="${SANS}" font-size="20" fill="${MUTED}">empresas</text>

  <line x1="712" y1="414" x2="712" y2="520" stroke="${RULE}" stroke-width="1"/>

  ${spacedRow(stackTop, { x: 756, y: 452, size: 22, opacity: 0.92, gap: 22 })}
  ${spacedRow(stackBottom, { x: 756, y: 484, size: 22, opacity: 0.92, gap: 22 })}
  <text x="756" y="518" font-family="${SANS}" font-size="20" fill="${MUTED}">stack principal</text>

  <text x="78" y="588" font-family="${SANS}" font-size="20" fill="${MUTED}">
    Barranquilla, Colombia
  </text>
  <line x1="292" y1="570" x2="292" y2="592" stroke="${RULE}" stroke-width="1"/>
  <text x="314" y="588" font-family="${SANS}" font-size="20" fill="${MUTED}">
    eduver-gutierrez-portfolio.vercel.app
  </text>
</svg>`;

await mkdir('public', { recursive: true });

const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
await writeFile('public/og.png', png);

const { width, height } = await sharp(png).metadata();
console.log(`og.png generado: ${width}x${height}, ${Math.round(png.length / 1024)} KB`);
