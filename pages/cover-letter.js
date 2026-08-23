import fs from "fs";
import path from "path";
import Head from "next/head";

const PITCHES_DIR = path.join(process.cwd(), "src/data/pitches");

export default function CoverLetterPrint({ pitch }) {
  if (!pitch) return <p style={{ color: '#1c1917', padding: '20px' }}>Loading pitch data...</p>;

  const paragraphs = pitch.coverLetterText ? pitch.coverLetterText.split('\n\n') : [];

  return (
    <>
      <Head>
        <title>Cover Letter • {pitch.company}</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="print-wrapper-override">
        <div className="print-container">
          <div className="letter-header">
            <h1>Nicole Whitis-Purva</h1>
            <p>nicolewhitispurva@gmail.com | (317) 362-2594 | whitis-purva.work</p>
          </div>

          <hr className="divider" />

          <div className="letter-meta">
            <p>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <br />
            <p><strong>Hiring Team</strong></p>
            <p>{pitch.company} {pitch.team ? `• ${pitch.team}` : ''}</p>
            <p>Role: {pitch.role}</p>
          </div>

          <main className="letter-body">
            {paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </main>
        </div>
      </div>

      <style jsx global>{`
        html, body, #__next {
          background: #f4f4f5 !important;
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          height: auto !important;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
        }
        
        .print-wrapper-override {
          padding: 40px 20px;
          display: block;
        }

        .print-container {
          background: #ffffff !important;
          max-width: 800px;
          margin: 0 auto;
          padding: 50px 60px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
          color: #1c1917 !important;
          box-sizing: border-box;
        }

        .letter-header h1 {
          font-size: 26px !important;
          font-weight: 700 !important;
          letter-spacing: -0.025em !important;
          margin: 0 0 6px 0 !important;
          color: #1c1917 !important;
          line-height: 1.2 !important;
        }

        .letter-header p {
          margin: 0 !important;
          color: #57534e !important;
          font-size: 14px !important;
        }

        .divider {
          border: 0 !important;
          border-top: 1px solid #d6d3d1 !important;
          margin: 18px 0 !important;
        }

        .letter-meta {
          margin-bottom: 24px !important;
          font-size: 14px !important;
          line-height: 1.4 !important;
          color: #1c1917 !important;
        }

        .letter-body p {
          font-size: 14px !important;
          line-height: 1.5 !important;
          margin: 0 0 14px 0 !important;
          color: #1c1917 !important;
        }

        @media print {
          @page {
            size: letter;
            margin: 0.5in !important;
          }
          
          html, body, #__next, .print-wrapper-override {
            background: #ffffff !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          .print-container {
            box-shadow: none !important;
            padding: 0 !important;
            max-width: 100% !important;
            background: transparent !important;
          }

          .global-header, .global-footer, footer, nav, .nav, .footer {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

// Next.js static build expects this manual fallback catch for root pages
export async function getStaticProps() {
  const filePath = path.join(PITCHES_DIR, "medallion.json");
  
  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const pitch = JSON.parse(fileContents);

  return {
    props: { pitch },
  };
}