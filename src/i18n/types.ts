import type { Dictionary } from './es';

/**
 * `es.ts` usa `as const`, así que cada texto queda tipado como su literal exacto
 * ('Perfil', 'Experiencia', …). Sin relajarlo, ninguna traducción sería
 * asignable. `Loose` conserva la forma del diccionario —claves, anidamiento,
 * qué campos son null— pero devuelve los literales a `string`.
 *
 * Resultado: si `en.ts` olvida una clave o cambia la estructura, el build falla;
 * si solo cambia el texto, compila.
 */
export type Loose<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends null
        ? null
        : T extends readonly (infer U)[]
          ? readonly Loose<U>[]
          : { readonly [K in keyof T]: Loose<T[K]> };

export type Dict = Loose<Dictionary>;
