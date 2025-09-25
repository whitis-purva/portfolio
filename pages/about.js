import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About • NWP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="max-w-5xl mx-auto px-6 sm:px-8 py-10">
        {/* About Nicole Whitis-Purva */}
        <section className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-headline mb-4">About Nicole Whitis-Purva</h1>
          <h2 className="text-2xl font-semibold text-headline mb-6">UX Designer & Leader</h2>
          <p className="text-lg text-text-primary leading-relaxed max-w-4xl">
            I'm passionate about creating products and experiences that are valuable and equitable. I have demonstrated experience building engaged, cross-functional teams in startup-to-enterprise environments. I'm a skilled leader, strategist, manager, and practitioner.
          </p>
        </section>

        {/* My approach */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-headline mb-6">My approach</h2>
          <div className="space-y-6 max-w-4xl">
            <p className="text-lg text-text-primary leading-relaxed">
              I advocate for organizational design maturity through cultivating relationships with partners and stakeholders, and demonstrating success.
            </p>
            <p className="text-lg text-text-primary leading-relaxed">
              I believe that continuous engagement with customers and clients is crucial for growth, and my design process includes facilitation and collaboration wherever possible.
            </p>
            <p className="text-lg text-text-primary leading-relaxed">
              Great design is achieved by meeting both user needs and business goals.
            </p>
            <p className="text-lg text-text-primary leading-relaxed">
              As a leader, I have remained fully functional, thinking strategically while delivering tactical work and artifacts at every step of the design process.
            </p>
          </div>
        </section>

        {/* About me */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-headline mb-6">About me</h2>
          <div className="space-y-6 max-w-4xl">
            <p className="text-lg text-text-primary leading-relaxed">
              I've experimented with many visual art forms throughout my life--I've been a silversmith, an award-winning knitter and hand spinner, and a costume designer.
            </p>
            <p className="text-lg text-text-primary leading-relaxed">
              My most recent creative pursuits include illustration, surface pattern design, and fine art. Since 2015, I've displayed my drawing and painting work in group and solo gallery shows, and in local businesses.
            </p>
            <p className="text-lg text-text-primary leading-relaxed">
              My love of art intersects with my love of travel. On vacation, you might finding me sketching at a museum, in a café, or on the beach. So far, I've visited 10 countries.
            </p>
          </div>
        </section>

        {/* Image Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Top Row */}
            <div className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-text-secondary text-sm">Hand with drawing tool sketch</span>
            </div>
            <div className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-text-secondary text-sm">European building sketch</span>
            </div>
            <div className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-text-secondary text-sm">Portrait sketch with pencils</span>
            </div>
            
            {/* Bottom Row */}
            <div className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-text-secondary text-sm">Mandala coasters</span>
            </div>
            <div className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-text-secondary text-sm">Cardinal bird painting</span>
            </div>
            <div className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-text-secondary text-sm">Geometric pattern art</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
