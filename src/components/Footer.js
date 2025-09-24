export default function Footer() {
  return (
    <footer className="mt-20 border-t border-rule py-10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <img src="/nwp-logo.svg" alt="NWP" className="h-7 w-auto" />
        <div className="text-sm font-semibold text-logo flex items-center">
          <span>NICOLE WHITIS-PURVA</span>
          <span className="sq-bullet" aria-hidden="true"></span>
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
      </div>
    </footer>
  );
}


