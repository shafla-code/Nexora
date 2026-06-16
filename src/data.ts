import { Service, PortfolioItem, Testimonial, Stat, WhyChooseFact } from './types';

// Let's use the actual generated images
export const IMAGES = {
  hero: '/src/assets/images/nexora_hero_1781595858903.jpg',
  team: '/src/assets/images/nexora_team_1781595879232.jpg'
};

export const SERVICES: Service[] = [
  {
    id: 'smm',
    title: 'Social Media Marketing',
    description: 'Grow your brand on Instagram, Facebook, LinkedIn, and YouTube with highly engaging, viral campaigns designed for attention.',
    iconName: 'Share2',
    colorGradient: 'from-pink-500/20 to-teal-500/20 hover:border-pink-500/50'
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    description: 'Improve search page rankings and dramatically increase organic traffic utilizing advanced, algorithmic SEO strategies and optimizations.',
    iconName: 'Search',
    colorGradient: 'from-blue-500/20 to-lime-500/20 hover:border-blue-500/50'
  },
  {
    id: 'perf',
    title: 'Performance Marketing',
    description: 'Maximize your advertising return on investment (ROI) through laser-targeted Google Ads, bidding networks, and social paid amplification.',
    iconName: 'TrendingUp',
    colorGradient: 'from-orange-500/20 to-yellow-500/20 hover:border-orange-500/50'
  },
  {
    id: 'brand',
    title: 'Branding & Creative Design',
    description: 'Build timeless, memorable brand identities with stunning interactive graphic design guidelines, high-fidelity logos, and typography structures.',
    iconName: 'Palette',
    colorGradient: 'from-purple-500/20 to-nexora-teal/20 hover:border-purple-500/50'
  },
  {
    id: 'content',
    title: 'Content Creation',
    description: 'Produce stunning video content, high-retention reels, custom graphics, modern photography, and persuasive, copywrited materials.',
    iconName: 'Film',
    colorGradient: 'from-red-500/20 to-nexora-lime/20 hover:border-red-500/50'
  },
  {
    id: 'webdev',
    title: 'Website Design & Development',
    description: 'Design breathtaking, lightning-fast, highly responsive and converting custom websites for businesses using bleeding-edge stacks.',
    iconName: 'Code',
    colorGradient: 'from-cyan-500/20 to-emerald-500/20 hover:border-cyan-500/50'
  },
  {
    id: 'ai',
    title: 'AI-Powered Marketing',
    description: 'Leverage generative AI for customer journeys, workflows, continuous performance forecasting, predictive insights, and automated chatbots.',
    iconName: 'Cpu',
    colorGradient: 'from-purple-500/20 to-nexora-teal/20 hover:border-nexora-lime/50'
  }
];

export const STATS: Stat[] = [
  {
    id: 'projects',
    value: 100,
    suffix: '+',
    label: 'Projects Completed'
  },
  {
    id: 'clients',
    value: 50,
    suffix: '+',
    label: 'Happy Clients'
  },
  {
    id: 'experience',
    value: 5,
    suffix: '+',
    label: 'Years Experience'
  },
  {
    id: 'satisfaction',
    value: 95,
    suffix: '%',
    label: 'Client Satisfaction'
  }
];

export const MISSION_VISION = [
  {
    type: 'Mission',
    title: 'Our Purpose',
    description: 'To pioneer hyper-growth trajectories for modern ambitious brands through a synthesis of creative bravery, analytical precision, and custom emerging marketing technologies.'
  },
  {
    type: 'Vision',
    title: 'Looking Forward',
    description: 'To lead as the vanguard of the digital agency ecosystem, seamlessly blending human artistry with AI automation to set brand standards of global digital excellence.'
  }
];

