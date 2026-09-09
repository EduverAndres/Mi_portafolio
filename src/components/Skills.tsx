import { useId, useState } from 'react';
import { ChevronDownIcon } from './icons';

interface SkillGroup {
  id: string;
  name: string;
  items: readonly string[];
}

interface Props {
  core: readonly string[];
  groups: readonly SkillGroup[];
  labels: {
    coreNote: string;
    more: string;
    less: string;
  };
}

/**
 * Antes esta sección era una nube de unas cincuenta etiquetas idénticas, donde
 * todo pesaba lo mismo y por tanto nada destacaba.
 *
 * Ahora hay dos niveles: ocho tecnologías centrales ocupan una rejilla con
 * presencia real, y el resto del stack queda agrupado y plegado. Un reclutador
 * escanea ocho; las cincuenta siguen ahí para quien las busque.
 */
export default function Skills({ core, groups, labels }: Props) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  return (
    <div>
      <p className="text-meta text-ink/60">{labels.coreNote}</p>

      <ul className="mt-5 grid grid-cols-2 border-t border-l border-rule sm:grid-cols-4">
        {core.map((skill) => (
          <li
            key={skill}
            className="border-r border-b border-rule px-4 py-6 sm:px-5 sm:py-8"
          >
            <span className="font-display text-lg font-semibold sm:text-xl">
              {skill}
            </span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        aria-controls={panelId}
        className="mt-8 inline-flex items-center gap-2 text-meta font-semibold text-signal underline decoration-signal/35 underline-offset-6 transition-colors hover:decoration-signal"
      >
        {expanded ? labels.less : labels.more}
        <ChevronDownIcon class={expanded ? 'rotate-180' : undefined} />
      </button>

      {/* El panel se muestra al pedirlo: el movimiento responde a una acción,
          que es el único movimiento que este sitio se permite. */}
      <div id={panelId} hidden={!expanded} className="mt-8">
        <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.id}>
              <dt className="text-meta font-semibold">{group.name}</dt>
              <dd className="mt-1.5 text-meta text-ink/60">
                {group.items.join(', ')}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
