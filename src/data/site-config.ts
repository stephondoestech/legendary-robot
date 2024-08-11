export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href?: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Stephon Parker',
    subtitle: 'Engineering Leader | Software Developer | Mentor | Aspiring Speaker | Writer | Entrepreneur',
    description: 'Blog for Stephon Parker, an engineering leader, software developer, mentor, speaker, writer, and entrepreneur. He is passionate about building high-performing teams, creating scalable and maintainable software, and helping others grow in their careers.',
    image: {
        src: '/images/IMG_2665.png',
        alt: 'AI generated image of Stephon Parker looking down wearing a hoodie.'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: '|',
        },
        {
            text: 'Podcast',
            href: 'https://podcasters.spotify.com/pod/show/stephondoestech'
        },
        {
            text: '|',
        },
        {
            text: 'Business Inquiries',
            href: '/business'
        }
    ],
    footerNavLinks: [
        {
            text: 'Privacy',
            href: '/privacy'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'Threads',
            href: 'https://www.threads.net/@stephondoestech'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/stephondoestech/'
        },
        {
            text: 'YouTube',
            href: 'https://youtube.com/channel/UCwwWc-5s7GqH8nV9bOMeI1g'
        },
        {
            text: 'Email',
            href: 'mailto:me@stephondoestech.dev'
        }
    ],
    hero: {
        title: 'Empowering Innovation, Inspiring Minds, Transforming the Future.',
        text: "I'm **Stephon Parker**, Senior Enginerring Manager (SRE) at The New Yorks Times. As an Engineering Leader and Software Developer, I harness the power of technology to drive positive change. My mission is to lead with integrity, fostering innovation and ensuring every voice is heard. I am dedicated to sharing knowledge and inspiring the next generation of engineers, guiding them to reach their full potential. Driven by a passion for innovation, a commitment to excellence, and a belief in the power of collaboration and mentorship, I strive to shape a better future.\n\n\n  When I'm not working i'm either spending every moment I can with my wonderful toddler, reading outside with my dog, gaming, or tinkering on projects around the house.", 
        image: {
            src: '/images/IMG_2669.png',
            alt: 'AI generated image of Stephon Parker looking into a camera.'
        },
        actions: [
            {
                text: "Let's Connect",
                href: '/contact'
            }
        ]
    },
/*     subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    }, */
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
