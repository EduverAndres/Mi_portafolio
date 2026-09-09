/**
 * English dictionary. Typed against `es.ts`: if a key exists there and is
 * missing here, the build fails.
 *
 * Same rule as the Spanish file: every bullet reads complete WITHOUT the
 * number, so the page never shows a gap. Nothing here is invented.
 */

import type { Dict } from './types';

export const en: Dict = {
  meta: {
    title: 'Eduver Gutiérrez — Data Engineer & Full Stack Developer',
    description:
      'Data Engineer and Full Stack Developer with 3+ years of experience. ETL/ELT pipelines on Snowflake, AWS and Databricks with Python, PySpark and SQL, plus APIs with FastAPI, Spring Boot and Vue.js. Based in Barranquilla, Colombia. Open to remote or relocation.',
    ogAlt: 'Eduver Gutiérrez, Data Engineer and Full Stack Developer',
  },

  nav: {
    experiencia: 'Experience',
    proyectos: 'Projects',
    habilidades: 'Skills',
    docencia: 'Teaching',
    educacion: 'Education',
    contacto: 'Contact',
    cv: 'Download CV',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    skipToContent: 'Skip to content',
    langLabel: 'Change language',
    switchTo: 'Ver en español',
    switchToShort: 'ES',
  },

  hero: {
    available: 'Available for new opportunities',
    availableMode: 'Remote / Relocation',
    anchor: 'Data Engineer',
    secondaryRole: 'Full Stack Developer',
    secondaryStack: 'FastAPI · Spring Boot · Vue.js · Angular',
    positioning:
      'I build ETL/ELT pipelines on Snowflake and AWS, and the APIs that put those data to work in production.',
    metrics: [
      {
        // MISSING METRIC: his dates (Jul 2022 → today) add up to over 4 years.
        value: '3+',
        label: 'years of experience',
      },
      {
        // TEMPORARY STAND-IN. The hard data metric goes here: pipelines in
        // production, or volume processed. Until then, an equally verifiable
        // fact: AWS at TIMIA and ICUBO, Azure at GECELCA.
        value: '2',
        label: 'clouds in production, AWS and Azure',
      },
      {
        value: '3',
        label: 'companies: TIMIA, ICUBO, GECELCA',
      },
    ],
    ctaPrimary: 'Download CV',
    ctaSecondary: 'View GitHub',
    cvHint: 'PDF, opens in a new tab',
    pipeline: {
      title: 'A typical pipeline I build, end to end',
      sources: 'Sources',
      ingest: 'Ingest',
      transform: 'Transform',
      warehouse: 'Warehouse',
      serve: 'Analytics',
    },
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
        location: 'Spain',
        bullets: [
          // MISSING METRIC: sources integrated and volume processed.
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
        location: 'Barranquilla, Colombia',
        bullets: [
          // MISSING METRIC: models, tables or business areas covered.
          'Modelled the analytical warehouse on Snowflake using star schemas, so business teams could query their own indicators without going through the technical team.',
          // MISSING METRIC: the most valuable one. Before and after timings.
          'Rewrote the slowest SQL queries and reshaped the data model, cutting response time on business-critical reports.',
          'Provisioned data infrastructure with Terraform and IAM, keeping access and resources versioned instead of configured by hand.',
          // MISSING METRIC: manual hours removed per month.
          'Automated recurring loads with Python and SQL that were previously run by hand.',
        ],
        stack: ['Snowflake', 'SQL', 'Python', 'AWS', 'Terraform', 'IAM'],
      },
      {
        id: 'gecelca',
        role: 'Information Analyst & Software Developer',
        company: 'GECELCA S.A.S',
        contract: null,
        period: 'Jul 2022 — Dec 2024',
        location: 'Barranquilla, Colombia',
        bullets: [
          // MISSING METRIC: how many applications and how many internal users.
          'Developed internal applications with FastAPI and Vue.js on Oracle and SQL Server, used by the company operational teams.',
          'Built ETL processes with Python and SQL, and worked with Azure Data Factory, Data Lake and Databricks for analytical loads.',
          // MISSING METRIC: how many systems or integrations were migrated.
          'Supported the migration of legacy systems towards REST APIs, replacing integrations coupled directly to the database.',
          // MISSING METRIC: concrete improvement on the slowest reports.
          'Optimised queries and stored procedures on Oracle, targeting the reports that took longest to run.',
        ],
        stack: ['Python', 'FastAPI', 'Azure Data Factory', 'Databricks', 'Oracle', 'SQL Server', 'Vue.js'],
      },
    ],
  },

  projects: {
    title: 'Projects',
    visit: 'View live site',
    opensNewTab: 'opens in a new tab',
    reserved: {
      label: 'In preparation',
      name: 'End-to-end data pipeline',
      description:
        'Ingestion from a public API, transformation and load into a warehouse, orchestrated and with a dashboard at the end. Public, documented repository.',
      note: 'This is the project that carries the most weight for a Data Engineer role. The block is already laid out: as soon as the repository exists, it gets published here.',
    },
    items: {
      nexus: {
        name: 'NEXUS — Tecnología Inteligente',
        status: 'Business idea in progress',
        role: 'Personal venture',
        description:
          'A software and data science venture of my own that I am building. The offering is defined —custom software, web and mobile applications, analytical dashboards and generative AI integrations— and the site is already live, but the business is still at an early stage.',
        tags: ['Web development', 'Data science', 'Generative AI', 'Cloud'],
        imageAlt: 'Home page of the NEXUS Tecnología Inteligente website',
      },
      fincayraiz: {
        name: 'Finca y Raíz',
        status: null,
        role: 'Development and architecture',
        description:
          'Real estate marketplace for houses, apartments and country properties, with an AI advisor that interprets what the user needs before recommending listings.',
        tags: ['Marketplace', 'Generative AI', 'REST APIs'],
        imageAlt: 'Property search page of the Finca y Raíz website',
      },
    },
  },

  skills: {
    title: 'Skills',
    intro: 'Grouped by what I actually command, not by everything I have ever touched.',
    levels: [
      {
        id: 'core',
        name: 'Core',
        note: 'What I use daily and can defend in a technical interview',
        items: ['Python', 'SQL', 'Snowflake', 'PySpark', 'AWS · S3, Lambda, Glue', 'FastAPI', 'Databricks'],
      },
      {
        id: 'solid',
        name: 'Solid',
        note: 'Real project experience, comfortable with it',
        items: [
          'ETL / ELT',
          'Dimensional modelling',
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
        name: 'Familiar',
        note: 'I have worked with it, would not call it my strength',
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
    intro: 'Available for Data Engineer roles: remote, LATAM or Spain.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cta: 'Download full résumé',
  },

  footer: {
    location: 'Barranquilla, Colombia',
    builtWith: 'Built with Astro, Preact and Tailwind CSS',
    toTop: 'Back to top',
  },
};
