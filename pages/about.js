import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AssetImage from "@/components/AssetImage";

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
        <section>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-8">About Nicole Whitis-Purva</h1>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* My approach */}
            <div>
              <h2 className="text-2xl font-semibold text-headline mb-6">My approach</h2>
              <div className="space-y-4">
                <p className="text-lg text-text-primary leading-relaxed">
                  I advocate for organizational design maturity through <strong>cultivating relationships</strong> with partners and stakeholders, and demonstrating success through <strong>measurable improvements in user experience and business outcomes</strong>.
                </p>
                <p className="text-lg text-text-primary leading-relaxed">
                  I believe that continuous engagement with customers is crucial for growth, and <strong>my design process includes facilitation and collaboration</strong> wherever possible.
                </p>
                <p className="text-lg text-text-primary leading-relaxed">
                  Great design is achieved by <strong>meeting both user needs and business goals</strong>.
                </p>
                <p className="text-lg text-text-primary leading-relaxed">
                  As a leader, I&apos;ve remained fully functional, <strong>thinking strategically while delivering tactical work</strong> and artifacts from discovery through delivery.
                </p>
              </div>
            </div>

            {/* My story */}
            <div>
              <h2 className="text-2xl font-semibold text-headline mb-6">My story</h2>
              <div className="space-y-4">
                <p className="text-lg text-text-primary leading-relaxed">
                  I&apos;ve always been drawn to visual art forms throughout my life—I&apos;ve been a silversmith, an award-winning knitter and hand spinner, and a costume designer. Working across these different disciplines has shaped my understanding of how form, function, and aesthetics work together.
                </p>
                <p className="text-lg text-text-primary leading-relaxed">
                  My most recent creative pursuits include illustration, surface pattern design, and fine art. Since 2015, I&apos;ve exhibited my drawing and painting work in group shows, solo exhibitions, and local businesses.
                </p>
                <p className="text-lg text-text-primary leading-relaxed">
                  My love of art intersects with my love of travel. On vacation, you might find me sketching at a museum, in a café, or on the beach. So far, I&apos;ve visited 10 countries, though France is my favorite.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Grid */}
        <section className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Top Row */}
            <div className="aspect-square overflow-hidden rounded-xl">
              <AssetImage src="/art-1.png" alt="Artwork 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <AssetImage src="/art-2.png" alt="Artwork 2" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <AssetImage src="/art-3.png" alt="Artwork 3" className="w-full h-full object-cover" />
            </div>
            
            {/* Bottom Row */}
            <div className="aspect-square overflow-hidden rounded-xl">
              <AssetImage src="/art-4.png" alt="Artwork 4" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <AssetImage src="/art-5.png" alt="Artwork 5" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <AssetImage src="/art-6.png" alt="Artwork 6" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
