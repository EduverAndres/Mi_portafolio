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
  // Fuera del sitio a propósito: se muestra solo WhatsApp.
  phone: '+573332369167',
  whatsapp: '573024345803',
  whatsappLabel: '+57 302 434 5803',
  linkedin: 'https://www.linkedin.com/in/eduver-gutierrez-437408386',
  linkedinLabel: 'eduver-gutierrez',
  github: 'https://github.com/EduverAndres',
  githubLabel: 'EduverAndres',
} as const;

// El reclutador lo descarga y luego lo busca por nombre de archivo entre
// decenas de PDF: el nombre tiene que decir quién es y para qué rol.
export const CV_PATH = '/Eduver_Gutierrez_Data_Engineer_CV.pdf';

/** Empresas que aparecen como prueba en la franja del héroe. Orden: más reciente primero. */
export const COMPANIES = ['TIMIA', 'ICUBO', 'GECELCA'] as const;

/**
 * Seis tecnologías, ni una más: las que más aparecen en ofertas de Data
 * Engineer y que Eduver usa de verdad. Databricks entra confirmado por él;
 * Airflow y dbt quedan fuera a propósito porque no los ha usado.
 */
export const HERO_STACK = [
  'Snowflake',
  'Python',
  'PySpark',
  'SQL',
  'AWS',
  'Databricks',
] as const;

/**
 * Habilidades por nivel real de dominio, no por área. Un stack infinito hace
 * ver generalista; esto dice en qué confiar y en qué no.
 */
export const SKILL_LEVELS = ['core', 'solid', 'familiar'] as const;
export type SkillLevel = (typeof SKILL_LEVELS)[number];

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
