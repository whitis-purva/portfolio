import Image from "next/image";

export default function ProjectTemplate({
  title,
  category,
  heroImages = [],
  sections = [],
  results,
}) {
  return (
    <main className="max-w-6xl mx-auto px-6 sm:px-8 py-10">
      <header>
        {category && (
          <div className="text-sm font-semibold text-text-secondary uppercase tracking-wider">{category}</div>
        )}
        <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-headline">{title}</h1>
      </header>

        {heroImages.length > 0 && (
          <section className="mt-8">
            {heroImages.map((img, idx) => (
              <div key={idx} className="w-full overflow-hidden shadow-lg">
                {/* Accept either next/image sources or static public paths */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt || title} className="block w-full h-auto" />
              </div>
            ))}
          </section>
        )}

      {(() => {
        // Group Objective and Approach sections together for 2-column layout
        const sectionsToRender = [];
        let i = 0;
        
        while (i < sections.length) {
          const currentSection = sections[i];
          const nextSection = sections[i + 1];
          
          // Check if current is Objective and next is Approach
          if (currentSection.heading === "Objective" && nextSection?.heading === "Approach") {
            sectionsToRender.push(
              <section key={`objective-approach-${i}`} className="mt-12 border-t border-rule pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Objective - Left Column */}
                  <div>
                    <h2 className="text-2xl font-semibold text-headline mb-6">{currentSection.heading}</h2>
                    <div className="text-text-primary">
                      {Array.isArray(currentSection.text)
                        ? currentSection.text.map((p, idx) => (
                            <p key={idx} className="text-lg">{p}</p>
                          ))
                        : <p className="text-lg">{currentSection.text}</p>}
                    </div>
                  </div>
                  
                  {/* Approach - Right Column */}
                  <div>
                    <h2 className="text-2xl font-semibold text-headline mb-6">{nextSection.heading}</h2>
                    <div className="text-text-primary">
                      {Array.isArray(nextSection.text) ? (
                        <ul className="list-disc list-inside space-y-3">
                          {nextSection.text.map((item, idx) => (
                            <li key={idx} className="text-lg">{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-lg">{nextSection.text}</p>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
            i += 2; // Skip both sections
          } else {
            // Render individual section normally
            sectionsToRender.push(
              <section key={i} className="mt-12 border-t border-rule pt-8">
                {currentSection.heading && (
                  <h2 className="text-2xl font-semibold text-headline mb-6">{currentSection.heading}</h2>
                )}
                
                {currentSection.text && (
                  <div className="mt-3 text-text-primary space-y-4">
                    {Array.isArray(currentSection.text)
                      ? currentSection.text.map((p, idx) => (
                          <p key={idx} className="text-lg">{p}</p>
                        ))
                      : <p className="text-lg">{currentSection.text}</p>}
                  </div>
                )}
                
                {/* Individual section image */}
                {currentSection.image && (
                  <div className="mt-8">
                    <div className="w-full overflow-hidden rounded-xl shadow-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={currentSection.image} alt={currentSection.caption || currentSection.heading || title} className="block w-full h-auto" />
                    </div>
                    {currentSection.caption && (
                      <p className="text-sm text-text-secondary mt-3 italic">
                        {currentSection.caption}
                      </p>
                    )}
                  </div>
                )}
                
                {/* Multiple images (legacy support) */}
                {currentSection.images?.length > 0 && (
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {currentSection.images.map((img, idx) => (
                      <div key={idx} className="w-full overflow-hidden rounded-xl shadow-lg">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img.src} alt={img.alt || currentSection.heading || title} className="block w-full h-auto" />
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
            i += 1;
          }
        }
        
        return sectionsToRender;
      })()}

      {results && (
        <section className="mt-16 border-t border-rule pt-8">
          <h2 className="text-2xl font-semibold text-headline mb-6">Results</h2>
          <div className="text-text-primary">
            {Array.isArray(results) ? (
              <ul className="space-y-4">
                {results.map((result, i) => (
                  <li key={i} className="text-lg">{result}</li>
                ))}
              </ul>
            ) : (
              <p className="text-lg">{results}</p>
            )}
          </div>
        </section>
      )}
    </main>
  );
}


