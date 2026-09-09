import { useEffect, useRef, useState } from 'react';
import { MenuIcon, CloseIcon } from './icons';

interface NavLink {
  href: string;
  label: string;
}

interface Props {
  links: NavLink[];
  labels: {
    open: string;
    close: string;
    cv: string;
    cvHint: string;
  };
  cvPath: string;
}

/**
 * Menú de navegación en pantallas pequeñas. Isla de React: es de las pocas
 * piezas del sitio que necesita estado. Se hidrata con `client:idle`, así que
 * no compite con el primer render del héroe.
 */
export default function MobileNav({ links, labels, cvPath }: Props) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Escape cierra y devuelve el foco al botón, que es donde el usuario estaba.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // Con el panel abierto, la página de fondo no debe desplazarse.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Al abrir, el foco entra al panel para que el teclado siga el orden visual.
  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? labels.close : labels.open}
        className="grid h-10 w-10 place-items-center text-ink-fg"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          ref={panelRef}
          tabIndex={-1}
          className="on-ink fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-ink-rule bg-ink px-5 py-8 text-ink-fg outline-none sm:px-8"
        >
          <nav aria-label={labels.open}>
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ink-rule py-4 text-body-l text-ink-fg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={cvPath}
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex rounded-xs bg-paper px-5 py-3 text-meta font-semibold text-ink"
          >
            {labels.cv}
            <span className="sr-only"> ({labels.cvHint})</span>
          </a>
        </div>
      )}
    </div>
  );
}
