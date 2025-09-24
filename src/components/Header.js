import Link from "next/link";

export default function Header() {
  return (
        <header className="sticky top-0 z-20 bg-background/95 backdrop-blur border-b border-rule">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/nwp-logo.svg" alt="NWP" className="h-8 w-auto" />
            </div>
            <nav className="flex items-center gap-3 sm:gap-4 font-[500] text-text-primary">
          <Link href="/" className="flex px-4 py-2 justify-center items-center gap-2 rounded-[6px] bg-gold hover:bg-gold-muted text-text-primary transition-colors">work</Link>
          <Link href="#" className="flex px-4 py-2 justify-center items-center gap-2 rounded-[6px] bg-peach hover:bg-peach-muted text-text-primary transition-colors">about</Link>
          <Link href="#" className="flex px-4 py-2 justify-center items-center gap-2 rounded-[6px] bg-pink hover:bg-pink-muted text-text-primary transition-colors">résumé</Link>
          <Link aria-label="LinkedIn" href="https://www.linkedin.com/in/" target="_blank" className="flex size-9 justify-center items-center rounded-[6px] bg-lilac hover:bg-lilac-muted text-text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-text-primary">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.867 0-2.154 1.459-2.154 2.969v5.694h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.84-1.562 3.04 0 3.607 2.003 3.607 4.609v5.586z"/>
            </svg>
          </Link>
          <Link aria-label="Email" href="mailto:hello@example.com" className="flex size-9 justify-center items-center rounded-[6px] bg-lavender hover:bg-lavender-muted text-text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-text-primary">
              <path d="M12 13.065l-11.2-8.065h22.4l-11.2 8.065zm0 2.935l-12-8.571v14.571h24v-14.571l-12 8.571z"/>
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}


