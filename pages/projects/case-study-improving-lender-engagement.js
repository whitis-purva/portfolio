import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function CaseStudyPage() {
  const data = {
    title: "Improving lender engagement at StackSource",
    intro:
      "A condensed case study structure with narrative blocks and large visuals.",
    blocks: [
      { heading: "Goal", body: "Increase lender activity and conversion across the funnel." },
      { heading: "Research", body: "Qualitative interviews and product analytics informed hypotheses." },
      { heading: "Design", body: "Iterative flows and UI updates targeting key drop-off points." },
    ],
    results:
      "Significant lift in lender engagement metrics and qualified deal responses.",
  };

  return (
    <div>
      <Head>
        <title>{data.title} • NWP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <CaseStudyLayout {...data} />
      <Footer />
    </div>
  );
}


