/**
 * Convierte las capturas de proyectos a WebP y reporta sus dimensiones finales,
 * que son las que deben declararse en src/data/site.ts como width/height.
 *
 * Declarar el tamaño real evita que la imagen provoque un salto de maquetación
 * (layout shift) mientras carga.
 *
 * Uso: npm run assets:webp
 */
import { readdir, stat, unlink } from 'node:fs/promises';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const DIR = 'public/proyectos';
const MAX_WIDTH = 1200;

const files = (await readdir(DIR)).filter((file) => file.endsWith('.png'));

if (files.length === 0) {
  console.log('No hay PNG que convertir.');
  process.exit(0);
}

for (const file of files) {
  const input = join(DIR, file);
  const output = join(DIR, `${parse(file).name}.webp`);

  const info = await sharp(input)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(output);

  const before = (await stat(input)).size;
  const after = (await stat(output)).size;
  const saved = Math.round((1 - after / before) * 100);

  console.log(
    `${file} -> ${parse(output).base}  ${info.width}x${info.height}  ` +
      `${Math.round(before / 1024)} KB -> ${Math.round(after / 1024)} KB (-${saved}%)`,
  );

  await unlink(input);
}

console.log('\nDeclara estas dimensiones en src/data/site.ts (width/height).');
