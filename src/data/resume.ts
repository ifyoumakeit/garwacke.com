export const profile = {
  name: 'Dave Garwacke',
  pronouns: 'he/him',
  role: 'Staff Software Engineer',
  company: 'Whatnot',
  location: 'Kingston, New York',
  tagline:
    'Twenty years building teams and products that stay fast, accessible, and hard to break.',
  intro:
    "I build modular front-end systems and lead the people who ship them. For a decade at Warby Parker and now Whatnot, I've moved between principal engineer and engineering manager, leading storefront rebuilds, developer tooling, and design systems with performance and accessibility at the center.",
  email: 'dave@garwacke.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/ifyoumakeit',
    github: 'https://github.com/ifyoumakeit',
  },
};

export type Job = {
  company: string;
  title: string;
  period: string;
  location?: string;
  summary: string;
  highlights?: string[];
  stack?: string[];
};

export const experience: Job[] = [
  {
    company: 'Whatnot',
    title: 'Staff Software Engineer',
    period: 'Feb 2025 – Present',
    summary:
      'Building the live-shopping marketplace, focused on front-end architecture, performance, and reliability.',
    stack: ['React', 'TypeScript', 'Next.js', 'Cloudflare', 'AWS'],
  },
  {
    company: 'Warby Parker',
    title: 'Principal Engineer, Customer-Facing Applications',
    period: 'Nov 2023 – Oct 2024',
    summary:
      'Led architecture for the customer-facing web, iOS, and Python API stack.',
    highlights: [
      'Led the migration from custom auth to Auth0, improving security and scale.',
      'Stood up OpenTelemetry alerting for on-call, cutting incident response times.',
      "Raised the site's PageSpeed score by reducing main-thread work and blocking resources.",
    ],
    stack: ['Next.js', 'React', 'Auth0', 'OpenTelemetry', 'Python'],
  },
  {
    company: 'Warby Parker',
    title: 'Engineering Manager',
    period: 'Mar 2021 – Oct 2023',
    summary:
      'Managed cross-functional teams of staff and contractors, setting KPIs and OKRs against company goals.',
    highlights: [
      'Planned and ran the migration of legacy code to Next.js and TypeScript.',
      'Shipped an in-house, web-based Virtual Try-On with TensorFlow for non-iOS users.',
      'Rebuilt Checkout from the ground up around modular, customizable flows.',
      'Set up an accessible design system that cut time-to-ship by two sprints.',
    ],
    stack: ['Next.js', 'TypeScript', 'TensorFlow', 'Design Systems'],
  },
  {
    company: 'Warby Parker',
    title: 'Principal Engineer, Web',
    period: 'Jul 2018 – Jan 2021',
    summary:
      "Set web architecture direction on the company's Architecture Council.",
    highlights: [
      'Built Pepper, an in-house AWS tool for deploying single-page apps, cutting deploy times.',
      'Introduced RFCs and Architecture Decision Records to standardize technical decisions.',
    ],
    stack: ['React', 'AWS CloudFormation', 'CodeBuild'],
  },
  {
    company: 'Warby Parker',
    title: 'Senior Front-end Developer, Team Lead',
    period: 'Jul 2016 – Jul 2018',
    summary:
      'Built accessible, progressively enhanced features for the isomorphic React storefront, and started the Front-end Guild.',
    stack: ['React', 'SASS', 'Web Applications'],
  },
  {
    company: 'Warby Parker',
    title: 'Front-end Developer',
    period: 'Sep 2014 – Jul 2016',
    summary:
      'Built the responsive storefront in isomorphic React on a Backbone, Flux-style architecture, with experiment variations for any CMS content.',
    stack: ['React', 'Backbone', 'Flux'],
  },
  {
    company: 'If You Make It',
    title: 'Founder, Lead Developer',
    period: '2005 – 2015',
    location: 'Brooklyn, NY',
    summary:
      'Founded and ran IYMI, a music site home to the Pink Couch Sessions, an acoustic video series I started in 2006. Built and maintained the full custom stack.',
    stack: ['PHP', 'MySQL', 'jQuery'],
  },
  {
    company: 'EngageSciences',
    title: 'Client Services Engineer',
    period: 'Jan 2014 – Sep 2014',
    location: 'Brooklyn, NY',
    summary:
      "Built custom campaigns on the company's APIs, including a mobile face-painting contest using canvas and camera access.",
    stack: ['JavaScript', 'Canvas', 'CSS'],
  },
];

export const skills = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS/SASS'] },
  { group: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'Astro'] },
  { group: 'Focus', items: ['Accessibility', 'Web Performance', 'Design Systems', 'Modular Architecture'] },
  { group: 'Platform', items: ['AWS', 'Cloudflare', 'Auth0', 'OpenTelemetry'] },
];

export const education = {
  school: 'SUNY New Paltz',
  degree: 'B.S. Computer Engineering',
  period: '2001 – 2005',
};

// Bands from Dave's own earlier site. Swap for specific record titles
// (album — artist, year) if a full discography is preferred.
export const bands = [
  "He's A Cop?!",
  'Air Raid Barcelona',
  'Halo Fauna',
  'Golden Age of Radio',
  'The State Lottery',
  'Thousandaires',
  'Kudreau',
  'Laura Stevenson',
];

export const personal = {
  heading: 'Off the clock',
  body:
    "I've played drums since I was twelve. Under the If You Make It banner I recorded over 150 bands for the Pink Couch Sessions and toured the US and Europe, with four LPs and ten EPs on labels like Don Giovanni and Salinas. Good records come down to structure, timing, and doing right by the people in the room. So does good engineering.",
};
