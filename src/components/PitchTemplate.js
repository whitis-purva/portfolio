import { PORTFOLIO_URL, projectHoverBySlug } from "@/pitchData";
import AssetImage from "@/components/AssetImage";
import { withBasePath } from "@/lib/assetPath";

export default function PitchTemplate({ pitch }) {
  if (!pitch) return null;

  const {
    company,
    team,
    role,
    portfolioUrl = PORTFOLIO_URL,
    resumeUrl = "/WhitisPurvaResume2026-2.pdf",
    mappedProjects = [],
  } = pitch;

  const fitHeading = team
    ? `What ${team} needs. What I bring.`
    : `What ${company} needs. What I bring.`;
  const projectsHeading = team
    ? `Work that maps to ${company} ${team}`
    : `Work that maps to ${company}`;

  return (
    <main className="max-w-5xl mx-auto px-6 sm:px-8 py-10">
      {/* Hero */}
      <section>
        <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
          {role} · {company}
        </p>
        <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-text-primary mb-6">
          {pitch.headline}
        </h1>
        <p className="text-lg text-text-primary leading-relaxed max-w-3xl">
          {pitch.subheadline}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="https://mintwise.cc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex px-4 py-2 justify-center items-center gap-2 rounded-[6px] bg-gold hover:bg-gold-muted text-text-primary transition-colors font-[500]"
          >
            explore mintwise prototype
          </a>
          <a
            href={withBasePath(resumeUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-rule rounded-md text-text-primary hover:bg-gold-muted transition-colors font-[500]"
          >
            download résumé
          </a>
        </div>
      </section>

      {/* Fit Analysis */}
      <section className="mt-12 border-t border-rule pt-8">
        <h2 className="text-2xl font-semibold text-headline mb-8">
          {fitHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {(pitch.painPoints || []).map((point) => (
            <div key={point.title} className="space-y-2">
              <h3 className="text-xl font-semibold text-text-primary">
                {point.title}
              </h3>
              <p className="text-base text-text-primary leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Curated Projects */}
      <section
        id="relevant-work"
        className="mt-12 border-t border-rule pt-8"
      >
        <h2 className="text-2xl font-semibold text-headline mb-6">
          {projectsHeading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mappedProjects.map((project) => {
            const hoverClass =
              projectHoverBySlug[project.slug] || "hover:bg-gold-muted/40";
            const projectUrl =
              project.slug === "mintwise-tcg-valuation"
                ? "https://mintwise.cc"
                : `${portfolioUrl}/projects/${project.slug}/`;

            return (
              <article
                key={project.slug}
                className={`p-2 rounded-xl transition-all duration-200 ${hoverClass}`}
              >
                <div className="w-full h-48 bg-gray-200 rounded-xl overflow-hidden project-card">
                  <AssetImage
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover border-0 outline-none"
                  />
                </div>
                <div className="mt-2 text-sm text-text-secondary">
                  {project.subtitle}
                </div>
                <h3 className="mt-1 text-lg font-semibold text-text-primary">
                  {project.title}
                </h3>
                {project.rationale ? (
                  <p className="mt-3 text-text-primary leading-relaxed">
                    {project.rationale}
                  </p>
                ) : null}
                <div className="mt-4">
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-rule text-text-primary hover:bg-gold-muted transition-colors"
                  >
                    <span className="text-sm font-medium">See the work</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 border-t border-rule pt-8">
        <h2 className="text-2xl font-semibold text-headline mb-6">
          Let&apos;s connect
        </h2>
        <p className="text-lg text-text-primary leading-relaxed max-w-3xl mb-6">
          Explore more of my work, or download my résumé to see the full
          picture of how I approach complex product design.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex px-4 py-2 justify-center items-center gap-2 rounded-[6px] bg-gold hover:bg-gold-muted text-text-primary transition-colors font-[500]"
          >
            view full portfolio
          </a>
          <a
            href={withBasePath(resumeUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-rule rounded-md text-text-primary hover:bg-gold-muted transition-colors font-[500]"
          >
            download résumé
          </a>
        </div>
      </section>
    </main>
  );
}