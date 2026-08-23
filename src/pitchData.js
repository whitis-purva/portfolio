const PORTFOLIO_URL = "https://whitis-purva.work";

/** Hover tints matched to each project’s home-page card color */
export const projectHoverBySlug = {
  "reporting-platform": "hover:bg-gold-muted/40",
  "saas-product": "hover:bg-pink-muted/40",
  "retirement-services-app": "hover:bg-peach-muted/40",
  "case-study-improving-lender-engagement": "hover:bg-lilac-muted/40",
  "brand-and-website-refresh": "hover:bg-lavender-muted/40",
  "digital-transformation-omni-channel-engagement": "hover:bg-blue-muted/40",
  "mintwise-tcg-valuation": "hover:bg-peach-muted/40",
};

/** Display metadata for resolving mappedProjects slugs from pitch JSON */
export const projectCatalog = {
  "reporting-platform": {
    title: "Reporting platform for lenders",
    subtitle: "Data Visualization & Dashboards",
    img: "/project1.png",
  },
  "saas-product": {
    title: "SaaS product for CRE financing",
    subtitle: "Responsive Web Applications",
    img: "/project2.png",
  },
  "retirement-services-app": {
    title: "Retirement services app",
    subtitle: "Mobile Product Design",
    img: "/project3.png",
  },
  "case-study-improving-lender-engagement": {
    title: "Improving lender engagement",
    subtitle: "User Acquisition Flows",
    img: "/project4.png",
  },
  "brand-and-website-refresh": {
    title: "Brand & website refresh",
    subtitle: "Design System Engineering",
    img: "/project5.png",
  },
  "digital-transformation-omni-channel-engagement": {
    title: "Omnichannel strategy",
    subtitle: "Executive Design Leadership",
    img: "/project6.png",
  },
  "mintwise-tcg-valuation": {
  title: "TCG liquidity & valuation",
  subtitle: "0-to-1 Product Strategy & Architecture",
  img: "mintwise-preview.png", // or use an existing screenshot path
  url: "https://mintwise.cc" // or your deployed prototype URL
}
};

/**
 * Resolve mappedProjects entries (slug strings or objects) into card data.
 * Object form: { "slug": "...", "rationale": "..." }
 */
export function resolveMappedProjects(mappedProjects = []) {
  return mappedProjects
    .map((entry) => {
      const slug = typeof entry === "string" ? entry : entry?.slug;
      const catalog = projectCatalog[slug];
      if (!slug || !catalog) return null;

      return {
        slug,
        title: catalog.title,
        subtitle: catalog.subtitle,
        img: catalog.img,
        rationale: typeof entry === "object" ? entry.rationale || null : null,
      };
    })
    .filter(Boolean);
}

export { PORTFOLIO_URL };
