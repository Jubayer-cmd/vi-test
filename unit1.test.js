import { describe, expect, it } from "vitest";
import { divide } from "./unit1";

describe("divide function", () => {
  it("should correctly divide two positive numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  it("should correctly handle division with negative numbers", () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  it("should throw an error when attempting to divide by zero", () => {
    expect(() => {
      divide(5, 0);
    }).toThrow("Division by zero");
  });
});
