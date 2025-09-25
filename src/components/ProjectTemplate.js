import Image from "next/image";

export default function ProjectTemplate({
  title,
  category,
  heroImages = [],
  keyResults = [],
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

        {keyResults.length > 0 && (
          <section className="mt-12 border-t border-rule pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Key Results heading - left column */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-semibold text-headline mb-6">Key Results</h2>
              </div>
              
              {/* Key Results content - right column */}
              <div className="lg:col-span-2">
                <ul className="space-y-4">
                  {keyResults.map((result, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-logo rounded-full mt-3 mr-4"></div>
                      <span className="text-lg text-text-primary font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

      {(() => {
        // Group Objective and Approach sections together for 2-column layout
        const sectionsToRender = [];
        let i = 0;
        
        while (i < sections.length) {
          const currentSection = sections[i];
          const nextSection = sections[i + 1];
          const thirdSection = sections[i + 2];
          
          // Check for Role, Objective, Approach in sequence (3-column layout)
          if (currentSection.heading === "Role" && nextSection?.heading === "Objective" && thirdSection?.heading === "Approach") {
            sectionsToRender.push(
              <section key={`role-objective-approach-${i}`} className="mt-12 border-t border-rule pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Role - Left Column */}
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
                  
                  {/* Objective - Middle Column */}
                  <div>
                    <h2 className="text-2xl font-semibold text-headline mb-6">{nextSection.heading}</h2>
                    <div className="text-text-primary">
                      {Array.isArray(nextSection.text)
                        ? nextSection.text.map((p, idx) => (
                            <p key={idx} className="text-lg">{p}</p>
                          ))
                        : <p className="text-lg">{nextSection.text}</p>}
                    </div>
                  </div>
                  
                  {/* Approach - Right Column */}
                  <div>
                    <h2 className="text-2xl font-semibold text-headline mb-6">{thirdSection.heading}</h2>
                    <div className="text-text-primary">
                      {Array.isArray(thirdSection.text) ? (
                        <ul className="list-disc list-inside space-y-3">
                          {thirdSection.text.map((item, idx) => (
                            <li key={idx} className="text-lg">{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-lg">{thirdSection.text}</p>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
            i += 3; // Skip all three sections
          } else if (currentSection.heading === "Role" && nextSection?.heading === "Objective") {
            sectionsToRender.push(
              <section key={`role-objective-${i}`} className="mt-12 border-t border-rule pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Role - Left Column */}
                  <div className="lg:col-span-1">
                    <h2 className="text-2xl font-semibold text-headline mb-6">{currentSection.heading}</h2>
                    <div className="text-text-primary">
                      {Array.isArray(currentSection.text)
                        ? currentSection.text.map((p, idx) => (
                            <p key={idx} className="text-lg">{p}</p>
                          ))
                        : <p className="text-lg">{currentSection.text}</p>}
                    </div>
                  </div>
                  
                  {/* Objective - Right Column */}
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl font-semibold text-headline mb-6">{nextSection.heading}</h2>
                    <div className="text-text-primary">
                      {Array.isArray(nextSection.text)
                        ? nextSection.text.map((p, idx) => (
                            <p key={idx} className="text-lg">{p}</p>
                          ))
                        : <p className="text-lg">{nextSection.text}</p>}
                    </div>
                  </div>
                </div>
              </section>
            );
            i += 2; // Skip both sections
          } else if (currentSection.heading === "Objective" && nextSection?.heading === "Approach") {
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
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Text content - left column */}
                    <div className="lg:col-span-1">
                      {currentSection.heading && (
                        <h2 className="text-2xl font-semibold text-headline mb-6">{currentSection.heading}</h2>
                      )}
                      
                      {currentSection.text && (
                        <div className="text-text-primary space-y-4">
                          {Array.isArray(currentSection.text)
                            ? currentSection.text.map((p, idx) => (
                                <p key={idx} className="text-lg">{p}</p>
                              ))
                            : <p className="text-lg">{currentSection.text}</p>}
                        </div>
                      )}
                    </div>
                    
                    {/* Images - right column */}
                    <div className="lg:col-span-2">
                      {/* Individual section image */}
                      {currentSection.image && (
                        <div>
                          <div className="w-full overflow-hidden">
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
                      
                      {/* Multiple images (for two-column layout) */}
                      {currentSection.images?.length > 0 && (
                        <div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {currentSection.images.map((img, idx) => (
                              <div key={idx} className="w-full overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={img.src} alt={img.alt || currentSection.heading || title} className="block w-full h-auto" />
                              </div>
                            ))}
                          </div>
                          {currentSection.caption && (
                            <p className="text-sm text-text-secondary mt-3 italic text-center">
                              {currentSection.caption}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              );
            i += 1;
          }
        }
        
        return sectionsToRender;
      })()}

        {results && (
          <section className="mt-16 border-t border-rule pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Results heading - left column */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-semibold text-headline mb-6">Results</h2>
              </div>
              
              {/* Results content - right column */}
              <div className="lg:col-span-2">
                <div className="text-text-primary space-y-8">
                  {Array.isArray(results) ? (
                    results.map((result, i) => (
                      <div key={i} className="text-lg leading-relaxed">
                        {result.split('\n').map((line, lineIndex) => {
                          // Check if line starts with section header (e.g., "Sales team feedback:", "Client feedback:")
                          const headerMatch = line.match(/^([^:]+:)/);
                          if (headerMatch) {
                            return (
                              <div key={lineIndex} className="mb-4 text-text-primary font-medium">
                                {line}
                              </div>
                            );
                          }
                          // Check if line is a quoted text (starts and ends with quotes)
                          const quoteMatch = line.match(/^"([^"]+)"$/);
                          if (quoteMatch) {
                            return (
                              <div key={lineIndex} className="mb-3 pl-4 border-l-2 border-rule">
                                <strong className="font-semibold text-text-primary">"{quoteMatch[1]}"</strong>
                              </div>
                            );
                          }
                          // Check for bold phrases like "save the business $65K annually"
                          const boldPhraseMatch = line.match(/(save the business \$65K annually)/);
                          if (boldPhraseMatch) {
                            return (
                              <div key={lineIndex} className="mb-2">
                                <span dangerouslySetInnerHTML={{
                                  __html: line.replace(boldPhraseMatch[1], `<strong class="font-semibold text-text-primary">${boldPhraseMatch[1]}</strong>`)
                                }} />
                              </div>
                            );
                          }
                          return (
                            <div key={lineIndex} className="mb-2">
                              {line}
                            </div>
                          );
                        })}
                      </div>
                    ))
                  ) : (
                    <div className="text-lg leading-relaxed">
                      {results.split('\n').map((line, lineIndex) => {
                        const headerMatch = line.match(/^([^:]+:)/);
                        if (headerMatch) {
                          return (
                            <div key={lineIndex} className="mb-4 text-text-primary font-medium">
                              {line}
                            </div>
                          );
                        }
                        const quoteMatch = line.match(/^"([^"]+)"$/);
                        if (quoteMatch) {
                          return (
                            <div key={lineIndex} className="mb-3 pl-4 border-l-2 border-rule">
                              <strong className="font-semibold text-text-primary">"{quoteMatch[1]}"</strong>
                            </div>
                          );
                        }
                        const boldPhraseMatch = line.match(/(save the business \$65K annually)/);
                        if (boldPhraseMatch) {
                          return (
                            <div key={lineIndex} className="mb-2">
                              <span dangerouslySetInnerHTML={{
                                __html: line.replace(boldPhraseMatch[1], `<strong class="font-semibold text-text-primary">${boldPhraseMatch[1]}</strong>`)
                              }} />
                            </div>
                          );
                        }
                        return (
                          <div key={lineIndex} className="mb-2">
                            {line}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
    </main>
  );
}


