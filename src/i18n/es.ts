/**
 * Diccionario base. `en.ts` se tipa contra este archivo, de modo que si aquí
 * aparece una clave nueva y falta en inglés, el build falla.
 *
 * Sobre los marcadores "FALTA MÉTRICA": cada bullet está redactado para leerse
 * completo SIN la cifra, de modo que el sitio nunca muestre un hueco. El
 * comentario indica qué número debería insertarse y en qué parte de la frase.
 */

export const es = {
  meta: {
    title: 'Eduver Gutiérrez — Data Engineer y Full Stack Developer',
    description:
      'Data Engineer y Full Stack Developer con más de 3 años de experiencia. Pipelines ETL/ELT en Snowflake y AWS, APIs con Python y FastAPI. Barranquilla, Colombia. Disponible para nuevas oportunidades.',
    ogAlt: 'Eduver Gutiérrez, Data Engineer y Full Stack Developer',
  },

  nav: {
    perfil: 'Perfil',
    experiencia: 'Experiencia',
    proyectos: 'Proyectos',
    habilidades: 'Habilidades',
    educacion: 'Educación',
    contacto: 'Contacto',
    cv: 'Descargar CV',
    openMenu: 'Abrir menú de navegación',
    closeMenu: 'Cerrar menú de navegación',
    skipToContent: 'Saltar al contenido',
    langLabel: 'Cambiar idioma',
    switchTo: 'View in English',
    switchToShort: 'EN',
  },

  hero: {
    available: 'Disponible para nuevas oportunidades',
    roles: ['Data Engineer', 'Full Stack Developer'],
    value: 'Construyo pipelines ETL/ELT y APIs que corren en producción.',
    evidence: {
      experience: 'Años de experiencia',
      experienceValue: '3+',
      companies: 'Empresas',
      stack: 'Stack principal',
    },
    ctaPrimary: 'Descargar CV',
    ctaSecondary: 'Contactar',
    cvHint: 'PDF, se abre en una pestaña nueva',
  },

  about: {
    title: 'Perfil',
    body: [
      'Ingeniero de datos y desarrollador de software. Trabajo en los dos extremos del recorrido de un dato: la infraestructura que lo mueve y lo limpia, y la aplicación donde alguien finalmente lo usa para decidir.',
      'He construido pipelines ETL/ELT sobre Snowflake y AWS, modelado almacenes analíticos y desarrollado APIs y aplicaciones internas con Python, FastAPI, Vue.js, Oracle y SQL Server. También acompaño migraciones de sistemas legacy hacia arquitecturas basadas en APIs.',
      'Vivo en Barranquilla, Colombia, y trabajo en remoto con equipos de otros países.',
    ],
    languages: 'Español nativo. Inglés intermedio conversacional.',
  },

  experience: {
    title: 'Experiencia',
    stackLabel: 'Stack',
    items: [
      {
        id: 'timia',
        role: 'Software Engineer',
        company: 'TIMIA',
        // Rótulo confirmado por Eduver: fue un encargo con alcance y fecha de fin
        // definidos desde el inicio, no un empleo interrumpido.
        contract: 'Contrato por proyecto, 3 meses',
        period: 'mar — may 2026',
        year: '2026',
        location: 'España',
        bullets: [
          // FALTA MÉTRICA: número de fuentes integradas y volumen procesado.
          // Ej: "...consolidar 14 fuentes heterogéneas (~40 GB diarios) en un modelo..."
          'Construí pipelines ETL/ELT en Snowflake con Python y PySpark para consolidar fuentes heterogéneas en un único modelo analítico.',
          // FALTA MÉTRICA: frecuencia de ejecución o duración de la ventana de carga.
          // Ej: "...cargas que corren cada 4 horas sin intervención manual."
          'Orquesté las cargas en AWS con Glue, Lambda y S3, dejando el proceso automatizado y con reintentos ante fallos.',
          // FALTA MÉTRICA: porcentaje de cargas rechazadas o incidencias evitadas.
          'Definí validaciones de calidad que detienen la publicación cuando una carga llega incompleta o fuera de rango.',
          'Entregué dentro del alcance y el plazo acordados, con documentación técnica para que el equipo interno continuara el mantenimiento.',
        ],
        stack: ['Snowflake', 'Python', 'PySpark', 'AWS Glue', 'Lambda', 'S3'],
      },
      {
        id: 'icubo',
        role: 'Consultor BI',
        company: 'ICUBO Solutions',
        contract: null,
        period: 'mar 2025 — feb 2026',
        year: '2025 — 2026',
        location: 'Barranquilla, Colombia',
        bullets: [
          // FALTA MÉTRICA: número de modelos, tablas o áreas de negocio cubiertas.
          'Modelé el almacén analítico en Snowflake con esquemas en estrella, para que las áreas de negocio consultaran sus indicadores sin depender del equipo técnico.',
          // FALTA MÉTRICA: la más valiosa de toda la página. Tiempo antes y después.
          // Ej: "...bajando los reportes críticos de 45 s a 6 s."
          'Reescribí las consultas SQL más lentas y ajusté el modelo de datos, acortando el tiempo de respuesta de los reportes críticos.',
          'Traduje requerimientos de negocio en indicadores y tableros, sosteniendo el levantamiento directamente con el cliente.',
          // FALTA MÉTRICA: horas de trabajo manual eliminadas al mes.
          'Automaticé con Python y SQL cargas recurrentes que antes se ejecutaban a mano.',
        ],
        stack: ['Snowflake', 'SQL', 'Python', 'AWS', 'Modelado dimensional'],
      },
      {
        id: 'gecelca',
        role: 'Analista de Información y Desarrollador de Software',
        company: 'GECELCA S.A.S',
        contract: null,
        period: 'jul 2022 — dic 2024',
        year: '2022 — 2024',
        location: 'Barranquilla, Colombia',
        bullets: [
          // FALTA MÉTRICA: cuántas aplicaciones y cuántos usuarios internos.
          // Ej: "...tres aplicaciones internas que usan ~120 personas del área operativa."
          'Desarrollé aplicaciones internas con FastAPI y Vue.js sobre Oracle y SQL Server, usadas por las áreas operativas de la compañía.',
          // FALTA MÉTRICA: cuántos sistemas o integraciones se migraron.
          'Acompañé la migración de sistemas legacy hacia APIs REST, reemplazando integraciones acopladas directamente a la base de datos.',
          // FALTA MÉTRICA: mejora concreta en los reportes más lentos.
          'Optimicé consultas y procedimientos almacenados en Oracle, atacando los reportes que más demoraban.',
          'Construí procesos ETL con Python y SQL, y trabajé con Azure Data Factory, Data Lake y Databricks para las cargas analíticas.',
        ],
        stack: ['Python', 'FastAPI', 'Vue.js', 'Oracle', 'SQL Server', 'Azure Data Factory', 'Databricks'],
      },
    ],
  },

  projects: {
    title: 'Proyectos',
    visit: 'Ver sitio en vivo',
    opensNewTab: 'se abre en una pestaña nueva',
    items: {
      nexus: {
        name: 'NEXUS — Tecnología Inteligente',
        role: 'Fundador',
        description:
          'Estudio de desarrollo de software y ciencia de datos que fundé. Diseñamos software a medida, aplicaciones web y móviles, tableros analíticos e integración de IA generativa.',
        tags: ['Desarrollo web', 'Ciencia de datos', 'IA generativa', 'APIs REST', 'Cloud'],
        imageAlt: 'Página de inicio del sitio de NEXUS Tecnología Inteligente',
      },
      fincayraiz: {
        name: 'Finca y Raíz',
        role: 'Desarrollo y arquitectura',
        description:
          'Marketplace inmobiliario de casas, apartamentos y fincas, con un asesor de IA que interpreta lo que necesita el usuario antes de recomendarle inmuebles.',
        tags: ['Marketplace', 'IA generativa', 'Frontend', 'APIs REST'],
        imageAlt: 'Página de búsqueda de propiedades del sitio Finca y Raíz',
      },
    },
  },

  skills: {
    title: 'Habilidades',
    coreNote: 'Lo que uso a diario',
    moreLabel: 'Ver el resto del stack',
    lessLabel: 'Ocultar el resto del stack',
    groups: [
      {
        id: 'data',
        name: 'Ingeniería de datos',
        items: ['ETL / ELT', 'Modelado dimensional', 'Azure Data Factory', 'Azure Data Lake', 'Databricks', 'Dataiku', 'Validación de calidad'],
      },
      {
        id: 'backend',
        name: 'Backend',
        items: ['Java', 'Spring Boot', 'Node.js', 'Express', 'Django', 'PHP', 'Laravel', 'APIs REST', 'Autenticación'],
      },
      {
        id: 'frontend',
        name: 'Frontend',
        items: ['React', 'Angular', 'Quasar', 'TypeScript', 'Tailwind CSS'],
      },
      {
        id: 'cloud',
        name: 'Cloud y bases de datos',
        items: ['S3', 'Lambda', 'Glue', 'SQL Server', 'Supabase', 'Procedimientos almacenados', 'Optimización de consultas'],
      },
      {
        id: 'ways',
        name: 'Forma de trabajo',
        items: ['Git', 'Scrum', 'Kanban', 'Documentación técnica'],
      },
    ],
  },

  teaching: {
    title: 'Docencia',
    intro:
      'Además del trabajo técnico, he formado a estudiantes y a otros docentes en tecnología. Explicar bien un sistema es parte de construirlo.',
    items: [
      {
        id: 'revotic',
        role: 'Formador en tecnología y metodologías educativas',
        org: 'Diplomado REVOTIC — Gobernación del Magdalena y Universidad Americana',
        period: 'jun — dic 2025',
        // FALTA MÉTRICA: cuántos docentes pasaron por la formación.
        description:
          'Capacité a docentes en pensamiento computacional, herramientas digitales e innovación en el aula, y diseñé los contenidos del programa.',
      },
      {
        id: 'ie',
        role: 'Docente de tecnología e informática',
        org: 'Institución educativa pública del Distrito de Barranquilla',
        period: 'ene — jun 2022',
        description:
          'Enseñé ofimática y fundamentos de bases de datos con MySQL, con ejercicios prácticos de consultas SQL.',
      },
    ],
  },

  education: {
    title: 'Educación',
    formalTitle: 'Formación',
    coursesTitle: 'Cursos y certificaciones',
    formal: [
      {
        degree: 'Ingeniería de Sistemas',
        note: 'Cursando 7.º semestre',
        school: 'Politécnico de la Costa Atlántica, Barranquilla',
      },
      {
        degree: 'Tecnólogo en Desarrollo de Software',
        note: null,
        // Corregido: el sitio anterior decía "Polécnico de la Costa Atlántica".
        school: 'Politécnico de la Costa Atlántica, Barranquilla',
      },
      {
        degree: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
        note: null,
        school: 'SENA, Barranquilla',
      },
    ],
    courses: [
      { name: 'Oracle Next Education', org: 'Oracle — Desarrollo de software y bases de datos' },
      { name: 'Análisis de Datos, nivel avanzado', org: 'Talento Tech y Universidad Libre' },
      { name: 'Fundamentos de Programación', org: 'Misión TIC — Universidad Tecnológica de Pereira' },
      { name: 'Inglés Intermedio Conversacional', org: 'SENA, Barranquilla' },
    ],
  },

  contact: {
    title: 'Contacto',
    intro: 'Disponible para posiciones de Data Engineer o Full Stack Developer, incluyendo remoto e internacional.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    phone: 'Teléfono',
    linkedin: 'LinkedIn',
    cta: 'Descargar hoja de vida completa',
  },

  footer: {
    location: 'Barranquilla, Colombia',
    builtWith: 'Hecho con Astro, React y Tailwind CSS',
    toTop: 'Volver arriba',
  },
} as const;

export type Dictionary = typeof es;
