import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { withBasePath } from "@/lib/assetPath";

export default function ResumePage() {
  return (
    <div>
      <Head>
        <title>Résumé • NWP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="max-w-5xl mx-auto px-6 sm:px-8 py-10">
        <section>
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-8">Résumé</h1>
            <a 
              href={withBasePath("/WhitisPurvaResume2026-2.pdf")}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-rule rounded-md text-text-primary hover:bg-gold-muted transition-colors"
            >
              download PDF
            </a>
          </div>
          
          <div className="space-y-8">
            <section>
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                <div className="lg:col-span-3">
                  <h2 className="text-2xl font-semibold text-headline mb-6">Profile</h2>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-lg text-text-primary leading-relaxed">
                    I help teams solve complex problems by connecting business strategy with user empathy. With a hands-on and curious approach, I turn insights into impactful, evidence-based solutions that create demonstrated value. An experienced practitioner and leader, I have executed work and built engaged, cross-functional teams in startup-to-enterprise environments.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                <div className="lg:col-span-3">
                  <h2 className="text-2xl font-semibold text-headline mb-6">Skills & Tools</h2>
                </div>
                <div className="lg:col-span-7">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">UX & Product Design</h3>
                      <p className="text-text-primary">Wireframes, prototypes, user flows, design reviews, UI and interaction design</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">Software & AI</h3>
                      <p className="text-text-primary">Figma, Sketch, Adobe Creative Cloud (Photoshop, Illustrator, InDesign), AI tools (Cursor, Claude, Copilot, Gemini, Figma Make)</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">User Research</h3>
                      <p className="text-text-primary">Competitive analysis, journey mapping, user interviews, UserTesting.com, Userbrain, Maze</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">Analytics & Surveys</h3>
                      <p className="text-text-primary">Google Analytics, Hotjar, Fullstory, Clarity, WalkMe, SurveyMonkey</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">Agile & Cross-functional Work</h3>
                      <p className="text-text-primary">Sprint planning, scrum team collaboration, accessibility best practices</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">Strategy & Collaboration</h3>
                      <p className="text-text-primary">Product strategy, information architecture, stakeholder engagement, leadership</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-headline mb-6">Experience</h2>
              <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                  <div className="lg:col-span-3">
                    <h3 className="text-lg font-medium text-text-primary">Stealth Health-tech Venture</h3>
                    <p className="text-text-secondary">Fishers, IN</p>
                    <p className="text-text-secondary">Oct 2025 – Present</p>
                    <p className="text-text-secondary">Exploratory</p>
                  </div>
                  <div className="lg:col-span-7">
                    <h4 className="text-lg font-semibold text-text-primary mb-3">Founder</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Direct end-to-end venture strategy, business model definition, market viability, and competitive positioning</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Execute product teardown of primary market competitor to identify UX gaps and technical opportunities for the MVP</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Architect an AI-driven interface that utilizes Natural Language Processing (NLP) to translate semantic input into structured data, reducing user friction</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Lead all product execution, from initial research and data strategy to the design and development of a functional v0 prototype</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                  <div className="lg:col-span-3">
                    <h3 className="text-lg font-medium text-text-primary">Allied Solutions</h3>
                    <p className="text-text-secondary">Carmel, IN</p>
                    <p className="text-text-secondary">August 2024 – Present</p>
                  </div>
                  <div className="lg:col-span-7">
                    <h4 className="text-lg font-semibold text-text-primary mb-3">Sr. UX Designer</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Lead UX and product design for a new data reporting software product, ensuring alignment with business objectives and accessibility and usability best practices, that resulted in a perfect 5/5 SUPR-Q score in beta</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Execute the design process by iteratively refining design work from usability testing with researchers, receiving commendation from stakeholders and executive leadership for speed and agility</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Manage a student UX project in partnership with a local university, acting as a mentor and providing project oversight</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Collaborated with product management to define product requirements and roadmaps, ensuring key user needs were prioritized and integrated into the development cycle</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                  <div className="lg:col-span-3">
                    <h3 className="text-lg font-medium text-text-primary">Site Strategics</h3>
                    <p className="text-text-secondary">Indianapolis, IN</p>
                    <p className="text-text-secondary">May 2024 – August 2024</p>
                  </div>
                  <div className="lg:col-span-7">
                    <h4 className="text-lg font-semibold text-text-primary mb-3">UX Consultant</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Strategized and executed a cross-functional approach blending digital marketing with UX to deliver cohesive client solutions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Nurtured strong, collaborative client relationships, ensuring project goals were aligned with business objectives and user needs</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Designed and optimized user-centric landing pages and websites to improve user engagement, SEO, and conversion</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                  <div className="lg:col-span-3">
                    <h3 className="text-lg font-medium text-text-primary">Cyware</h3>
                    <p className="text-text-secondary">Jersey City, NJ</p>
                    <p className="text-text-secondary">Jan 2024 – May 2024</p>
                  </div>
                  <div className="lg:col-span-7">
                    <h4 className="text-lg font-semibold text-text-primary mb-3">UX Consultant</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Analyzed competitors and conducted a heuristic evaluation to inform and shape the website refresh strategy for a cybersecurity company</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Designed website components, mockups, and a new, accessible color palette as part of a brand refresh</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Created a range of deliverables, including new landing pages, email campaigns, and social media assets to support the new brand direction</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                  <div className="lg:col-span-3">
                    <h3 className="text-lg font-medium text-text-primary">StackSource</h3>
                    <p className="text-text-secondary">New York, NY</p>
                    <p className="text-text-secondary">Nov 2022 – Oct 2023</p>
                  </div>
                  <div className="lg:col-span-7">
                    <h4 className="text-lg font-semibold text-text-primary mb-3">Senior Director of UX and Marketing</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Grew organic search acquisition by 45% by implementing a new audience-focused content strategy and up-leveling organizational design maturity</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Achieved an 80% reduction in overhead costs by leading the user research and design for a partner API experience to activate company growth strategy</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                  <div className="lg:col-span-3">
                    <h3 className="text-lg font-medium text-text-primary">StackSource</h3>
                    <p className="text-text-secondary">New York, NY</p>
                    <p className="text-text-secondary">May 2021 – Nov 2022</p>
                  </div>
                  <div className="lg:col-span-7">
                    <h4 className="text-lg font-semibold text-text-primary mb-3">UX Lead</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Evaluated, selected, and managed budget for tools for user behavior analysis, research, marketing, and design</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Planned, wrote, and executed user studies in alignment with roadmap goals</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Led execution of product design and enhancements, resulting in 92% of core audience reporting it was easier to use in a research study</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                  <div className="lg:col-span-3">
                    <h3 className="text-lg font-medium text-text-primary">OneAmerica</h3>
                    <p className="text-text-secondary">Indianapolis, IN</p>
                    <p className="text-text-secondary">Jan 2019 – May 2021</p>
                  </div>
                  <div className="lg:col-span-7">
                    <h4 className="text-lg font-semibold text-text-primary mb-3">UX Director</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Established foundational UX practices, process documentation, and a comprehensive design system while leading a team of UX researchers and designers</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Created and socialized a 3-year UX practice growth roadmap to align with marketing and IT organization planning, assisting Product Owners with roadmaps and stakeholder management</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Served as a key liaison between UX, product, and engineering, guiding accurate cost and work estimates for the company&apos;s first enterprise mobile app project</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                  <div className="lg:col-span-3">
                    <h3 className="text-lg font-medium text-text-primary">OneAmerica</h3>
                    <p className="text-text-secondary">Indianapolis, IN</p>
                    <p className="text-text-secondary">May 2016 – Jan 2019</p>
                  </div>
                  <div className="lg:col-span-7">
                    <h4 className="text-lg font-semibold text-text-primary mb-3">UI Design and Digital Marketing Leader</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Built a new team to grow our enterprise digital presence, serving enterprise digital marketing needs through collaboration and partnership</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Managed a 72% increase in UI and digital marketing design jobs opened, while reducing the time those jobs stayed with the design team by 44% and the length of jobs in days by 61%</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Wrote and implemented processes and workflows for the UI design team, setting the stage for efficiency and prioritization improvements seen in subsequent years</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                  <div className="lg:col-span-3">
                    <h3 className="text-lg font-medium text-text-primary">OneAmerica</h3>
                    <p className="text-text-secondary">Indianapolis, IN</p>
                    <p className="text-text-secondary">Jun 2015 – May 2016</p>
                  </div>
                  <div className="lg:col-span-7">
                    <h4 className="text-lg font-semibold text-text-primary mb-3">Senior UI Designer</h4>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                  <div className="lg:col-span-3">
                    <h3 className="text-lg font-medium text-text-primary">Perficient</h3>
                    <p className="text-text-secondary">Carmel, IN</p>
                    <p className="text-text-secondary">Oct 2014 – May 2015</p>
                  </div>
                  <div className="lg:col-span-7">
                    <h4 className="text-lg font-semibold text-text-primary mb-3">UX Consultant</h4>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                  <div className="lg:col-span-3">
                    <h3 className="text-lg font-medium text-text-primary">Orchard Software</h3>
                    <p className="text-text-secondary">Carmel, IN</p>
                    <p className="text-text-secondary">Jun 2013 – Oct 2014</p>
                  </div>
                  <div className="lg:col-span-7">
                    <h4 className="text-lg font-semibold text-text-primary mb-3">Web Producer</h4>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-headline mb-6">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-text-primary">Western Governors University</h3>
                  <p className="text-text-secondary">B.S. User Experience Design</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-text-primary">Indiana University-Purdue University Indianapolis</h3>
                  <p className="text-text-secondary">A.A. Arts and Humanities</p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}