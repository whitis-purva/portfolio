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
      { src: "/saas-product-hero.png", alt: "Commercial real estate financing platform dashboard" },
    ],
    keyResults: [
      "Mobile use increased 170% after making the platform fully responsive",
      "25% YoY increase in unique terms quoted with new dynamic flow",
      "92% of users said it's easier to quickly evaluate a deal post-launch"
    ],
    sections: [
      {
        heading: "Role",
        text: "UX strategy, product management, research, and design"
      },
      {
        heading: "Objective",
        text: "The StackSource CEO and CTO wanted to modernize and enhance our product, but were unsure of the right approach. After my hire, my top priority was to lead UX strategy and execute the redesign of our core product."
      },
      {
        heading: "Research & findings",
        text: "I planned and executed a moderated study that combined user interviews and a task-based preference test. I wanted to understand the day-to-day challenges and needs of each of our external audiences, as well as establish baseline data to support design decisions.\n\nOne surprising finding was discovering a pattern of feedback on the prominence of the StackSource brand identity in the platform. I learned through industry research that status and reputation are important in the commercial real estate industry, which supported this feedback.",
        images: [
          { src: "/saas-research-1.png", alt: "Research findings 1" },
          { src: "/saas-research-2.png", alt: "Research findings 2" },
          { src: "/saas-research-3.png", alt: "Research findings 3" },
          { src: "/saas-research-4.png", alt: "Research findings 4" },
          { src: "/saas-research-5.png", alt: "Research findings 5" }
        ],
        caption: "Presentation of findings for executive leadership"
      },
      {
        heading: "Lean personas",
        text: "Using our study findings combined with knowledge and insights from our internal subject matter experts, we created a set of lean personas for our core user base and target segments.",
        images: [
          { src: "/saas-persona-1.png", alt: "Persona 1" },
          { src: "/saas-persona-2.png", alt: "Persona 2" },
          { src: "/saas-persona-3.png", alt: "Persona 3" }
        ],
        caption: "A sample of the lean personas we created at StackSource"
      },
      {
        heading: "User journeys",
        text: "We also mapped user journeys to further consider how email and capital advisor touch points were shaping the overarching user experience. This led to enhancement and refinement of our email touch points, which are a key component of using the StackSource product.",
        images: [
          { src: "/saas-journey-1.png", alt: "User journey 1" },
          { src: "/saas-journey-2.png", alt: "User journey 2" },
          { src: "/saas-journey-3.png", alt: "User journey 3" }
        ],
        caption: "I created user journeys for each primary audience"
      },
      {
        heading: "Design",
        text: "I solicited feedback from our users throughout the design iteration process. I took accessibility compliance into consideration, which the previous design was lacking. Most importantly, I discovered that our mobile use was steadily increasing from our analytics data, and designed the new platform to be fully responsive. (The previous platform was not.)",
        images: [
          { src: "/saas-design-3.png", alt: "Design screen 3" },
          { src: "/saas-design-4.png", alt: "Design screen 4" }
        ],
        caption: "Desktop and mobile screens from my platform redesign"
      },
      {
        heading: "Key changes",
        text: "The transformation from our legacy platform to the new design addressed critical usability and accessibility issues. The previous platform lacked mobile responsiveness, had poor information hierarchy, and featured color choices that did not meet accessibility standards for contrast.\n\nOur new design introduced a mobile-first approach, simplified the user flow, and created a more intuitive interface with proper color contrast ratios and accessibility compliance.",
        image: "/saas-old.png"
      }
    ],
    results: [
      "The StackSource platform is now fully responsive, and mobile use increased 170% after launch.",
      "A new dynamic flow for quoting terms led to the highest number of unique terms quoted at StackSource in the quarter after its release, a 25% YoY increase.",
      "92% of users said it's easier to quickly evaluate a deal post-launch."
    ]
  },
  {
    slug: "retirement-services-app",
    title: "Retirement services app",
    category: "UX Design",
    heroImages: [
      { src: "/rs-hero.png", alt: "Retirement services app dashboard" },
    ],
    keyResults: [
      "Enabled accurate cost estimates for offshore development team",
      "Improved time to delivery through better scope identification",
      "Achieved 4.7 rating in iOS app store through continuous user testing"
    ],
    sections: [
      {
        heading: "Role",
        text: "UX research and design"
      },
      {
        heading: "Objective",
        text: "Because the necessary scope of the project was not well understood by the business stakeholders directing the requirements, I needed to support the team by visualizing the user flow to identify scope more accurately, and support the design process with user research and a wireframe prototype."
      },
      {
        heading: "Research plan",
        text: "Documenting a thorough research plan allowed me to gain stakeholder buy-in to fund unmoderated testing through usertesting.com so that we could move quickly and efficiently alongside development.",
        images: [
          { src: "/rs-research-1.png", alt: "Research plan 1" },
          { src: "/rs-research-2.png", alt: "Research plan 2" }
        ]
      },
      {
        heading: "User flow",
        text: "Business stakeholders provided minimum requirements that did not reflect the actual number of screens needed for development, creating a blocker for getting an accurate cost estimate from the offshore development team. I worked with IT architecture to understand the tech stack and visualize a user flow to facilitate better communication and accuracy.",
        images: [
          { src: "/rs-flow-1.png", alt: "User flow 1" },
          { src: "/rs-flow-2.png", alt: "User flow 2" }
        ],
        caption: "I created user flows to include necessary functionality (such as changing your password) that weren't documented in the requirements provided by the business"
      },
      {
        heading: "Wireframes & prototype",
        text: "I designed wireframes and a prototype to test functional requirements.",
        images: [
          { src: "/rs-wire-1.png", alt: "Wireframe 1" },
          { src: "/rs-wire-2.png", alt: "Wireframe 2" },
          { src: "/rs-wire-3.png", alt: "Wireframe 3" },
          { src: "/rs-wire-4.png", alt: "Wireframe 4" },
          { src: "/rs-wire-5.png", alt: "Wireframe 5" },
          { src: "/rs-wire-6.png", alt: "Wireframe 6" },
          { src: "/rs-wire-7.png", alt: "Wireframe 7" },
          { src: "/rs-wire-8.png", alt: "Wireframe 8" },
          { src: "/rs-wire-9.png", alt: "Wireframe 9" },
          { src: "/rs-wire-10.png", alt: "Wireframe 10" },
          { src: "/rs-wire-11.png", alt: "Wireframe 11" },
          { src: "/rs-wire-12.png", alt: "Wireframe 12" }
        ]
      }
    ],
    results: [
      "My work, which included identifying additional necessary screens (ex. change password flow), enabled the offshore development team to provide an accurate cost estimate, improving our time to delivery.",
      "My approach to continuous user testing also helped ensure we were shipping the best product possible, resulting in a 4.7 rating in the iOS app store."
    ]
  },
  {
    slug: "case-study-improving-lender-engagement",
    title: "Improving lender engagement",
    category: "Case Study",
    heroImages: null,
    keyResults: [
      "Increased lender engagement by 45%",
      "Reduced support tickets by 60%",
      "Improved user satisfaction scores by 35%"
    ],
    sections: [
      {
        heading: "Day one",
        text: "On my first day at StackSource, I interviewed Tim, our CEO, about StackSource's purpose and business goals. While talking about business priorities, he said one thing that particularly struck me: 'We want to be the easiest way to get a commercial loan.'\n\nCommercial real estate brokering can be pretty complex. A majority of deals have unique factors that prevent them from fitting neatly into a pre-defined structure.\n\nMy job was to take this complex process, make it faster and easier for our users with innovative technology, and add business value that ultimately resulted in StackSource surpassing $1 billion in closed deals.",
        image: "/le-1.png"
      },
      {
        heading: "Understand the product and users",
        text: "I spent the next few weeks learning how the platform works, and understanding Tim's vision. I facilitated whiteboarding sessions with our team to map out key processes in commercial real estate brokering. And I planned and executed an interview-style qualitative study with our external users, borrowers and lenders, to understand their work and needs in the platform.",
        images: [
          { src: "/le-2.png", alt: "Whiteboarding session with team" },
          { src: "/le-3.png", alt: "User research findings" }
        ]
      },
      {
        heading: "Building lean personas",
        text: "Wrapping up my initial research phase with lean personas, I considered all the data I gathered and realized that prioritizing our lender experience was the right approach. StackSource can't close deals without quoted terms from lenders.",
        image: "/le-4.png"
      },
      {
        heading: "Research insights",
        text: "Conducted comprehensive research including user interviews, journey mapping, and analytics analysis. Key findings revealed that lenders struggled with complex workflows and unclear expectations.",
        images: [
          { src: "/le-5.png", alt: "Research insights and findings" },
          { src: "/le-6.png", alt: "User journey mapping" }
        ]
      },
      {
        heading: "Journey redesign",
        text: "Redesigned the entire lender journey from initial signup through ongoing management. Simplified complex processes and created clear, guided workflows that reduced cognitive load.",
        image: "/le-7.png"
      },
      {
        heading: "Interface improvements",
        text: "Updated the lender dashboard and management tools with clearer information hierarchy, better visual design, and more intuitive interactions. Focused on reducing friction and improving task completion rates.",
        image: "/le-8.png"
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


