const projects = [
  {
    slug: "design-system",
    title: "Design system",
    category: "Design & Leadership",
    heroImages: [
      { src: "/project1.png", alt: "Design system sample 1" },
      { src: "/project3.png", alt: "Design system sample 2" },
    ],
    sections: [
      {
        heading: "Objective",
        text: [
          "Define patterns to enable consistent and efficient design across products.",
        ],
      },
      {
        heading: "Approach",
        text: [
          "Create tokens, components, and documentation; migrate to Figma components.",
        ],
      },
    ],
    results:
      "Faster design and build cycles with a shared library and consistent UI.",
  },
  {
    slug: "saas-product",
    title: "SaaS product for CRE financing",
    category: "UX Design",
    heroImages: [
      { src: "/project2.png", alt: "SaaS overview" },
    ],
    sections: [
      { heading: "Research", text: "Discovery and persona development informed IA and flows." },
      { heading: "Design", text: "Responsive UI across dashboard and deal pages." },
    ],
    results: "Improved conversion and engagement across key funnel steps.",
  },
    {
      slug: "reporting-platform",
      title: "Reporting platform for lenders",
      category: "UX Design",
      heroImages: [
        { src: "/reporting-platform.png", alt: "LendingInsights reporting platform dashboard showing all products, participation and penetration metrics, and product-specific data" },
      ],
    sections: [
      {
        heading: "Role",
        text: "UX design; cross-collaborator with scrum team"
      },
      {
        heading: "Objective",
        text: "Our legacy software solution for reporting on point of sale products is currently unusable. A support team created a stop-gap manual process with spreadsheets and pivot tables, but our clients really want a dynamic solution they can easily access."
      },
      {
        heading: "Approach",
        text: [
          "Collaborate with subject matter experts to understand the business need",
          "Collaborate with researcher to plan and attend interview studies",
          "Design lo-fi prototype for use in research",
          "Execute rapid design iterations as findings are surfaced and synthesized"
        ]
      },
      {
        heading: "Lo-fi prototype",
        text: "After meeting with our business subject matter expert to understand the current stop-gap manual process, I designed a low-fi prototype and iterated through through a few feedback rounds, first.",
        image: "/reporting-lofi.png",
        caption: "Screens from my first low-fi prototype, and after a few rounds of iteration with our business SME"
      },
      {
        heading: "First hi-fi prototype",
        text: "After validating the final lo-fi prototype with members of our sales team, I designed the first hi-fi version using our design system. We took the first version of the hi-fi prototype to client interviews.",
        image: "/reporting-hifi-v1.png"
      },
      {
        heading: "Client interviews",
        text: "From our clients, we learned that their primary use case with this reporting was to coach their employees on how to boost sales in lagging areas. The screen below shows how individual loan officer metrics were only accessible by one product at a time. Clients wanted to see a loan officer's performance across all products at the same time.",
        image: "/reporting-interview-findings.png"
      },
      {
        heading: "Hi-fi v2",
        text: "I iterated rapidly so that our researcher would be able to show v2 to clients with whom we had already scheduled interviews. Our access to clients was limited, so we needed to make the most of our sessions. The new information architecture structures the content by levels in the organization instead of by financial product.",
        image: "/reporting-hifi-v2.png"
      },
      {
        heading: "Design review and final version",
        text: "The clients and sales team loved the new information architecture, but there was a consistent pattern of feedback that they missed the donut charts in earlier versions. The visual elements made it easier to get information at a glance. They also liked the idea of color coding the chips showing trend information as positive or negative to further the ease of scanning the data. Design reviews led to some minor restructuring of the placement of global elements, as well, to ensure consistency across our suite of products.",
        image: "/reporting-final.png"
      }
    ],
    results: [
      "Sales team feedback: 'I see all of our accounts growing as a result of this.' 'Love it... that's exactly what we would need.'",
      "Client feedback: 'I would love to have this at my fingertips every day, and we would use this every single day.' 'It truly would be my one-stop shop to see what my coaching and training needs are.'",
      "Our new reporting platform will also save the business $65K annually by replacing the need for licensing the legacy software they previously used."
    ]
  },
  {
    slug: "retirement-services-app",
    title: "Retirement services app",
    category: "UX Design",
    heroImages: [
      { src: "/project3.png", alt: "Mobile app screens" },
    ],
    sections: [
      { heading: "Research plan", text: "Stakeholder and user interviews, task flows, and prototyping." },
      { heading: "Design", text: "Mobile-first IA, clearer flows, and form simplification." },
    ],
    results: "Improved time-to-delivery and user task success in pilot studies.",
  },
  {
    slug: "brand-and-website-refresh",
    title: "Brand & website refresh",
    category: "Design & Leadership",
    heroImages: [
      { src: "/project5.png", alt: "Marketing site visuals" },
    ],
    sections: [
      { heading: "Objective", text: "Unify brand and website for clearer messaging and growth." },
      { heading: "Design", text: "Componentized marketing pages and updated visual identity." },
    ],
    results: "Increased engagement and improved conversion on key landing pages.",
  },
];

export function getAllProjectSlugs() {
  return projects.map((p) => p.slug);
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

export default projects;


