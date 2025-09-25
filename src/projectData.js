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
      "Achieved highest number of unique quotes to date after launch",
      "Increased mobile user adoption with responsive design",
      "Surpassed $1 billion in closed deals through improved platform"
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
        image: "/le-2.png"
      },
      {
        heading: "Building lean personas",
        text: "Wrapping up my initial research phase with lean personas, I considered all the data I gathered and realized that prioritizing our lender experience was the right approach. StackSource can't close deals without quoted terms from lenders.",
        image: "/le-3.png"
      },
      {
        heading: "Design considerations",
        text: "I began designing screens, soliciting feedback, and iterating. While the design has other feature enhancements based on feedback, I focused on key user feedback themes of hierarchy, scannable data, and responsive design. StackSource is now the only responsive CRE financing platform amongst our closest competitors.",
        images: [
          { src: "/le-4.png", alt: "Design considerations" },
          { src: "/le-5.png", alt: "Design considerations" }
        ]
      },
      {
        heading: "Quoting terms and conversions",
        text: "Now that lenders more easily understand our deals, they may be more likely to quote. But quoting terms on the old platform required using a lengthy, clunky form that didn't provide a great experience. I believed we had an opportunity to make quoting terms faster and easier. I conducted several whiteboarding sessions with my team to understand the specific calculations and permutations in this complex process.",
        image: "/le-6.png"
      },
      {
        heading: "Screen design & prototyping",
        text: "I conducted prototype testing with several design iterations. A strategy that helped me finalize the design was to recruit users that were internally known to be less savvy, and therefore more likely to introduce errors. Here's a bird's eye view of the screens involved in this process.",
        image: "/le-7.png"
      },
      {
        heading: "Final product",
        text: "Watch a lender quote terms in about 2 minutes using the new experience in the video.",
        image: "/le-8.mov"
      },
      {
        heading: "Launch and beyond",
        text: "After launch, I continued to solicit feedback and watch user sessions to find opportunities for further improvement.",
        image: "/le-9.png"
      },
      {
        heading: "Impact",
        text: "The speed at which conversions are happening continues to decrease, and we saw our highest number of unique quotes to date after launch. We have increasing numbers of mobile users now that we've provided a responsive experience. And we know that deal evaluation is faster and easier because our users are telling us.",
        image: "/le-10.png"
      },
      {
        heading: "Result: $1 billion closed",
        text: "We gave our users a quick and easy experience with an innovative platform design that has an unprecedented quoting engine and is fully responsive. And our business results prove the impact.",
        image: "/le-11.png"
      }
        ]
  },
  {
    slug: "brand-and-website-refresh",
    title: "Brand & website refresh",
    category: "Design & Leadership",
    heroImages: [
      { src: "/brand-hero.png", alt: "Refreshed brand identity and website design" },
    ],
    keyResults: [
      "Improved NPS score from -36 to 55 (64% promoters)",
      "Enhanced brand positioning for debt and equity deals",
      "Launched refreshed website with improved usability and brand alignment"
    ],
    sections: [
      {
        heading: "Role",
        text: "Led UX, visual design, marketing strategy, and brand advisory board"
      },
      {
        heading: "Objective",
        text: "StackSource wants to be known as a respected debt and equity shop for commercial real estate. The previous website and marketing materials used language that was heavily focused on senior debt, and our ability to do equity deals is a key differentiator. The brand needs to reflect a modern, tech-focused startup while maintaining approachability in a traditional industry."
      },
      {
        heading: "Research",
        text: "With limited time, we drew on knowledge gleaned from product research and competitive analysis. We refined messaging with feedback from the brand advisory board, and used paid ad campaigns to test messaging and creative.",
        images: [
          { src: "/brand-research-1.png", alt: "Research insights" },
          { src: "/brand-research-2.png", alt: "Competitive analysis" },
          { src: "/brand-research-3.png", alt: "Brand advisory board feedback" }
        ]
      },
      {
        heading: "Logo refresh",
        text: "The StackSource logo lacked visual weight and substance, and wasn't optimal for mobile use due to its wide and thin typeface. With a new focus on responsive design, I proposed an updated logo.",
        images: [
          { src: "/brand-logo-1.png", alt: "Original logo" },
          { src: "/brand-logo-2.png", alt: "Logo iterations" },
          { src: "/brand-logo-3.png", alt: "Logo variations" },
          { src: "/brand-logo-5.png", alt: "Final logo design" }
        ]
      },
      {
        heading: "Brand guide",
        text: "Our goal was to create an MVP brand guide (in the interest of speed) that would keep us aligned and consistent for the first iteration of the new website. I facilitated whiteboarding sessions with our team to surface our mission, vision, and personality, and solicited feedback from our brand advisory board throughout the process.",
        images: [
          { src: "/brand-guide-1.png", alt: "Brand guide cover" },
          { src: "/brand-guide-2.png", alt: "Mission and vision" },
          { src: "/brand-guide-3.png", alt: "Brand personality" },
          { src: "/brand-guide-4.png", alt: "Visual guidelines" }
        ]
      },
      {
        heading: "Website refresh",
        text: "I focused on building important pages for usability and SEO first, with a roadmap for adding additional content after launch.",
        images: [
          { src: "/brand-design-1.png", alt: "Homepage design" },
          { src: "/brand-design-2.png", alt: "Key pages design" }
        ]
      },
      {
        heading: "Results",
        text: "The refreshed StackSource website reflects tightened messaging around value proposition and aligned visual design. Sales team satisfaction was measured using an NPS-style scale rating with the previous site as a baseline. Our score jumped from -36 (45% detractors) to 55 (64% promoters). The new brand positioning successfully differentiated StackSource as a modern, tech-focused startup while maintaining approachability in the traditional commercial real estate industry.",
        images: [
          { src: "/brand-results-1.png", alt: "NPS score improvement results" },
          { src: "/brand-results-2.png", alt: "Brand positioning success metrics" }
        ]
      }
    ]
  },
  {
    slug: "design-system",
    title: "Design system",
    category: "Design & Leadership",
    heroImages: null,
    keyResults: [
      "Created solid foundation for consistent product enhancements",
      "Simplified design specs access for development teams",
      "Reduced meeting time and improved clarity"
    ],
    sections: [
      {
        heading: "Role",
        text: "Project lead"
      },
      {
        heading: "Objective",
        text: "The StackSource core product required segmented views with different functionality for three distinct audiences. A design system was needed to ensure consistency and facilitate efficiency in designing for this complex product."
      },
      {
        heading: "Design system",
        text: [
          "We built the design system as a part of our transition to Figma. We created a style library and also built components within Figma to make future product enhancement design more efficient.",
          {
            heading: "Token foundation",
            content: "Established a robust token system covering colors, typography, spacing, and elevation. Created semantic naming conventions for consistent design implementation across the product."
          },
          {
            heading: "Component library", 
            content: "Built 50+ reusable components with comprehensive variants and states. Each component includes detailed documentation and usage guidelines for the design team."
          }
        ],
        images: [
          { src: "/ds-1.png", alt: "Design system components" },
          { src: "/ds-2.png", alt: "Figma style library" },
          { src: "/ds-3.png", alt: "Component specifications" }
        ]
      }
    ],
    results: [
      "StackSource now has a solid foundation for <b>consistent product enhancements</b> executed by a growing design team.",
      "Development teams have <b>simplified access to design specs</b>, reducing meeting time and improving clarity."
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