export const WHY_CHOOSE_FACTS: WhyChooseFact[] = [
  {
    id: 'strat',
    title: 'Innovative Strategies',
    description: 'We stay ahead of updates and consumer shifts to craft boundary-pushing tactics that leapfrog stale competitors.',
    iconName: 'Lightbulb'
  },
  {
    id: 'crea',
    title: 'Creative Excellence',
    description: 'Every interface, asset, and slogan we output is treated like fine gallery art that evokes genuine emotion.',
    iconName: 'Sparkles'
  },
  {
    id: 'data',
    title: 'Data-Driven Decisions',
    description: 'No guessing games. We structure granular dashboards tracking core KPIs, conversion lifespans, and attribution.',
    iconName: 'BarChart2'
  },
  {
    id: 'comm',
    title: 'Transparent Communication',
    description: 'Get weekly live syncs, real-time shared workspace access, and jargon-free honest diagnostic updates.',
    iconName: 'MessageSquare'
  },
  {
    id: 'solu',
    title: 'Customized Solutions',
    description: 'No copy-paste playbooks. We audit your audience niche and construct custom bespoke marketing playbooks.',
    iconName: 'Cpu'
  },
  {
    id: 'res',
    title: 'Measurable Results',
    description: 'We align agency fees with actual business growth, emphasizing leads, sales, and sustainable customer acquisition cost (CAC).',
    iconName: 'ShieldCheck'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port1',
    title: 'Apex E-commerce Brand Acceleration',
    category: 'Social Media Campaigns',
    client: 'Apex Wear',
    image: 'https://picsum.photos/seed/apex/800/600',
    metrics: '+412% ROAS Improvement',
    description: 'Engineered a targeted micro-influencer content ecosystem across TikTok and Instagram Reels, driving record organic demand and scaling paid conversions.'
  },
  {
    id: 'port2',
    title: 'Elevate FinTech Visual Identity',
    category: 'Branding Projects',
    client: 'Elevate Money',
    image: 'https://picsum.photos/seed/elevate/800/600',
    metrics: 'Brand Awareness Up 180%',
    description: 'Reconceptualized custom high-contrast graphic assets, responsive logos, color strategies, and web guidelines establishing modern institutional credibility.'
  },
  {
    id: 'port3',
    title: 'Omni Retail High-Converting Portal',
    category: 'Website Designs',
    client: 'Omni Retail Group',
    image: 'https://picsum.photos/seed/omni/800/600',
    metrics: '2.4s Faster Load / +38% Conversions',
    description: 'Built a sleek, glassmorphic client interface combining modern animations, simplified one-click checkouts, and premium brand storytelling.'
  },
  {
    id: 'port4',
    title: 'Vanguard Auto Premium Ad Series',
    category: 'Video Production',
    client: 'Vanguard Electric',
    image: 'https://picsum.photos/seed/vanguard/800/600',
    metrics: '3.5M high-retention Views',
    description: 'Filmed and produced futuristic 4K cinema commercials matching luxury visual guidelines for social campaigns and digital programmatic outlets.'
  },
  {
    id: 'port5',
    title: 'Global SaaS Global Expansion Search',
    category: 'SEO Case Studies',
    client: 'TaskFlow Inc.',
    image: 'https://picsum.photos/seed/taskflow/800/600',
    metrics: '+1.2M Monthly Organic Hits',
    description: 'Realigned architectural content strategy and backlinking metrics for 80 high-intent enterprise SaaS industry topics, displacing category leaders.'
  },
  {
    id: 'port6',
    title: 'Z-Generation Fashion Growth Campaign',
    category: 'Social Media Campaigns',
    client: 'Revamp Clo',
    image: 'https://picsum.photos/seed/revamp/800/600',
    metrics: '75,000 New Followers in 90 Days',
    description: 'Constructed an immersive, trend-reactive video creation and content amplification program tailored to Gen-Z aesthetic preferences.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test1',
    name: 'Sophia Reynolds',
    company: 'Vanguard Labs',
    role: 'VP of Marketing',
    avatar: 'https://picsum.photos/seed/sophia/150/150',
    rating: 5,
    text: 'Working with Nexora completely shifted our growth metrics. Their AI-driven strategies scaled our organic search traffic by over 300% in a matter of months. Unparalleled expertise!'
  },
  {
    id: 'test2',
    name: 'Marcus Chen',
    company: 'Apex Apparel',
    role: 'Founder & CEO',
    avatar: 'https://picsum.photos/seed/marcus/150/150',
    rating: 5,
    text: 'The absolute best digital marketing decision we have ever made. Their performance marketing team managed to slice our customer acquisition costs (CAC) in half while scaling spend!'
  },
  {
    id: 'test3',
    name: 'Elena Rostova',
    company: 'Stellar FinTech',
    role: 'Chief Operations Officer',
    avatar: 'https://picsum.photos/seed/elena/150/150',
    rating: 5,
    text: 'Nexora is not just an outsourced agency—they are an extension of our vision. They completely modernized our brand identity and launched a high-converting web app that customers adore.'
  },
  {
    id: 'test4',
    name: 'Robert Vance',
    company: 'EduPath Global',
    role: 'Director of Growth',
    avatar: 'https://picsum.photos/seed/robert/150/150',
    rating: 5,
    text: 'Their transparency and continuous alignment with our goals are refreshing. Every recommendation is verified by live dashboards instead of hand-waved vanity stats.'
  }
];
