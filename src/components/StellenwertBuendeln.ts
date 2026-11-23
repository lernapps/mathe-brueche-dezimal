// Logic of the place-value board with the places E (Einer) and, to the right of the comma, z (Zehntel),
// h (Hundertstel) and t (Tausendstel). Bundling turns ten tokens of one place into one token of the place to its
// left; the number stays the same.
export type Stellen = { e: number; z: number; h: number; t: number };
export type Spalte = "z" | "h" | "t";

/** The place to the left of a place, where ten tokens are bundled into one. */
export const LEFT: Record<Spalte, "e" | "z" | "h"> = { z: "e", h: "z", t: "h" };

/** The value in thousandths, an exact integer. */
export function thousandths(s: Stellen): number {
  return s.e * 1000 + s.z * 100 + s.h * 10 + s.t;
}

/** Can ten tokens of this place be bundled? */
export function canBundle(s: Stellen, col: Spalte): boolean {
  return s[col] >= 10;
}

/** Ten tokens of a place become one token of the place to the left. The value does not change. */
export function bundle(s: Stellen, col: Spalte): Stellen {
  if (!canBundle(s, col)) return { ...s };
  const next = { ...s, [col]: s[col] - 10 };
  next[LEFT[col]] += 1;
  return next;
}

/** The number as a decimal with a comma, without trailing zeros: 130 thousandths are 0,13. */
export function format(total: number): string {
  const ganze = Math.floor(total / 1000);
  const rest = String(total % 1000)
    .padStart(3, "0")
    .replace(/0+$/, "");
  return rest ? `${ganze},${rest}` : String(ganze);
}

/** Keeps a start state sensible: whole counts from 0 to 29, so that the tokens fit the board. */
export function clamp(s: Stellen): Stellen {
  const c = (x: number) => Math.max(0, Math.min(Math.trunc(Number.isFinite(x) ? x : 0), 29));
  return { e: c(s.e), z: c(s.z), h: c(s.h), t: c(s.t) };
}
