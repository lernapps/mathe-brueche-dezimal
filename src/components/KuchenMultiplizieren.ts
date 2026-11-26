/** Keep b of d subpieces of each of the z originally selected n-ths. */
export function cakeSelection(z: number, n: number, b: number, d: number): boolean[] {
  return Array.from({ length: n * d }, (_, i) => Math.floor(i / d) < z && i % d < b);
}

export type CakePiece = "taken" | "removed" | "other";
/** Each subpiece: taken (b of d of each owned n-th), removed (owned but not taken) or other (never owned). */
export function cakePieces(z: number, n: number, b: number, d: number): CakePiece[] {
  return cakeSelection(z, n, b, d).map((taken, i) => (taken ? "taken" : Math.floor(i / d) < z ? "removed" : "other"));
}
