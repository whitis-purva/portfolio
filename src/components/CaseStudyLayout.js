export default function CaseStudyLayout({ title, intro, blocks = [], results }) {
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt || b.heading || title} className="block w-full h-auto" />
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
    </main>
  );
}


