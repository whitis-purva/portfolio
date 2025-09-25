const projects = [
  {
    slug: "reporting-platform",
    title: "Reporting platform for lenders",
    category: "UX Design",
    heroImages: [
      { src: "/reporting-platform.png", alt: "LendingInsights reporting platform dashboard showing all products, participation and penetration metrics, and product-specific data" },
    ],
    keyResults: [
      "Achieved perfect 5/5 SUPR-Q score from beta clients",
      "Replaced legacy software saving $65K annually",
      "Enabled daily access to coaching and training insights"
    ],
    sections: [
      {
        heading: "Role",
        text: "Senior UX Designer collaborating with UX research and engineering teams"
      },
      {
        heading: "Objective",
        text: "Our legacy software solution for reporting on point of sale products is currently unusable. A support team created a stop-gap manual process with spreadsheets and pivot tables, but our clients really want a dynamic solution they can easily access."
      },
      {
        heading: "Lo-fi prototype",
        text: "After meeting with our business subject matter expert to understand the current stop-gap manual process, I designed a low-fi prototype and iterated through through a few feedback rounds, first.",
        images: [
          { src: "/lo-fi-1.png", alt: "First low-fidelity prototype screen" },
          { src: "/low-fi-2.png", alt: "Second low-fidelity prototype screen after iteration" }
        ],
        caption: "Screens from my first low-fi prototype, and after a few rounds of iteration with our business SME"
      },
      {
        heading: "First hi-fi prototype",
        text: "After validating the final lo-fi prototype with members of our sales team, I designed the first hi-fi version using our design system. We took the first version of the hi-fi prototype to client interviews.",
        image: "/hi-fi-1.png"
      },
      {
        heading: "Client interviews",
        text: "From our clients, we learned that their primary use case with this reporting was to coach their employees on how to boost sales in lagging areas. The screen below shows how individual loan officer metrics were only accessible by one product at a time. Clients wanted to see a loan officer's performance across all products at the same time.",
        image: "/hi-fi-2.png"
      },
      {
        heading: "Hi-fi v2",
        text: "I iterated rapidly so that our researcher would be able to show v2 to clients with whom we had already scheduled interviews. Our access to clients was limited, so we needed to make the most of our sessions. The new information architecture structures the content by levels in the organization instead of by financial product.",
        image: "/hi-fi-v2-1.png"
      },
      {
        heading: "Design review and final version",
        text: "The clients and sales team loved the new information architecture, but there was a consistent pattern of feedback that they missed the donut charts in earlier versions. The visual elements made it easier to get information at a glance. They also liked the idea of color coding the chips showing trend information as positive or negative to further the ease of scanning the data. Design reviews led to some minor restructuring of the placement of global elements, as well, to ensure consistency across our suite of products.",
        image: "/final-1.png"
      }
    ],
    results: [
      "Sales team feedback:\n\"I see all of our accounts growing as a result of this.\"\n\"Love it... that's exactly what we would need.\"",
      "Client feedback:\n\"I would love to have this at my fingertips every day, and we would use this every single day.\"\n\"It truly would be my one-stop shop to see what my coaching and training needs are.\"",
      "After 6 weeks of beta testing, our clients gave the platform a perfect 5/5 SUPR-Q score, demonstrating exceptional user satisfaction and usability.",
      "Our new reporting platform will also save the business $65K annually by replacing the need for licensing the legacy software they previously used."
    ]
  },
  {
    slug: "saas-product",
    title: "SaaS product for CRE financing",
    category: "UX Design",
    heroImages: [
      { src: "/project2.png", alt: "Commercial real estate financing platform dashboard" },
    ],
    keyResults: [
      "Increased user onboarding completion by 40%",
      "Reduced time-to-first-deal by 60%",
      "Achieved 95% user satisfaction in beta testing"
    ],
    sections: [
      {
        heading: "Role",
        text: "Lead UX Designer working with product management and engineering teams"
      },
      {
        heading: "Objective",
        text: "Create an intuitive platform for commercial real estate professionals to discover, evaluate, and secure financing opportunities. The existing solution was complex and required extensive training, leading to low adoption rates."
      },
      {
        heading: "User research",
        text: "Conducted 15+ interviews with CRE professionals to understand their workflow, pain points, and decision-making process. Key insights revealed that users needed to quickly compare multiple financing options while maintaining context of their specific deal requirements.",
        image: "/project2-research.png"
      },
      {
        heading: "Information architecture",
        text: "Restructured the platform around the user's deal-centric workflow rather than product-centric navigation. Created a clear hierarchy that prioritized deal creation and comparison over administrative functions.",
        image: "/project2-ia.png"
      },
      {
        heading: "Dashboard design",
        text: "Designed a personalized dashboard that surfaces relevant opportunities based on user preferences and deal history. Implemented progressive disclosure to reduce cognitive load while maintaining access to advanced features.",
        image: "/project2-dashboard.png"
      },
      {
        heading: "Deal comparison flow",
        text: "Created an intuitive comparison interface that allows users to evaluate multiple financing options side-by-side. The design emphasizes key decision factors while providing easy access to detailed terms and conditions.",
        image: "/project2-comparison.png"
      }
    ],
    results: [
      "User onboarding completion increased from 45% to 85%",
      "Average time to first deal reduced from 3 weeks to 1.2 weeks", 
      "95% of beta users rated the platform as 'easy to use' or 'very easy to use'",
      "Customer support tickets decreased by 70% after launch"
    ]
  },
  {
    slug: "retirement-services-app",
    title: "Retirement services app",
    category: "UX Design",
    heroImages: [
      { src: "/project3.png", alt: "Mobile retirement planning app interface" },
    ],
    keyResults: [
      "Reduced task completion time by 50%",
      "Achieved 90% user task success rate",
      "Increased mobile engagement by 200%"
    ],
    sections: [
      {
        heading: "Role",
        text: "UX Designer collaborating with product team and financial advisors"
      },
      {
        heading: "Objective",
        text: "Design a mobile-first retirement planning app that simplifies complex financial decisions for users approaching retirement. The existing web-based tool was difficult to use on mobile devices and had low engagement rates."
      },
      {
        heading: "User research",
        text: "Conducted interviews with 20+ users aged 50-65 to understand their retirement planning challenges. Key findings showed users struggled with overwhelming information and needed guidance through complex financial decisions.",
        image: "/project3-research.png"
      },
      {
        heading: "Mobile-first approach",
        text: "Redesigned the entire experience for mobile-first usage, focusing on bite-sized interactions and progressive disclosure. Created a simplified navigation that prioritizes the most important actions.",
        image: "/project3-mobile.png"
      },
      {
        heading: "Form simplification",
        text: "Broke down complex financial forms into digestible steps with clear progress indicators. Implemented smart defaults and contextual help to reduce user burden and increase completion rates.",
        image: "/project3-forms.png"
      },
      {
        heading: "Visual design",
        text: "Created a calming, trustworthy visual design that reduces anxiety around financial planning. Used clear typography and intuitive icons to make complex information more accessible.",
        image: "/project3-visual.png"
      }
    ],
    results: [
      "Average task completion time reduced from 8 minutes to 4 minutes",
      "90% of users successfully completed their retirement planning goals",
      "Mobile app usage increased by 200% compared to web version",
      "User satisfaction scores improved from 3.2/5 to 4.6/5"
    ]
  },
  {
    slug: "case-study-improving-lender-engagement",
    title: "Improving lender engagement",
    category: "Case Study",
    heroImages: [
      { src: "/project4.png", alt: "Lender engagement case study" },
    ],
    keyResults: [
      "Increased lender engagement by 45%",
      "Reduced support tickets by 60%",
      "Improved user satisfaction scores by 35%"
    ],
    sections: [
      {
        heading: "Role",
        text: "UX Researcher and Designer leading cross-functional discovery and design team"
      },
      {
        heading: "Objective",
        text: "Improve lender engagement and reduce support burden by redesigning the lender onboarding and management experience. Current system had high abandonment rates and required extensive support intervention."
      },
      {
        heading: "Research insights",
        text: "Conducted comprehensive research including user interviews, journey mapping, and analytics analysis. Key findings revealed that lenders struggled with complex workflows and unclear expectations.",
        image: "/project4-research.png"
      },
      {
        heading: "Journey redesign",
        text: "Redesigned the entire lender journey from initial signup through ongoing management. Simplified complex processes and created clear, guided workflows that reduced cognitive load.",
        image: "/project4-journey.png"
      },
      {
        heading: "Interface improvements",
        text: "Updated the lender dashboard and management tools with clearer information hierarchy, better visual design, and more intuitive interactions. Focused on reducing friction and improving task completion rates.",
        image: "/project4-interface.png"
      }
    ],
    results: [
      "Lender engagement increased by 45% within 3 months",
      "Support ticket volume decreased by 60%",
      "User satisfaction scores improved from 3.1/5 to 4.2/5",
      "Onboarding completion rate increased from 65% to 89%"
    ]
  },
  {
    slug: "brand-and-website-refresh",
    title: "Brand & website refresh",
    category: "Design & Leadership",
    heroImages: [
      { src: "/project5.png", alt: "Refreshed brand identity and website design" },
    ],
    keyResults: [
      "Increased website conversion by 35%",
      "Reduced bounce rate by 25%",
      "Improved brand recognition by 40%"
    ],
    sections: [
      {
        heading: "Role",
        text: "Design Director leading cross-functional team of designers, developers, and marketers"
      },
      {
        heading: "Objective",
        text: "Transform the company's outdated brand and website to better reflect our innovative technology solutions and attract enterprise clients. The existing brand felt dated and the website had poor conversion rates."
      },
      {
        heading: "Brand strategy",
        text: "Conducted brand workshops with leadership team to define our positioning as a trusted technology partner. Developed new brand pillars focused on innovation, reliability, and partnership.",
        image: "/project5-brand.png"
      },
      {
        heading: "Visual identity",
        text: "Created a modern, professional visual identity that balances approachability with technical sophistication. Developed a comprehensive color palette, typography system, and iconography that works across all touchpoints.",
        image: "/project5-visual.png"
      },
      {
        heading: "Website architecture",
        text: "Redesigned the website information architecture to better guide visitors through our solution offerings. Created clear user paths for different audience segments and simplified the navigation structure.",
        image: "/project5-ia.png"
      },
      {
        heading: "Component system",
        text: "Built a scalable design system with reusable components that ensure consistency across all marketing materials. This enabled faster content creation and maintained brand consistency as the team grew.",
        image: "/project5-components.png"
      }
    ],
    results: [
      "Website conversion rate increased from 2.1% to 2.8%",
      "Average bounce rate decreased from 65% to 49%",
      "Time on site increased by 40%",
      "Brand recognition improved by 40% in customer surveys",
      "Marketing team productivity increased by 60% with new component system"
    ]
  },
  {
    slug: "design-system",
    title: "Design system",
    category: "Design & Leadership",
    heroImages: [
      { src: "/project6.png", alt: "Comprehensive design system components and documentation" },
    ],
    keyResults: [
      "Reduced design time by 50%",
      "Improved design consistency by 90%",
      "Accelerated development velocity by 40%"
    ],
    sections: [
      {
        heading: "Role",
        text: "Design Systems Lead managing team of 3 designers and collaborating with 15+ product teams"
      },
      {
        heading: "Objective",
        text: "Create a comprehensive design system that enables consistent, efficient design and development across 12+ products. The lack of standardized components was causing design inconsistencies and slowing down both design and development teams."
      },
      {
        heading: "Audit and research",
        text: "Conducted a comprehensive audit of existing components across all products to identify patterns and inconsistencies. Interviewed 20+ designers and developers to understand their workflows and pain points.",
        image: "/project6-audit.png"
      },
      {
        heading: "Token foundation",
        text: "Established a robust token system covering colors, typography, spacing, and elevation. Created semantic naming conventions that scale across light and dark themes while maintaining accessibility standards.",
        image: "/project6-tokens.png"
      },
      {
        heading: "Component library",
        text: "Built 50+ reusable components with comprehensive variants and states. Each component includes detailed documentation, usage guidelines, and code examples for multiple frameworks.",
        image: "/project6-components.png"
      },
      {
        heading: "Figma integration",
        text: "Migrated all components to Figma with auto-layout and proper component properties. Created master components that automatically update across all files when changes are made.",
        image: "/project6-figma.png"
      },
      {
        heading: "Documentation site",
        text: "Built an interactive documentation site with live component examples, usage guidelines, and design principles. Included accessibility standards and implementation guides for developers.",
        image: "/project6-docs.png"
      }
    ],
    results: [
      "Design time reduced by 50% for new features",
      "Design consistency improved from 60% to 95% across products",
      "Development velocity increased by 40% with reusable components",
      "Design system adoption reached 100% across all product teams",
      "Reduced design QA time by 70%"
    ]
  },
];

export function getAllProjectSlugs() {
  return projects.map((p) => p.slug);
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

export default projects;


