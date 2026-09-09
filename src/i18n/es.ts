/**
 * Diccionario base. `en.ts` se tipa contra este archivo, de modo que si aquí
 * aparece una clave nueva y falta en inglés, el build falla.
 *
 * Sobre los marcadores "FALTA MÉTRICA": cada bullet está redactado para leerse
 * completo SIN la cifra, de modo que el sitio nunca muestre un hueco. El
 * comentario indica qué número debería insertarse y en qué parte de la frase.
 * Ningún dato de este archivo está inventado.
 */

export const es = {
  meta: {
    title: 'Eduver Gutiérrez — Data Engineer y Full Stack Developer',
    description:
      'Data Engineer y Full Stack Developer con más de 3 años de experiencia. Pipelines ETL/ELT en Snowflake, AWS y Databricks con Python, PySpark y SQL, y APIs con FastAPI, Spring Boot y Vue.js. Barranquilla, Colombia. Disponible en remoto o con reubicación.',
    ogAlt: 'Eduver Gutiérrez, Data Engineer y Full Stack Developer',
  },

  nav: {
    experiencia: 'Experiencia',
    proyectos: 'Proyectos',
    habilidades: 'Habilidades',
    docencia: 'Docencia',
    educacion: 'Educación',
    contacto: 'Contacto',
    cv: 'Descargar CV',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    openMenu: 'Abrir menú de navegación',
    closeMenu: 'Cerrar menú de navegación',
    skipToContent: 'Saltar al contenido',
    langLabel: 'Cambiar idioma',
    switchTo: 'View in English',
    switchToShort: 'EN',
  },

  hero: {
    available: 'Disponible para nuevas oportunidades',
    availableMode: 'Remoto / Reubicación',
    /** Ancla del héroe: la palabra por la que quiere ser encontrado. */
    anchor: 'Data Engineer',
    /**
     * Refuerzo: va en segundo plano respecto al ancla, pero nombrado con
     * tecnologías concretas para que el perfil full stack se lea de verdad
     * y no quede como una nota al pie.
     */
    secondaryRole: 'Full Stack Developer',
    secondaryStack: 'FastAPI · Spring Boot · Vue.js · Angular',
    /** 18 palabras. Tiene que decir qué construye y para qué sirve. */
    positioning:
      'Construyo pipelines ETL/ELT en Snowflake y AWS, y las APIs que ponen esos datos a trabajar en producción.',
    metrics: [
      {
        // FALTA MÉTRICA: sus fechas (jul 2022 → hoy) dan más de 4 años.
        // Se mantiene el "3+" que él declara hasta que confirme el cambio.
        value: '3+',
        label: 'años de experiencia',
      },
      {
        // SUSTITUTO TEMPORAL. Aquí debe ir la métrica dura de datos: número de
        // pipelines en producción, o volumen procesado (GB/día, millones de
        // filas). Mientras no la tenga, va un dato igualmente verificable:
        // trabajó sobre AWS (TIMIA, ICUBO) y sobre Azure (GECELCA).
        value: '2',
        label: 'nubes en producción, AWS y Azure',
      },
      {
        value: '3',
        label: 'empresas: TIMIA, ICUBO, GECELCA',
      },
    ],
    ctaPrimary: 'Descargar CV',
    ctaSecondary: 'Ver GitHub',
    cvHint: 'PDF, se abre en una pestaña nueva',
    /** Etiquetas del diagrama de pipeline animado del héroe. */
    pipeline: {
      title: 'Recorrido típico de un pipeline que construyo',
      sources: 'Fuentes',
      ingest: 'Ingesta',
      transform: 'Transformación',
      warehouse: 'Warehouse',
      serve: 'Analítica',
    },
  },

  experience: {
    title: 'Experiencia',
    stackLabel: 'Stack',
    items: [
      {
        id: 'timia',
        role: 'Software Engineer',
        company: 'TIMIA',
        // Rótulo confirmado por Eduver: fue un encargo con alcance y fecha de
        // fin definidos desde el inicio, no un empleo interrumpido.
        contract: 'Contrato por proyecto, 3 meses',
        period: 'mar — may 2026',
        location: 'España',
        bullets: [
          // FALTA MÉTRICA: número de fuentes integradas y volumen procesado.
          // Ej: "...consolidar 14 fuentes (~40 GB diarios) en un modelo..."
          'Construí pipelines ETL/ELT en Snowflake con Python y PySpark para consolidar fuentes heterogéneas en un único modelo analítico.',
          // FALTA MÉTRICA: frecuencia de ejecución o duración de la ventana.
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
        location: 'Barranquilla, Colombia',
        bullets: [
          // FALTA MÉTRICA: número de modelos, tablas o áreas de negocio.
          'Modelé el almacén analítico en Snowflake con esquemas en estrella, para que las áreas de negocio consultaran sus indicadores sin depender del equipo técnico.',
          // FALTA MÉTRICA: la más valiosa de la página. Tiempo antes y después.
          // Ej: "...bajando los reportes críticos de 45 s a 6 s."
          'Reescribí las consultas SQL más lentas y ajusté el modelo de datos, acortando el tiempo de respuesta de los reportes críticos.',
          'Provisioné infraestructura de datos con Terraform e IAM, dejando los accesos y los recursos versionados en lugar de configurados a mano.',
          // FALTA MÉTRICA: horas de trabajo manual eliminadas al mes.
          'Automaticé con Python y SQL cargas recurrentes que antes se ejecutaban a mano.',
        ],
        stack: ['Snowflake', 'SQL', 'Python', 'AWS', 'Terraform', 'IAM'],
      },
      {
        id: 'gecelca',
        role: 'Analista de Información y Desarrollador de Software',
        company: 'GECELCA S.A.S',
        contract: null,
        period: 'jul 2022 — dic 2024',
        location: 'Barranquilla, Colombia',
        bullets: [
          // FALTA MÉTRICA: cuántas aplicaciones y cuántos usuarios internos.
          'Desarrollé aplicaciones internas con FastAPI y Vue.js sobre Oracle y SQL Server, usadas por las áreas operativas de la compañía.',
          'Construí procesos ETL con Python y SQL, y trabajé con Azure Data Factory, Data Lake y Databricks para las cargas analíticas.',
          // FALTA MÉTRICA: cuántos sistemas o integraciones se migraron.
          'Acompañé la migración de sistemas legacy hacia APIs REST, reemplazando integraciones acopladas directamente a la base de datos.',
          // FALTA MÉTRICA: mejora concreta en los reportes más lentos.
          'Optimicé consultas y procedimientos almacenados en Oracle, atacando los reportes que más demoraban.',
        ],
        stack: ['Python', 'FastAPI', 'Azure Data Factory', 'Databricks', 'Oracle', 'SQL Server', 'Vue.js'],
      },
    ],
  },

  projects: {
    title: 'Proyectos',
    visit: 'Ver sitio en vivo',
    opensNewTab: 'se abre en una pestaña nueva',
    /** Bloque reservado para el caso de ingeniería de datos que falta. */
    reserved: {
      label: 'En preparación',
      name: 'Pipeline de datos de extremo a extremo',
      description:
        'Ingesta desde una API pública, transformación y carga en un warehouse, orquestado y con un tablero al final. Repositorio público y documentado.',
      note: 'Este es el proyecto que más peso tiene para una vacante de Data Engineer. El bloque ya está maquetado: en cuanto exista el repositorio, se publica aquí.',
    },
    items: {
      nexus: {
        name: 'NEXUS — Tecnología Inteligente',
        // Antes decía "Fundador" y "Diseñamos software a medida", en plural:
        // se leía como un estudio con equipo ya operando para clientes. Es una
        // iniciativa en marcha, y así se declara. Un reclutador técnico va a
        // preguntar por ella en entrevista.
        status: 'Idea de negocio en proceso',
        role: 'Proyecto propio',
        description:
          'Iniciativa propia de software y ciencia de datos que estoy levantando. La propuesta es clara —software a medida, aplicaciones web y móviles, tableros analíticos e integración de IA generativa— y el sitio ya está en línea, pero el negocio sigue en fase temprana.',
        tags: ['Desarrollo web', 'Ciencia de datos', 'IA generativa', 'Cloud'],
        imageAlt: 'Página de inicio del sitio de NEXUS Tecnología Inteligente',
      },
      fincayraiz: {
        name: 'Finca y Raíz',
        status: null,
        role: 'Desarrollo y arquitectura',
        description:
          'Marketplace inmobiliario de casas, apartamentos y fincas, con un asesor de IA que interpreta lo que necesita el usuario antes de recomendarle inmuebles.',
        tags: ['Marketplace', 'IA generativa', 'APIs REST'],
        imageAlt: 'Página de búsqueda de propiedades del sitio Finca y Raíz',
      },
    },
  },

  skills: {
    title: 'Habilidades',
    intro: 'Agrupadas por lo que de verdad domino, no por todo lo que he tocado alguna vez.',
    levels: [
      {
        id: 'core',
        name: 'Core',
        note: 'Lo que uso a diario y sostengo en una entrevista técnica',
        items: ['Python', 'SQL', 'Snowflake', 'PySpark', 'AWS · S3, Lambda, Glue', 'FastAPI', 'Databricks'],
      },
      {
        id: 'solid',
        name: 'Sólido',
        note: 'Experiencia real en proyectos, con soltura',
        items: [
          'ETL / ELT',
          'Modelado dimensional',
          'Vue.js',
          'Java · Spring Boot',
          'Oracle',
          'SQL Server',
          'Azure Data Factory',
          'Git',
        ],
      },
      {
        id: 'familiar',
        name: 'Familiarizado',
        note: 'He trabajado con ello, no lo pondría como mi fuerte',
        items: [
          'Terraform',
          'Laravel',
          'Angular',
          'React',
          'Node.js',
          'Django',
          'Dataiku',
          'Supabase',
          'TypeScript',
        ],
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
    intro: 'Disponible para posiciones de Data Engineer en remoto, LATAM o España.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cta: 'Descargar hoja de vida completa',
  },

  footer: {
    location: 'Barranquilla, Colombia',
    toTop: 'Volver arriba',
  },
} as const;

export type Dictionary = typeof es;
