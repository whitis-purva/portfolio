import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectTemplate from "@/components/ProjectTemplate";
import { getAllProjectSlugs, getProjectBySlug } from "@/projectData";

export default function ProjectPage({ project }) {
  if (!project) return null;
  return (
    <div>
      <Head>
        <title>{project.title} • NWP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <ProjectTemplate {...project} />
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const slugs = getAllProjectSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug);
  const allSlugs = getAllProjectSlugs();
  const currentIndex = allSlugs.indexOf(params.slug);
  
  const previousProject = currentIndex > 0 ? getProjectBySlug(allSlugs[currentIndex - 1]) : null;
  const nextProject = currentIndex < allSlugs.length - 1 ? getProjectBySlug(allSlugs[currentIndex + 1]) : null;
  
  return { 
    props: { 
      project: {
        ...project,
        previousProject,
        nextProject
      }
    } 
  };
}


