export const siteConfig = {
    name: 'Grupo Sportivo de Carcavelos',
    shortName: 'GS',
    tagline: 'Fundado em 1922',
    contactEmail: 'gscarcavelos@gmail.com',
    phone: '+351 214 570 894',
    address: 'Rua Plácido Abreu, 70 – 2775-617 Carcavelos',
    trainingGround: 'Campo da Quinta Nova',
    social: {
        facebook: 'https://facebook.com/GSCarcavelos',
        instagram: 'https://instagram.com/gs_carcavelos',
        youtube: 'https://youtube.com/channel/UCnz-mEE0hbXLL6RPzxDrFlg',
    },
};

export const heroContent = {
    title: 'Grupo Sportivo de',
    highlight: 'Carcavelos',
    description: 'Clube desportivo fundado em 1922. Futebol, ginástica, karaté, boxe olímpico e halterofilismo — mais de 100 anos de desporto e comunidade em Carcavelos.',
    image: '/images/hero/campo-quinta-nova.jpg',
};

export const stats = [
    { label: 'Anos de História', value: '102', icon: 'star' },
    { label: 'Modalidades', value: '5', icon: 'sports' },
    { label: 'Escalões Futebol', value: '8', icon: 'football' },
    { label: 'Atletas Ativos', value: '300', suffix: '+', icon: 'users' },
];

export const sports = [
    {
        name: 'Futebol',
        slug: 'futebol',
        description: '8 escalões de formação, do Sub-7 ao Sénior e Veteranos. Treinos no Campo da Quinta Nova.',
        image: '/images/sports/futebol.png',
        color: 'green',
        location: 'Campo da Quinta Nova',
        coordinators: ['Alberto Correia', 'Luis Fradinho'],
    },
    {
        name: 'Ginástica',
        slug: 'ginastica',
        description: 'Ginástica Formativa, Acrobática e Trampolins. Treinos na Escola Secundária de Carcavelos.',
        image: '/images/sports/ginastica.png',
        color: 'violet',
        location: 'Escola Secundária de Carcavelos',
        coordinators: [],
    },
    {
        name: 'Karaté',
        slug: 'karate',
        description: 'Arte marcial japonesa para todas as idades e níveis. Disciplina, respeito e técnica.',
        image: '/images/sports/karate.png',
        color: 'amber',
        location: '',
        coordinators: [],
    },
    {
        name: 'Boxe Olímpico',
        slug: 'boxe',
        description: 'Disciplina olímpica com tradição no clube. Treinos técnicos e preparação física.',
        image: '/images/gallery/campo-1.jpg',
        color: 'rose',
        location: '',
        coordinators: [],
    },
    {
        name: 'Halterofilismo',
        slug: 'halterofilismo',
        description: 'Força e técnica com história de conquistas nacionais e internacionais.',
        image: '/images/hero/football-aerial.jpg',
        color: 'blue',
        location: 'Quinta Nova',
        coordinators: [],
    },
];

export const footballGroups = [
    { name: 'Traquinas/Petizes', ageRange: 'Nascidos 2018-2020', schedule: 'Seg/Qua/Sex 18:00' },
    { name: 'Benjamins', ageRange: 'Nascidos 2015-2017', schedule: 'Seg/Qua/Sex 18:00' },
    { name: 'Infantis', ageRange: 'Nascidos 2013-2014', schedule: 'Ter/Qui 18:00 | Sex 18:30' },
    { name: 'Iniciados', ageRange: 'Nascidos 2011-2012', schedule: 'Ter/Qui 18:30 | Sex 19:00' },
    { name: 'Juvenis', ageRange: 'Nascidos 2008-2010', schedule: 'Seg/Qua 19:00 | Sex 19:30' },
    { name: 'Juniores', ageRange: 'Nascidos 2005-2007', schedule: 'Seg/Qua 20:00 | Sex 20:00' },
    { name: 'Seniores', ageRange: 'Nascidos 2005 e anteriores', schedule: 'Ter/Qui 20:30 | Sex 21:00' },
    { name: 'Veteranos', ageRange: 'Maiores de 35 anos', schedule: 'Ter/Qui 22:00' },
];

export const gymnasticsPrograms = [
    {
        name: 'Ginástica Formativa',
        description: 'Base técnica e desenvolvimento motor para jovens atletas. Coordenação, flexibilidade e força.',
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
    },
    {
        name: 'Ginástica Acrobática',
        description: 'Acrobacia e coreografia em grupo. Trabalho de pares e trios com elementos dinâmicos.',
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    },
    {
        name: 'Trampolins',
        description: 'Saltos e figuras aéreas em trampolim. Desenvolvimento da consciência espacial e técnica aérea.',
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    },
];

export const values = [
    {
        title: 'Tradição',
        desc: 'Mais de 100 anos de história desportiva em Carcavelos, desde o ciclismo pioneiro de 1927.',
        color: 'green',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    },
    {
        title: 'Formação',
        desc: 'Desenvolvimento integral de jovens atletas em 5 modalidades desportivas.',
        color: 'violet',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 10 3 12 0v-5"/></svg>',
    },
    {
        title: 'Comunidade',
        desc: 'Um clube que une gerações e promove o desporto como ferramenta de inclusão social.',
        color: 'amber',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    },
];

export const socioBenefits = [
    { title: 'Multi-desporto', desc: 'Acesso a 5 modalidades desportivas com horários flexíveis.', color: 'green', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>' },
    { title: 'Seguro Desportivo', desc: 'Cobertura de seguro para a prática desportiva.', color: 'violet', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
    { title: 'Eventos Exclusivos', desc: 'Beach Cup, torneios e atividades sociais do clube.', color: 'amber', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>' },
    { title: 'Descontos Parceiros', desc: 'Vantagens em lojas e serviços parceiros do GS.', color: 'green', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>' },
    { title: 'Voto em Assembleia', desc: 'Participação ativa nas decisões do clube.', color: 'violet', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
    { title: 'Formação Contínua', desc: 'Acesso a workshops e formações desportivas.', color: 'amber', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>' },
];

export const socioDuties = [
    'Pagamento pontual das quotas anuais.',
    'Respeitar o regulamento interno do clube.',
    'Zelar pela conservação dos espaços e equipamentos.',
    'Contribuir para um ambiente seguro e inclusivo.',
];

export const events = [
    { title: 'Cascais Beach Cup 2026', date: 'Jul 2026', desc: 'Torneio de futebol de praia na costa de Cascais.', tag: 'Torneio', color: 'green' },
    { title: 'Abertura de Época 2025/2026', date: 'Set 2025', desc: 'Início da nova temporada desportiva em todas as modalidades.', tag: 'Clube', color: 'violet' },
    { title: 'Assembleia Geral', date: 'Jan 2026', desc: 'Aprovação do relatório de contas e plano de atividades.', tag: 'Assembleia', color: 'amber' },
    { title: 'Festa de Natal GS', date: 'Dez 2025', desc: 'Convívio natalício para sócios, atletas e famílias.', tag: 'Social', color: 'green' },
];
