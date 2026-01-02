import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold">R.W. Martin Design + Build</div>
            <p className="mt-2 text-sm text-neutral-600">
              Remodeling & home improvements. Clean process. Premium finish.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Quick links</div>
            <div className="mt-2 grid gap-2 text-sm text-neutral-700">
              <Link href="/#services" className="hover:text-neutral-950">Services</Link>
              <Link href="/portfolio" className="hover:text-neutral-950">Portfolio</Link>
              <Link href="/#process" className="hover:text-neutral-950">Process</Link>
              <Link href="/#contact" className="hover:text-neutral-950">Contact</Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Contact</div>
            <div className="mt-2 grid gap-2 text-sm text-neutral-700">
              <a href="tel:+15403794048" className="hover:text-neutral-950">540-379-4048</a>
              <span className="text-neutral-500">Fredericksburg Area</span>
              <span className="text-neutral-500">Replace with your address/email later</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-neutral-200 pt-6 text-xs text-neutral-500 md:flex-row">
          <span>© {new Date().getFullYear()} R.W. Martin Design + Build</span>
          <span>Built with Next.js + Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
