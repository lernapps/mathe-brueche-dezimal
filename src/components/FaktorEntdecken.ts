/** Proper factors, excluding the trivial product 1 · n. */
export function divisors(n: number): number[] {
  return Array.from({ length: Math.max(0, n - 2) }, (_, i) => i + 2).filter((d) => n % d === 0);
}
export function isPrime(n: number): boolean {
  return Number.isInteger(n) && n > 1 && divisors(n).length === 0;
}
export function split(leaves: readonly number[], index: number, factor: number): number[] {
  const value = leaves[index];
  if (value === undefined || !divisors(value).includes(factor)) return [...leaves];
  return [...leaves.slice(0, index), factor, value / factor, ...leaves.slice(index + 1)];
}
/** Each way to split n once, as an unordered pair: 3 · 4 and 4 · 3 are the same choice. */
export function factorPairs(n: number): [number, number][] {
  return divisors(n)
    .filter((d) => d * d <= n)
    .map((d): [number, number] => [d, n / d]);
}
/** Equal prime factors collected as powers, smallest base first: [2, 2, 2, 3] gives 2^3 · 3^1. */
export function powers(leaves: readonly number[]): { base: number; exponent: number }[] {
  const counts = new Map<number, number>();
  for (const leaf of [...leaves].sort((a, b) => a - b)) counts.set(leaf, (counts.get(leaf) ?? 0) + 1);
  return [...counts].map(([base, exponent]) => ({ base, exponent }));
}
