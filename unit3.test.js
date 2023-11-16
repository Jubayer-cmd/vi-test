import { describe, expect, it } from "vitest";
import { fetchData } from "./unit3";

describe("fetchData function", () => {
  it("should resolve with the correct data when the async operation is successful", async () => {
    const expectedData = { name: "John", age: 30 };
    const data = await fetchData();
    expect(data).toEqual(expectedData);
  });

  it("should reject the Promise with an error when encountering an error", async () => {
    const errorMessage = "Error fetching data";
    const fetchDataWithError = () => {
      return new Promise((resolve, reject) => {
        // Simulate an error scenario
        setTimeout(() => {
          reject(new Error(errorMessage));
        }, 1000); // Simulate a 1-second delay
      });
    };

    // Test for rejection and error message
    await expect(fetchDataWithError()).rejects.toThrow(errorMessage);
  });
});
