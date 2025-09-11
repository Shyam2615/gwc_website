export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-10 text-sm text-foreground/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-foreground text-base font-semibold">Grace Worship Center</h3>
            <p className="mt-2">A Christ-centered community in worship, word, and service.</p>
          </div>
          <div>
            <h4 className="font-medium">Visit Us</h4>
            <p className="mt-2">7J3C+H8M, Dandeli, Karnataka 581325</p>
            <p>Sunday Service: 10:00 AM</p>
          </div>
          <div>
            <h4 className="font-medium">Connect</h4>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:opacity-80" href="mailto:info@gwc.org">info@gwc.org</a></li>
              <li><a className="hover:opacity-80" href="#">Facebook</a></li>
              <li><a className="hover:opacity-80" href="#">Instagram</a></li>
              <li><a className="hover:opacity-80" href="https://www.youtube.com/@gracemediadandeli2192">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
          <p>© {new Date().getFullYear()} Grace Worship Center. All rights reserved.</p>
          <p className="text-xs">Made with love.</p>
        </div>
      </div>
    </footer>
  );
}


