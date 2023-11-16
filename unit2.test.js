import { describe, expect, it, vi } from "vitest";
import { executeCallback } from "./unit2";

describe("executeCallback function", () => {
  it("should properly invoke the provided callback function", () => {
    const mockCallback = vi.fn();
    executeCallback(mockCallback, "Test task");

    // Check if the callback was called
    expect(mockCallback).toHaveBeenCalled();
  });

  it("should execute the callback function with the provided taskText argument", () => {
    const mockCallback = vi.fn();
    const taskText = "Buy groceries";
    executeCallback(mockCallback, taskText);

    // Check if the callback was called with the correct argument
    expect(mockCallback).toHaveBeenCalledWith(taskText);
  });
});
