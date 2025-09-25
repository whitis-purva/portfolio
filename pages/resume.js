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
        <section className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-headline mb-6">Résumé</h1>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-rule">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-headline mb-2">Nicole Whitis-Purva</h2>
              <p className="text-lg text-text-secondary">UX Designer & Leader</p>
              <p className="text-text-primary mt-2">nicolewhitispurva@gmail.com</p>
            </div>
            
            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold text-headline mb-4">Experience</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-text-primary">Senior UX Designer</h4>
                    <p className="text-text-secondary">Company Name • 2020 - Present</p>
                    <p className="text-text-primary mt-2">Led cross-functional teams in designing user-centered solutions for complex financial products. Collaborated with research and engineering teams to deliver high-impact features.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-text-primary">UX Designer</h4>
                    <p className="text-text-secondary">Previous Company • 2018 - 2020</p>
                    <p className="text-text-primary mt-2">Designed mobile-first experiences and conducted user research to inform product decisions. Created design systems and component libraries.</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-headline mb-4">Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-text-primary mb-2">Design</h4>
                    <p className="text-text-primary">User Research, Information Architecture, Wireframing, Prototyping, Visual Design, Design Systems</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-text-primary mb-2">Tools</h4>
                    <p className="text-text-primary">Figma, Sketch, Adobe Creative Suite, Principle, InVision, Miro</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-headline mb-4">Education</h3>
                <div>
                  <h4 className="text-lg font-medium text-text-primary">Master of Fine Arts</h4>
                  <p className="text-text-secondary">University Name • 2016</p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
