/**
 * English dictionary. Typed against `es.ts`: if a key exists there and is
 * missing here, the build fails.
 *
 * Same rule as the Spanish file: every bullet reads complete WITHOUT the
 * number, so the page never shows a gap. The "MISSING METRIC" comments mark
 * where Eduver should insert the figure once he has it.
 */

import type { Dict } from './types';

export const en: Dict = {
  meta: {
    title: 'Eduver Gutiérrez — Data Engineer & Full Stack Developer',
    description:
      'Data Engineer and Full Stack Developer with 3+ years of experience. ETL/ELT pipelines on Snowflake and AWS, APIs with Python and FastAPI. Based in Barranquilla, Colombia. Available for new opportunities.',
    ogAlt: 'Eduver Gutiérrez, Data Engineer and Full Stack Developer',
  },

  nav: {
    perfil: 'About',
    experiencia: 'Experience',
    proyectos: 'Projects',
    habilidades: 'Skills',
    educacion: 'Education',
    contacto: 'Contact',
    cv: 'Download CV',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    skipToContent: 'Skip to content',
    langLabel: 'Change language',
    switchTo: 'Ver en español',
  },

  hero: {
    available: 'Available for new opportunities',
    roles: ['Data Engineer', 'Full Stack Developer'],
    value: 'I build ETL/ELT pipelines and APIs that run in production.',
    evidence: {
      experience: 'Years of experience',
      experienceValue: '3+',
      companies: 'Companies',
      stack: 'Core stack',
    },
    ctaPrimary: 'Download CV',
    ctaSecondary: 'Get in touch',
    cvHint: 'PDF, opens in a new tab',
  },

  about: {
    title: 'About',
    body: [
      'Data engineer and software developer. I work at both ends of a data journey: the infrastructure that moves and cleans it, and the application where someone finally uses it to make a decision.',
      'I have built ETL/ELT pipelines on Snowflake and AWS, modelled analytical warehouses, and developed APIs and internal applications with Python, FastAPI, Vue.js, Oracle and SQL Server. I also support migrations of legacy systems towards API-based architectures.',
      'I live in Barranquilla, Colombia, and work remotely with teams in other countries.',
    ],
    languages: 'Native Spanish. Intermediate conversational English.',
  },

  experience: {
    title: 'Experience',
    stackLabel: 'Stack',
    items: [
      {
        id: 'timia',
        role: 'Software Engineer',
        company: 'TIMIA',
        contract: 'Project-based contract, 3 months',
        period: 'Mar — May 2026',
        year: '2026',
        location: 'Spain',
        bullets: [
          // MISSING METRIC: number of sources integrated and volume processed.
          'Built ETL/ELT pipelines on Snowflake with Python and PySpark, consolidating heterogeneous sources into a single analytical model.',
          // MISSING METRIC: run frequency or load window duration.
          'Orchestrated loads on AWS with Glue, Lambda and S3, leaving the process automated and resilient to failures.',
          // MISSING METRIC: share of rejected loads or incidents prevented.
          'Defined data quality checks that halt publication when a load arrives incomplete or out of range.',
          'Delivered within the agreed scope and deadline, with technical documentation so the in-house team could take over maintenance.',
        ],
        stack: ['Snowflake', 'Python', 'PySpark', 'AWS Glue', 'Lambda', 'S3'],
      },
      {
        id: 'icubo',
        role: 'BI Consultant',
        company: 'ICUBO Solutions',
        contract: null,
        period: 'Mar 2025 — Feb 2026',
        year: '2025 — 2026',
        location: 'Barranquilla, Colombia',
        bullets: [
          // MISSING METRIC: number of models, tables or business areas covered.
          'Modelled the analytical warehouse on Snowflake using star schemas, so business teams could query their own indicators without going through the technical team.',
          // MISSING METRIC: the most valuable one on the page. Before and after timings.
          'Rewrote the slowest SQL queries and reshaped the data model, cutting response time on business-critical reports.',
          'Turned business requirements into indicators and dashboards, running requirement-gathering sessions directly with the client.',
          // MISSING METRIC: manual hours removed per month.
          'Automated recurring loads with Python and SQL that were previously run by hand.',
        ],
        stack: ['Snowflake', 'SQL', 'Python', 'AWS', 'Dimensional modelling'],
      },
      {
        id: 'gecelca',
        role: 'Information Analyst & Software Developer',
        company: 'GECELCA S.A.S',
        contract: null,
        period: 'Jul 2022 — Dec 2024',
        year: '2022 — 2024',
        location: 'Barranquilla, Colombia',
        bullets: [
          // MISSING METRIC: how many applications and how many internal users.
          'Developed internal applications with FastAPI and Vue.js on Oracle and SQL Server, used by the company operational teams.',
          // MISSING METRIC: how many systems or integrations were migrated.
          'Supported the migration of legacy systems towards REST APIs, replacing integrations coupled directly to the database.',
          // MISSING METRIC: concrete improvement on the slowest reports.
          'Optimised queries and stored procedures on Oracle, targeting the reports that took longest to run.',
          'Built ETL processes with Python and SQL, and worked with Azure Data Factory, Data Lake and Databricks for analytical loads.',
        ],
        stack: ['Python', 'FastAPI', 'Vue.js', 'Oracle', 'SQL Server', 'Azure Data Factory', 'Databricks'],
      },
    ],
  },

  projects: {
    title: 'Projects',
    visit: 'View live site',
    opensNewTab: 'opens in a new tab',
    items: {
      nexus: {
        name: 'NEXUS — Tecnología Inteligente',
        role: 'Founder',
        description:
          'Software development and data science studio I founded. We design custom software, web and mobile applications, analytical dashboards, and generative AI integrations.',
        tags: ['Web development', 'Data science', 'Generative AI', 'REST APIs', 'Cloud'],
        imageAlt: 'Home page of the NEXUS Tecnología Inteligente website',
      },
      fincayraiz: {
        name: 'Finca y Raíz',
        role: 'Development and architecture',
        description:
          'Real estate marketplace for houses, apartments and country properties, with an AI advisor that interprets what the user needs before recommending listings.',
        tags: ['Marketplace', 'Generative AI', 'Frontend', 'REST APIs'],
        imageAlt: 'Property search page of the Finca y Raíz website',
      },
    },
  },

  skills: {
    title: 'Skills',
    coreNote: 'What I use daily',
    moreLabel: 'Show the rest of the stack',
    lessLabel: 'Hide the rest of the stack',
    groups: [
      {
        id: 'data',
        name: 'Data engineering',
        items: ['ETL / ELT', 'Dimensional modelling', 'Azure Data Factory', 'Azure Data Lake', 'Databricks', 'Dataiku', 'Data quality checks'],
      },
      {
        id: 'backend',
        name: 'Backend',
        items: ['Java', 'Spring Boot', 'Node.js', 'Express', 'Django', 'PHP', 'Laravel', 'REST APIs', 'Authentication'],
      },
      {
        id: 'frontend',
        name: 'Frontend',
        items: ['React', 'Angular', 'Quasar', 'TypeScript', 'Tailwind CSS'],
      },
      {
        id: 'cloud',
        name: 'Cloud and databases',
        items: ['S3', 'Lambda', 'Glue', 'SQL Server', 'Supabase', 'Stored procedures', 'Query optimisation'],
      },
      {
        id: 'ways',
        name: 'Ways of working',
        items: ['Git', 'Scrum', 'Kanban', 'Technical documentation'],
      },
    ],
  },

  teaching: {
    title: 'Teaching',
    intro:
      'Alongside the technical work, I have trained students and fellow teachers in technology. Explaining a system well is part of building it.',
    items: [
      {
        id: 'revotic',
        role: 'Trainer in technology and teaching methods',
        org: 'REVOTIC programme — Government of Magdalena and Universidad Americana',
        period: 'Jun — Dec 2025',
        // MISSING METRIC: how many teachers went through the programme.
        description:
          'Trained teachers in computational thinking, digital tools and classroom innovation, and designed the programme content.',
      },
      {
        id: 'ie',
        role: 'Technology and computing teacher',
        org: 'Public school, District of Barranquilla',
        period: 'Jan — Jun 2022',
        description:
          'Taught office software and database fundamentals with MySQL, using hands-on SQL query exercises.',
      },
    ],
  },

  education: {
    title: 'Education',
    formalTitle: 'Degrees',
    coursesTitle: 'Courses and certifications',
    formal: [
      {
        degree: 'Systems Engineering',
        note: 'In progress, 7th semester',
        school: 'Politécnico de la Costa Atlántica, Barranquilla',
      },
      {
        degree: 'Software Development Technologist',
        note: null,
        school: 'Politécnico de la Costa Atlántica, Barranquilla',
      },
      {
        degree: 'Information Systems Analysis and Development Technologist',
        note: null,
        school: 'SENA, Barranquilla',
      },
    ],
    courses: [
      { name: 'Oracle Next Education', org: 'Oracle — Software development and databases' },
      { name: 'Data Analysis, advanced level', org: 'Talento Tech and Universidad Libre' },
      { name: 'Programming Fundamentals', org: 'Misión TIC — Universidad Tecnológica de Pereira' },
      { name: 'Intermediate Conversational English', org: 'SENA, Barranquilla' },
    ],
  },

  contact: {
    title: 'Contact',
    intro: 'Available for Data Engineer or Full Stack Developer roles, including remote and international positions.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    phone: 'Phone',
    linkedin: 'LinkedIn',
    cta: 'Download full résumé',
  },

  footer: {
    location: 'Barranquilla, Colombia',
    builtWith: 'Built with Astro, React and Tailwind CSS',
    toTop: 'Back to top',
  },
};
