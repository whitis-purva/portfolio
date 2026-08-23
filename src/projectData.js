const projects = [
  {
    slug: "reporting-platform",
    title: "Reporting platform for lenders",
    category: "UX Design",
    heroImages: [
      { src: "/reporting-platform.png", alt: "LendingInsights reporting platform dashboard showing all products, participation and penetration metrics, and product-specific data" },
    ],
    metricHero: [
      {
        value: "5/5",
        title: "SUPR-Q Score",
        description: "Achieved a perfect usability and satisfaction score from beta clients after six weeks of intensive platform testing.",
      },
      {
        value: "$65K",
        title: "Annual Cost Savings",
        description: "Engineered a modern native solution to completely replace legacy software, eliminating recurring enterprise licensing overhead.",
      },
      {
        value: "100%",
        title: "On-Demand Insights",
        description: "Replaced a manual spreadsheet stop-gap with dynamic data architectures that unlock daily access to performance coaching and training insights.",
      },
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
      "After 6 weeks of beta testing, our clients gave the platform a <strong class=\"font-semibold text-text-primary\">perfect 5/5 SUPR-Q score</strong>, demonstrating exceptional user satisfaction, task completion efficiency, and overall usability.",
      "Our new reporting platform will <strong class=\"font-semibold text-text-primary\">save the business $65K annually</strong> by replacing the critical operational need for legacy software licensing.",
      "By transitioning from product-siloed data models to an architecture structured around organizational tiers, we successfully <strong class=\"font-semibold text-text-primary\">unlocked daily, actionable coaching and training insights</strong> for team leads.",
      "The resulting interface <strong class=\"font-semibold text-text-primary\">replaced a highly fragmented manual stop-gap process</strong> of disjointed spreadsheets and pivot tables with a centralized, dynamic enterprise dashboard.",
    ]
  },
  {
    slug: "saas-product",
    title: "SaaS product for CRE financing",
    category: "UX Design",
    heroImages: [
      { src: "/saas-product-hero.png", alt: "Commercial real estate financing platform dashboard" },
    ],
    metricHero: [
      {
        value: "+170%",
        title: "Mobile Adoption",
        description: "Drove a surge in mobile engagement after engineering a fully responsive, mobile-first platform architecture to replace a legacy non-responsive experience.",
      },
      {
        value: "25%",
        title: "YoY Quote Growth",
        description: "A new dynamic quoting flow delivered the highest volume of unique terms quoted in a single quarter, accelerating year-over-year deal velocity.",
      },
      {
        value: "92%",
        title: "Deal Evaluation Ease",
        description: "Post-launch research confirmed the redesigned interface materially simplified how users assess and evaluate commercial financing opportunities.",
      },
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
      "The StackSource platform is now fully responsive, and <strong class=\"font-semibold text-text-primary\">mobile use increased 170% after launch</strong>.",
      "A new dynamic flow for quoting terms led to the <strong class=\"font-semibold text-text-primary\">highest number of unique terms quoted</strong> at StackSource in the quarter after its release, a <strong class=\"font-semibold text-text-primary\">25% YoY increase</strong>.",
      "<strong class=\"font-semibold text-text-primary\">92% of users said it's easier to quickly evaluate a deal</strong> post-launch.",
      "The transformation introduced a <strong class=\"font-semibold text-text-primary\">mobile-first architecture and accessibility-compliant design system</strong> that replaced a legacy experience with poor hierarchy, non-responsive layouts, and inadequate color contrast.",
    ]
  },
  {
    slug: "retirement-services-app",
    title: "Retirement services app",
    category: "UX Design",
    heroImages: [
      { src: "/rs-hero.png", alt: "Retirement services app dashboard" },
    ],
    metricHero: [
      {
        value: "4.7",
        title: "App Store Rating",
        description: "The app earned a <strong class=\"font-semibold text-text-primary\">4.7 App Store rating on iOS</strong>, built on unmoderated user testing I led across the wireframe and prototype lifecycle before handoff.",
      },
      {
        value: "Research-led",
        title: "Prototype Validation",
        valueVariant: "label",
        description: "Secured stakeholder buy-in for unmoderated testing through UserTesting.com, validating wireframes and prototypes throughout the design lifecycle before handoff.",
      },
      {
        value: "100%",
        title: "Scope Alignment",
        description: "Full-flow visualization resolved requirements gaps that had blocked accurate cost estimation, directly accelerating delivery timelines with the offshore team.",
      },
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
      "My work, which included identifying <strong class=\"font-semibold text-text-primary\">additional necessary screens</strong> (such as the change password flow), enabled the offshore development team to provide <strong class=\"font-semibold text-text-primary\">accurate cost estimates</strong>, directly <strong class=\"font-semibold text-text-primary\">improving time to delivery</strong>.",
      "Documenting comprehensive <strong class=\"font-semibold text-text-primary\">user flows in partnership with IT architecture</strong> resolved a critical blocker where minimum business requirements failed to reflect the actual screens required for development.",
      "A documented research plan secured stakeholder buy-in for <strong class=\"font-semibold text-text-primary\">unmoderated testing through UserTesting.com</strong>, allowing the team to validate design decisions quickly alongside active development.",
      "Unmoderated testing throughout wireframes and prototype helped ensure launch quality—the app earned a <strong class=\"font-semibold text-text-primary\">4.7 rating on iOS</strong> after release.",
    ]
  },
  {
    slug: "case-study-improving-lender-engagement",
    title: "Improving lender engagement",
    category: "User Acquisition Flows",
    heroImages: [
      { src: "/lender-engagement-hero.png", alt: "StackSource lender quoting and deal evaluation experience" },
    ],
    metricHero: [
      {
        value: "+25%",
        title: "Unique Terms Quoted",
        valueVariant: "compact",
        description: "Delivered the highest number of unique quotes to date—a <strong class=\"font-semibold text-text-primary\">25% year-over-year increase</strong>—after shipping the redesigned lender quoting flow.",
      },
      {
        value: "$1B+",
        title: "Closed Deals",
        valueVariant: "compact",
        description: "Lender-first UX improvements helped StackSource <strong class=\"font-semibold text-text-primary\">surpass $1 billion</strong> in closed commercial real estate financing, tying product engagement directly to revenue scale.",
      },
      {
        value: "−11%",
        title: "Faster Conversions",
        valueVariant: "compact",
        description: "Cut median time to convert <strong class=\"font-semibold text-text-primary\">by 11%, down to 2m 57s</strong>, and lifted funnel conversion to <strong class=\"font-semibold text-text-primary\">72.73%</strong>, removing friction from the legacy quoting experience.",
      },
    ],
    sections: [
      {
        heading: "Role",
        text: "UX strategy, research, and product design",
      },
      {
        heading: "Objective",
        text: "StackSource's goal was to become the easiest way to get a commercial loan—but commercial real estate brokering is complex, and most deals have unique factors that resist a one-size-fits-all structure. My mandate was to make that process faster and easier through innovative technology, with lender engagement as the critical conversion lever: the platform cannot close deals without quoted terms from lenders.\n\nWhere my broader platform redesign work modernized StackSource end-to-end, this initiative focused specifically on the lender quoting workflow—the step where deals convert or stall.",
      },
      {
        heading: "Research & lender prioritization",
        text: "I spent my first weeks learning the platform, facilitating whiteboarding sessions to map key CRE brokering processes, and executing qualitative interviews with external borrowers and lenders. Synthesizing findings into lean personas made the priority clear: lender experience had to come first.\n\nEvery subsequent design decision was weighted toward reducing friction in how lenders understand deals and respond with terms.",
        images: [
          { src: "/le-2.png", alt: "Product exploration and user research synthesis", caption: "Mapping key CRE brokering processes through platform exploration and qualitative research" },
          { src: "/saas-persona-1.png", alt: "Lean lender persona", caption: "Lean lender persona developed to guide prioritization of the quoting redesign" },
        ],
      },
      {
        heading: "Quoting engine redesign",
        text: "I began designing screens around consistent feedback themes: clearer hierarchy, more scannable data, and full mobile responsiveness. StackSource became the only responsive CRE financing platform among our closest competitors.\n\nQuoting terms on the legacy platform required a lengthy, clunky form. I led whiteboarding sessions with engineering and product to map the calculations and permutations in this complex process, then redesigned the flow to make quoting faster, easier, and less error-prone.",
        images: [
          { src: "/le-4.png", alt: "Whiteboarding sessions mapping the Non-binding Offer Sheet quoting flow" },
        ],
        caption: "Whiteboarding sessions with engineering and product to map loan calculations, field logic, and quoting permutations before redesigning the flow.",
      },
      {
        heading: "Screen design & prototyping",
        text: "I conducted prototype testing across multiple design iterations. A key strategy was recruiting internally identified less-savvy users—more likely to surface edge cases and input errors—so the final experience would hold up under real-world lender behavior.",
        image: "/le-7.png",
        caption: "Four mobile screens from the responsive quoting experience—loan sizing, interest rate terms, deal overview, and pro forma summary.",
      },
      {
        heading: "Final product & launch",
        text: "The new quoting experience allows lenders to quote terms in about two minutes. After launch, I continued soliciting feedback and reviewing user sessions to identify opportunities for further improvement.",
        image: "/le-8.mov",
        caption: "Lender quotes terms in under three minutes using the redesigned Non-binding Offer Sheet flow",
      },
      {
        heading: "Business impact",
        text: "Post-launch metrics and verified user feedback confirmed the redesigned quoting experience accelerated platform conversion and lender satisfaction.",
        impactDashboard: true,
      },
    ],
    results: [
      "The redesigned quoting flow reduced friction where lenders return terms, with post-launch gains in conversion speed, funnel completion, and reported ease of deal evaluation.",
      "A fully responsive quoting experience increased mobile lender engagement and differentiated StackSource from competitors still running desktop-only workflows.",
    ],
  },
  {
    slug: "brand-and-website-refresh",
    title: "Brand & website refresh",
    category: "Design & Leadership",
    heroImages: [
      { src: "/brand-hero.png", alt: "Refreshed brand identity and website design" },
    ],
    metricHero: [
      {
        value: "−36 → 55",
        title: "Sales Team NPS",
        valueVariant: "compact",
        description: "Post-launch satisfaction measured on an NPS-style scale swung from a detractor-heavy baseline to strong internal advocacy for the refreshed brand and website.",
      },
      {
        value: "45% → 64%",
        title: "Promoters",
        valueVariant: "compact",
        description: "Flipped sales team sentiment—replacing nearly half of detractors at baseline with a clear majority of promoters endorsing the new experience.",
      },
      {
        value: "Debt + Equity",
        title: "Brand Positioning",
        valueVariant: "label",
        description: "Tightened messaging and visual design surfaced full-service CRE capabilities, differentiating StackSource beyond senior-debt-only perception in legacy materials.",
      },
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
    ],
    results: [
      "The refreshed StackSource website reflects <strong class=\"font-semibold text-text-primary\">tightened messaging around value proposition</strong> and <strong class=\"font-semibold text-text-primary\">aligned visual design</strong> across marketing and product touchpoints.",
      "Sales team satisfaction measured on an NPS-style scale <strong class=\"font-semibold text-text-primary\">jumped from -36 (45% detractors) to 55 (64% promoters)</strong> against the previous site as baseline.",
      "The new brand positioning successfully <strong class=\"font-semibold text-text-primary\">differentiated StackSource as a modern, tech-focused startup</strong> while maintaining approachability in the traditional commercial real estate industry.",
      "Research, competitive analysis, and <strong class=\"font-semibold text-text-primary\">brand advisory board input</strong> validated messaging that surfaces <strong class=\"font-semibold text-text-primary\">debt and equity capabilities</strong> as a core market differentiator previously underrepresented in legacy materials.",
    ]
  },
  {
    slug: "digital-transformation-omni-channel-engagement",
    title: "Omnichannel strategy",
    category: "Design & Leadership",
    heroImages: [
      { src: "/omnichannel-hero.png", alt: "Omnichannel brand presence across website, mobile, Instagram, newsletter, and interactive dashboard for IHC Sisterhood" },
    ],
    metricHero: [
      {
        value: "+200%",
        title: "Conversion Efficiency",
        description: "<strong class=\"font-semibold text-text-primary\">Tripled</strong> direct user action velocity <strong class=\"font-semibold text-text-primary\">(from 3% to 9%)</strong> by decoupling high-priority registration funnels from general newsletter noise.",
      },
      {
        value: "64.96%",
        title: "Platform Scroll Depth",
        description: "Post-launch telemetry via Microsoft Clarity validated deep content stickiness and an intuitive navigation architecture, averaging a <strong class=\"font-semibold text-text-primary\">2.4-minute session duration</strong>.",
      },
      {
        value: "+146%",
        title: "Organic Visibility",
        description: "Accelerated top-of-funnel audience acquisition, scaling unique Facebook viewers by <strong class=\"font-semibold text-text-primary\">75% within 2 months</strong> of ecosystem launch.",
      },
    ],
    sections: [
      {
        heading: "Role",
        text: "UX strategy, brand modernization, cross-functional leadership, and product design",
      },
      {
        heading: "Objective",
        text: "The legacy digital presence of the Temple Sisterhood of Indianapolis Hebrew Congregation was functionally fragmented and architecturally constrained, creating significant creative and operational silos. I stepped in to lead a comprehensive omnichannel strategy—modernizing the visual identity, migrating to an agile web infrastructure, and unifying cross-channel communications—to eliminate administrative workflow bottlenecks and establish an ecosystem that models modern digital design maturity.",
      },
      {
        heading: "Brand refinement & alignment",
        text: "Great design respects a brand's history while expanding its utility. I audited the legacy visual identity to solve inconsistencies in digital legibility, fine-tuning the logo's geometric proportions and expanding the color palette with accessible tints and shades. I presented a business case demonstrating these improvements to the organization's president, securing full buy-in to roll out updated assets to the board.",
        images: [
          { src: "/omni-brand-proportions-1.png", alt: "Refined brand proportions", caption: "Refined logo proportions and expanded color palette for digital use" },
          { src: "/omni-brand-proportions-2.png", alt: "Previous brand assets", caption: "Legacy brand assets with inconsistent application and limited web legibility" },
        ],
      },
      {
        heading: "A centralized digital hub",
        text: "I migrated the ecosystem from WordPress to Webflow to secure the structural agility needed for rapid content iteration while maintaining domain continuity.\n\nTo eliminate critical drop-offs where users abandoned registration before paying, I consolidated the flow into a single-page interface with integrated Stripe processing.\n\nI also engineered automated backend spreadsheet syncing for instant data reconciliation, built a secure board portal for internal operational resources, and elevated the gift shop's prominence to directly reduce inbound administration phone calls.",
        image: "/omni-website-homepage.png",
      },
      {
        heading: "Unified presence & newsletter optimization",
        text: "Continuous engagement requires a consistent, systemized voice. I established a modernized social presence utilizing custom component templates that translate our refined brand geometry directly to digital content.\n\nI also overhauled our communication infrastructure by moving the monthly newsletter from text-heavy emails to high-level summaries that drive traffic to tracking-enabled Webflow landing pages. This architectural pivot provides robust analytics via Google Analytics and Clarity while building a clean, public archive.",
        images: [
          { src: "/omni-instagram-grid.png", alt: "Instagram grid showing IHC Sisterhood brand templates" },
          { src: "/omni-meta-analytics.png", alt: "Meta analytics snapshot showing engagement growth" },
        ],
      },
      {
        heading: "Interactive reporting dashboard",
        text: "No one asked for a dashboard, but I saw an opportunity to visualize our engagement survey data in a meaningful way. Building this interactive interface directly demonstrates our commitment to analyzing and actually using community feedback, while building transparency and trust. The dashboard segments data by age cohorts, eliminating anecdotal guesswork and giving the board a clear, data-driven roadmap for future programming.",
        embed: "https://www.loom.com/embed/278bc43b4f624166902a3f4f607bc184",
        embedTitle: "Interactive reporting dashboard walkthrough",
        embedAspectRatio: "56.25%",
      },
    ],
    results: [
      "The fully responsive and centralized platform drove a <strong class=\"font-semibold text-text-primary\">146% increase in Facebook views</strong> and a <strong class=\"font-semibold text-text-primary\">75% increase in unique viewers</strong> within two months of launch.",
      "Moving the newsletter to a web-based CMS enables robust <strong class=\"font-semibold text-text-primary\">Google Analytics and Microsoft Clarity tracking</strong>, creating automated data loops for future content strategy.",
      "Consolidating separate form and payment steps into a unified interface <strong class=\"font-semibold text-text-primary\">eliminated drop-offs and cut down administrative workflows</strong> caused by incomplete registrations.",
      "Isolating high-priority membership campaigns out of the newsletter noise <strong class=\"font-semibold text-text-primary\">tripled user action velocity per email open from 3% to 9%</strong>, effectively engineering out choice paralysis and maximizing operational conversion efficiency.",
      "Captured a <strong class=\"font-semibold text-text-primary\">64.96% average scroll depth</strong> and <strong class=\"font-semibold text-text-primary\">2.4-minute session duration</strong> via real-time Microsoft Clarity tracking, validating that the new information architecture successfully engages users downstream.",
      "Automated backend data streams and a secure internal board portal <strong class=\"font-semibold text-text-primary\">dramatically streamlined daily administrative overhead</strong> for the leadership team.",
      "The interactive demographic dashboard provides <strong class=\"font-semibold text-text-primary\">clear, measurable guardrails that eliminate anecdotal planning</strong>, allowing the board to target and validate event programming through 2026 and 2027.",
      "Visualizing the survey data modeled <strong class=\"font-semibold text-text-primary\">digital design maturity for leadership</strong>, building deeper organizational transparency, trust, and a true commitment to analyzing community feedback.",
    ],
  },
];

export function getAllProjectSlugs() {
  return projects.map((p) => p.slug);
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

export default projects;


