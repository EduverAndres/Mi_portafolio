/**
 * Los tres iconos que usan las islas interactivas.
 *
 * Van escritos a mano en vez de importarse de lucide-react por dos razones: la
 * librería no interopera bien con Preact (sus iconos llegan como objetos, no
 * como componentes), y traerse un paquete entero para tres formas de dos líneas
 * no se justifica.
 *
 * La geometría es la de Lucide 1.43, la misma que usa Icon.astro para los
 * iconos de contacto, así que todo el sitio comparte un solo set.
 */
interface IconProps {
  size?: number;
  class?: string;
}

function base(size: number, className?: string) {
  return {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 1.75,
    'stroke-linecap': 'round' as const,
    'stroke-linejoin': 'round' as const,
    'aria-hidden': true,
    // En SVG, focusable es una cadena, no un booleano.
    focusable: 'false',
    class: className,
  };
}

export function MenuIcon({ size = 20, class: className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M4 5h16" />
      <path d="M4 12h16" />
      <path d="M4 19h16" />
    </svg>
  );
}

export function CloseIcon({ size = 20, class: className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 16, class: className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
