import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { getAllProjectSlugs, getProjectBySlug } from "@/projectData";

export default function CaseStudyPage({ previousProject, nextProject }) {
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
    previousProject,
    nextProject,
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

export async function getStaticProps() {
  const allSlugs = getAllProjectSlugs();
  const currentIndex = allSlugs.indexOf("case-study-improving-lender-engagement");
  
  const previousProject = currentIndex > 0 ? getProjectBySlug(allSlugs[currentIndex - 1]) : null;
  const nextProject = currentIndex < allSlugs.length - 1 ? getProjectBySlug(allSlugs[currentIndex + 1]) : null;
  
  return { 
    props: { 
      previousProject,
      nextProject
    } 
  };
}


