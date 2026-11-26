import { expect, test } from "vite-plus/test";
import { cakePieces, cakeSelection } from "./KuchenMultiplizieren.ts";
test("each original piece is subdivided and only the requested portion of those pieces remains", () => {
  for (let d = 1; d <= 6; d++)
    for (let b = 0; b <= d; b++) {
      const pieces = cakeSelection(3, 4, b, d);
      expect(pieces).toHaveLength(4 * d);
      expect(pieces.filter(Boolean)).toHaveLength(3 * b);
      for (let quarter = 0; quarter < 4; quarter++) {
        expect(pieces.slice(quarter * d, (quarter + 1) * d).filter(Boolean)).toHaveLength(quarter < 3 ? b : 0);
      }
    }
  expect(cakeSelection(3, 4, 2, 3)).toEqual([
    true,
    true,
    false,
    true,
    true,
    false,
    true,
    true,
    false,
    false,
    false,
    false,
  ]);
});
test("pieces of the owned quarters that are not taken are marked as removed, the fourth quarter never", () => {
  expect(cakePieces(3, 4, 2, 3)).toEqual([
    "taken",
    "taken",
    "removed",
    "taken",
    "taken",
    "removed",
    "taken",
    "taken",
    "removed",
    "other",
    "other",
    "other",
  ]);
  for (let d = 1; d <= 6; d++)
    for (let b = 0; b <= d; b++) {
      const pieces = cakePieces(3, 4, b, d);
      expect(pieces.filter((p) => p === "removed")).toHaveLength(3 * (d - b));
      expect(pieces.filter((p) => p === "other")).toHaveLength(d);
    }
});
