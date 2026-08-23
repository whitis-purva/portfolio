import AssetImage from "@/components/AssetImage";

export default function Footer() {
  return (
    <footer className="mt-8 py-10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <AssetImage src="/nwp-logo.svg" alt="NWP" className="h-7 w-auto" />
        </div>
        
        {/* Horizontal rule */}
        <div className="w-full h-px bg-rule my-6"></div>
        
        {/* Specialties text */}
        <div className="text-center">
          <div className="text-sm font-semibold text-logo flex items-center justify-center flex-wrap gap-2">
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
      </div>
    </footer>
  );
}


