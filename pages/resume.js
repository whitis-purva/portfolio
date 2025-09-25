import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
              href="/WhitisPurvaResume2025-9-24.pdf" 
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
                    I'm passionate about creating products and experiences that are valuable and equitable. An experienced practitioner and leader, I have executed work and built engaged, cross-functional teams in startup-to-enterprise environments. I believe that nurturing relationships — with team members, stakeholders, and users — is essential to delivering great design.
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
                      <h3 className="text-lg font-semibold text-text-primary mb-2">Strategy & Collaboration</h3>
                      <p className="text-text-primary">Product strategy, information architecture, stakeholder engagement, leadership</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">Tools & Software</h3>
                      <p className="text-text-primary">Figma, Sketch, Adobe Creative Cloud (Photoshop, Illustrator, InDesign), Cursor, xCopilot</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">User Research & Analytics</h3>
                      <p className="text-text-primary">Competitive analysis, user interviews, UserTesting.com, Userbrain, Hotjar, Fullstory</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">Agile & Cross-functional Work</h3>
                      <p className="text-text-primary">Sprint planning, scrum team collaboration, accessibility best practices</p>
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
                    <h3 className="text-lg font-medium text-text-primary">Allied Solutions</h3>
                    <p className="text-text-secondary">Carmel, IN</p>
                    <p className="text-text-secondary">August 2024 – Present</p>
                  </div>
                  <div className="lg:col-span-7">
                    <h4 className="text-lg font-semibold text-text-primary mb-3">Sr. UX Designer</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Lead UX and interaction design for a new data reporting software product, ensuring alignment with business objectives and accessibility and usability best practices</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Execute the design process by iteratively refining design work from usability testing with researchers, receiving commendation from stakeholders and executive leadership for speed and and agility</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Present work and collaborate in sprint and design reviews</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Manage a student UX project in partnership with a local university, acting as a mentor and providing project oversight</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Help define product requirements and roadmap in collaboration with product management</span>
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
                        <span className="text-lg text-text-primary">Engage in a cross-functional role that combines strategic planning as well as tactical delivery in digital marketing and UX</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Manage client relationships with empathy and collaboration</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Execute pixel perfect designs for landing pages and websites, optimizing for both SEO and user-centric experiences</span>
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
                        <span className="text-lg text-text-primary">Conducted competitive analysis and heuristic evaluation to support website refresh strategy for a cybersecurity company</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Created mockups, website components, and an accessible color palette for brand refresh</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Designed deliverables including landing pages, email campaigns, and social media assets</span>
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
                        <span className="text-lg text-text-primary">Led user research and design of partner API experience to activate company growth strategy</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Up-leveled organizational design maturity by creating customer centric experiences</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Built marketing growth strategy to create 80% reduction in overhead costs</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Grew organic search acquisition by 45% by implementing an audience-focused content strategy</span>
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
                        <span className="text-lg text-text-primary">Developed foundational best practices, process documentation, and a design system, while leading a team of UX researchers and designers</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Acted as a liaison between UX design, product management, and engineering, guiding accuracy of cost and work estimates for our first enterprise mobile app project</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Assisted Product Owners with roadmaps and stakeholder relationship management</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-logo rounded-full mt-2.5 mr-3"></div>
                        <span className="text-lg text-text-primary">Created and socialized a 3-year UX practice growth roadmap to align with marketing and IT org planning</span>
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