import { Link } from 'react-router-dom';
import { TOOLS } from '../lib/tools';
import { LogoMark, ShieldCheckIcon } from './icons';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-base font-bold text-slate-800">
              <LogoMark className="h-7 w-7" />
              PDFCraft
            </Link>
            <p className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
              <ShieldCheckIcon className="h-4 w-4 shrink-0 text-emerald-500" />
              Files never leave your device.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-800">Organize</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              {TOOLS.filter((t) => t.category === 'organize').map((t) => (
                <li key={t.slug}>
                  <Link to={`/tools/${t.slug}`} className="transition hover:text-brand-600">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-800">Edit &amp; Optimize</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              {TOOLS.filter((t) => t.category === 'edit' || t.category === 'optimize').map((t) => (
                <li key={t.slug}>
                  <Link to={`/tools/${t.slug}`} className="transition hover:text-brand-600">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-800">Convert</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              {TOOLS.filter((t) => t.category === 'convert').map((t) => (
                <li key={t.slug}>
                  <Link to={`/tools/${t.slug}`} className="transition hover:text-brand-600">
                    {t.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/premium" className="transition hover:text-brand-600">
                  Go Premium
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} PDFCraft. All rights reserved.</p>
          <p>Built with React, pdf-lib &amp; pdf.js.</p>
        </div>
      </div>
    </footer>
  );
}
