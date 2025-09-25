import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Nicole Whitis-Purva</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="max-w-5xl mx-auto px-6 sm:px-8 pt-10 pb-8">
        <section className="pt-8 text-center">
          <h1 className="text-[40px] sm:text-5xl font-semibold text-text-primary mb-8">Nicole Whitis-Purva</h1>
          <div className="mt-4 text-logo font-semibold tracking-wide flex items-center justify-center flex-wrap gap-2">
            <span>UX</span>
            <span className="sq-bullet" aria-hidden="true"></span>
            <span>STRATEGY</span>
            <span className="sq-bullet" aria-hidden="true"></span>
            <span>RESEARCH</span>
            <span className="sq-bullet" aria-hidden="true"></span>
            <span>DESIGN</span>
            <span className="sq-bullet" aria-hidden="true"></span>
            <span>LEADERSHIP</span>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-[--text-primary] text-xl font-normal leading-10">
            I'm passionate about creating products and experiences that are valuable and
            equitable. I'm an experienced practitioner and leader, and I have executed work and
            built engaged, cross-functional teams in startup-to-enterprise environments.
          </p>
        </section>

        <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { id: 1, slug: "reporting-platform", title: "Reporting platform for lenders", subtitle: "UX Design", img: "/project1.png" },
            { id: 2, slug: "saas-product", title: "SaaS product for CRE financing", subtitle: "UX Design", img: "/project2.png" },
            { id: 3, slug: "retirement-services-app", title: "Retirement services app", subtitle: "UX Design", img: "/project3.png" },
            { id: 4, slug: "case-study-improving-lender-engagement", title: "Improving lender engagement", subtitle: "Case Study", img: "/project4.png", caseStudy: true },
            { id: 5, slug: "brand-and-website-refresh", title: "Brand & website refresh", subtitle: "Design & Leadership", img: "/project5.png" },
            { id: 6, slug: "design-system", title: "Design system", subtitle: "Design & Leadership", img: "/project6.png" },
          ].map((p) => {
            const hoverColors = [
              'hover:bg-gold-muted/40',     // Project 1 - gold
              'hover:bg-pink-muted/40',     // Project 2 - pink  
              'hover:bg-peach-muted/40',    // Project 3 - peach
              'hover:bg-lilac-muted/40',    // Project 4 - lilac
              'hover:bg-lavender-muted/40', // Project 5 - lavender
              'hover:bg-blue-muted/40'      // Project 6 - blue
            ];
            
            return (
            <Link key={p.id} href={p.caseStudy ? `/projects/${p.slug}` : `/projects/${p.slug}`} className="group block">
              <article className={`transition-all duration-200 hover:scale-[1.02] cursor-pointer p-2 rounded-xl ${hoverColors[p.id - 1]}`}>
                <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden relative group project-card">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="w-full h-full object-cover border-0 outline-none" 
                    style={{ border: 'none', outline: 'none' }}
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="rounded-md p-2" style={{ backgroundColor: 'rgba(73, 43, 14, 0.85)' }}>
                      <svg className="w-4 h-4 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-sm text-text-secondary">{p.subtitle}</div>
                <h3 className="mt-1 text-lg font-semibold text-text-primary">{p.title}</h3>
              </article>
            </Link>
            );
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
}


