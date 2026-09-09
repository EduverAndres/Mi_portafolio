/**
 * Constantes que no se traducen: identidad, canales de contacto y enlaces.
 * El texto traducible vive en src/i18n/{es,en}.ts
 */

export const SITE_URL = 'https://eduver-gutierrez-portfolio.vercel.app';

export const PERSON = {
  name: 'Eduver Andrés Gutiérrez Narváez',
  firstName: 'Eduver',
  lastName: 'Gutiérrez',
  initials: 'EG',
  city: 'Barranquilla',
  country: 'Colombia',
  countryCode: 'CO',
} as const;

export const CONTACT = {
  email: 'eduverjimenez07@gmail.com',
  phone: '+573332369167',
  phoneLabel: '+57 333 236 9167',
  whatsapp: '573024345803',
  whatsappLabel: '+57 302 434 5803',
  linkedin: 'https://www.linkedin.com/in/eduver-gutierrez-437408386',
  linkedinLabel: 'eduver-gutierrez',
  github: 'https://github.com/EduverAndres',
} as const;

export const CV_PATH = '/Eduver_cv_2026.pdf';

/** Empresas que aparecen como prueba en la franja del héroe. Orden: más reciente primero. */
export const COMPANIES = ['TIMIA', 'ICUBO', 'GECELCA'] as const;

/** Stack corto del héroe: lo que un reclutador escanea en los primeros segundos. */
export const HERO_STACK = ['Python', 'FastAPI', 'PySpark', 'Snowflake', 'AWS', 'SQL'] as const;

/**
 * Núcleo de habilidades con presencia visual real (8).
 * El resto del stack va agrupado y colapsado — un reclutador escanea 8, no 50.
 */
export const CORE_SKILLS = [
  'Python',
  'SQL',
  'PySpark',
  'Snowflake',
  'AWS',
  'FastAPI',
  'Oracle',
  'Vue.js',
] as const;

export const PROJECTS = [
  {
    id: 'nexus',
    url: 'https://nexus-inteligente.vercel.app',
    image: '/proyectos/nexus-preview.webp',
    width: 1200,
    height: 750,
  },
  {
    id: 'fincayraiz',
    url: 'https://finca-y-raiz.vercel.app/',
    image: '/proyectos/fincayraiz-preview.webp',
    width: 1200,
    height: 750,
  },
] as const;
