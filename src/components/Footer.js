export default function Footer() {
  return (
    <footer className="mt-20 border-t border-rule py-10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Top row - Logo and Navigation buttons */}
        <div className="flex items-center justify-between mb-6">
          <img src="/nwp-logo.svg" alt="NWP" className="h-7 w-auto" />
          
          {/* Navigation buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="/" 
              className="flex px-4 py-2 justify-center items-center gap-2.5 rounded-md border border-rule text-text-primary hover:bg-gold-muted transition-colors"
            >
              work
            </a>
            <a 
              href="/about" 
              className="flex px-4 py-2 justify-center items-center gap-2.5 rounded-md border border-rule text-text-primary hover:bg-peach-muted transition-colors"
            >
              about
            </a>
            <a 
              href="/resume" 
              className="flex px-4 py-2 justify-center items-center gap-2.5 rounded-md border border-rule text-text-primary hover:bg-pink-muted transition-colors"
            >
              résumé
            </a>
            <a 
              href="https://linkedin.com/in/nicolewhitispurva" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex w-10 h-10 justify-center items-center gap-2.5 rounded-md border border-rule text-text-primary hover:bg-lavender-muted transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-text-primary">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.867 0-2.154 1.459-2.154 2.969v5.694h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.84-1.562 3.04 0 3.607 2.003 3.607 4.609v5.586z"/>
              </svg>
            </a>
            <a 
              href="mailto:nicolewhitispurva@gmail.com" 
              className="flex w-10 h-10 justify-center items-center gap-2.5 rounded-md border border-rule text-text-primary hover:bg-lilac-muted transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-text-primary">
                <path d="M12 13.065l-11.2-8.065h22.4l-11.2 8.065zm0 2.935l-12-8.571v14.571h24v-14.571l-12 8.571z"/>
              </svg>
            </a>
          </div>
            </div>
            
            {/* Horizontal rule */}
            <div className="w-full h-px bg-rule my-6"></div>
            
            {/* Bottom row - Specialties text */}
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


