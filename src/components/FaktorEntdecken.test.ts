import { expect, test } from "vite-plus/test";
import { divisors, factorPairs, isPrime, powers, split } from "./FaktorEntdecken.ts";
test("factorisation preserves the product and stops only at primes", () => {
  let leaves = [24];
  leaves = split(leaves, 0, 4);
  expect(leaves).toEqual([4, 6]);
  leaves = split(leaves, 0, 2);
  leaves = split(leaves, 2, 2);
  expect(leaves).toEqual([2, 2, 2, 3]);
  expect(leaves.reduce((a, b) => a * b, 1)).toBe(24);
  expect(leaves.every(isPrime)).toBe(true);
  expect(split([13], 0, 2)).toEqual([13]);
  expect(isPrime(1)).toBe(false);
  expect(isPrime(2)).toBe(true);
  expect(divisors(13)).toEqual([]);
});
test("each split is offered once, as an unordered pair", () => {
  expect(factorPairs(12)).toEqual([
    [2, 6],
    [3, 4],
  ]);
  expect(factorPairs(36)).toEqual([
    [2, 18],
    [3, 12],
    [4, 9],
    [6, 6],
  ]);
  expect(factorPairs(13)).toEqual([]);
  expect(factorPairs(4)).toEqual([[2, 2]]);
});
test("equal prime factors are collected as powers", () => {
  expect(powers([2, 3, 2, 2])).toEqual([
    { base: 2, exponent: 3 },
    { base: 3, exponent: 1 },
  ]);
  expect(powers([5])).toEqual([{ base: 5, exponent: 1 }]);
  const leaves = [3, 2, 5, 2, 3, 2];
  expect(powers(leaves).reduce((p, { base, exponent }) => p * base ** exponent, 1)).toBe(360);
});
