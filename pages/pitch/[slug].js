import fs from "fs";
import path from "path";
import Head from "next/head";
import PitchHeader from "@/components/PitchHeader";
import Footer from "@/components/Footer";
import PitchTemplate from "@/components/PitchTemplate";
import { PORTFOLIO_URL, resolveMappedProjects } from "@/pitchData";

const PITCHES_DIR = path.join(process.cwd(), "src/data/pitches");

function getPitchSlugsFromDisk() {
  if (!fs.existsSync(PITCHES_DIR)) return [];

  return fs
    .readdirSync(PITCHES_DIR)
    .filter((file) => file.endsWith(".json"))
    .map((file) => file.replace(/\.json$/, ""));
}

function readPitchJson(slug) {
  const filePath = path.join(PITCHES_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;

  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export default function PitchPage({ pitch }) {
  if (!pitch) return null;

  return (
    <div>
      <Head>
        <title>{pitch.headline} • Nicole Whitis-Purva</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
      </Head>
      <PitchHeader portfolioUrl={pitch.portfolioUrl} />
      <PitchTemplate pitch={pitch} />
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const slugs = getPitchSlugsFromDisk();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = readPitchJson(params.slug);

  if (!data) {
    return { notFound: true };
  }

  const pitch = {
    ...data,
    portfolioUrl: data.portfolioUrl || PORTFOLIO_URL,
    mappedProjects: resolveMappedProjects(data.mappedProjects),
  };

  return {
    props: { pitch },
  };
}
