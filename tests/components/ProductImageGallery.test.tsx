import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should render nothing when array is empty", () => {
    const imageUrls: string[] = [];
    // Conatiner is like the conatiner for the jsx, when the imageUrl is empty, the function returns null which means nor jsx or image list, we destructure container to check nif its empty dom
    const { container } = render(<ProductImageGallery imageUrls={imageUrls} />);
    expect(container).toBeEmptyDOMElement();
  });
  it("should render  a list of image urls", () => {
    const imageUrls: string[] = [
      "image1.com",
      "image2.com",
      "image3.com",
      "image4.com",
    ];

    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(4);
    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
