import Head from "next/head";
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
      <main className="max-w-5xl mx-auto px-6 sm:px-8 pt-10">
        <section className="pt-8">
          <h1 className="text-[40px] sm:text-5xl font-semibold text-text-primary">Nicole Whitis-Purva</h1>
          <div className="mt-4 text-logo font-semibold tracking-wide">
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
          <h2 className="mt-8 text-xl font-semibold text-headline">My Work</h2>
          <p className="mt-3 max-w-3xl text-[--text-primary]">
            I'm passionate about creating products and experiences that are valuable and
            equitable. I'm an experienced practitioner and leader, and I have executed work and
            built engaged, cross-functional teams in startup-to-enterprise environments.
          </p>
        </section>

        <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { id: 1, title: "Reporting platform for lenders", subtitle: "UX Design", img: "/project1.png" },
            { id: 2, title: "SaaS product for CRE financing", subtitle: "UX Design", img: "/project2.png" },
            { id: 3, title: "Retirement services app", subtitle: "UX Design", img: "/project3.png" },
            { id: 4, title: "Improving lender engagement", subtitle: "Case Study", img: "/project4.png" },
            { id: 5, title: "Brand & website refresh", subtitle: "Design & Leadership", img: "/project5.png" },
            { id: 6, title: "Design system", subtitle: "Design & Leadership", img: "/project6.png" },
          ].map((p) => (
            <article key={p.id} className="group">
              <div className="w-full overflow-hidden rounded-xl">
                {/* Replace with actual screenshots placed in /public */}
                <img src={p.img} alt={p.title} className="block w-full h-auto" />
              </div>
              <div className="mt-2 text-sm text-text-secondary">{p.subtitle}</div>
              <h3 className="mt-1 text-lg font-semibold text-text-primary">{p.title}</h3>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}


