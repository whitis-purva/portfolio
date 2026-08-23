import Link from "next/link";
import AssetImage from "@/components/AssetImage";

export default function CaseStudyLayout({ title, intro, blocks = [], results, previousProject, nextProject }) {
  return (
    <main className="max-w-5xl mx-auto px-6 sm:px-8 py-10">
      <header>
        <h1 className="text-3xl sm:text-4xl font-semibold text-text-primary">{title}</h1>
        {intro && <p className="mt-3 text-text-primary max-w-3xl">{intro}</p>}
      </header>
      {blocks.map((b, i) => (
        <section key={i} className="mt-10">
          {b.heading && (
            <h2 className="text-xl font-semibold text-headline">{b.heading}</h2>
          )}
          {b.body && (
            <div className="mt-3 text-text-primary space-y-4">
              {Array.isArray(b.body) ? b.body.map((p, idx) => <p key={idx}>{p}</p>) : <p>{b.body}</p>}
            </div>
          )}
          {b.images?.length > 0 && (
            <div className="mt-6 grid grid-cols-1 gap-6">
              {b.images.map((img, idx) => (
                <div key={idx} className="w-full overflow-hidden rounded-xl">
                  <AssetImage src={img.src} alt={img.alt || b.heading || title} className="block w-full h-auto" />
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
      {results && (
        <section className="mt-12 border-t border-rule pt-8">
          <h2 className="text-xl font-semibold text-headline">Results</h2>
          <p className="mt-3 text-text-primary">{results}</p>
        </section>
      )}

      {/* Project Navigation */}
      {(previousProject || nextProject) && (
        <section className="mt-16 border-t border-rule pt-8">
          <div className="flex justify-between items-center">
            {/* Previous Project */}
            <div className="flex-1">
              {previousProject ? (
                <Link
                  href={`/projects/${previousProject.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-rule text-text-primary hover:bg-gold-muted transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm font-medium">{previousProject.title}</span>
                </Link>
              ) : null}
            </div>

            {/* Next Project */}
            <div className="flex-1 flex justify-end">
              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-rule text-text-primary hover:bg-gold-muted transition-colors"
                >
                  <span className="text-sm font-medium">{nextProject.title}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
