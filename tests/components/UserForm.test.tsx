import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import UserForm from "../../src/components/UserForm";
import '@testing-library/jest-dom/vitest';

describe("UserForm with userEvent", () => {
  it("submits form and shows success message", async () => {
    const mockApi = vi.fn().mockResolvedValue({ message: "Success!" });

    render(<UserForm onSubmit={mockApi} />);

    await userEvent.type(screen.getByLabelText(/name/i), "John Doe");
    await userEvent.type(screen.getByLabelText(/email/i), "john@example.com");

    await userEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(screen.getByTestId("status")).toHaveTextContent(/Success/i);
    });

    expect(mockApi).toHaveBeenCalledWith({
      name: "John Doe",
      email: "john@example.com",
    });
  });

  it("shows error message when API fails", async () => {
    const mockApi = vi.fn().mockRejectedValue(new Error("API Error"));

    render(<UserForm onSubmit={mockApi} />);

    await userEvent.type(screen.getByLabelText(/name/i), "Jane Doe");
    await userEvent.type(screen.getByLabelText(/email/i), "jane@example.com");

    await userEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(screen.getByTestId("status")).toHaveTextContent(/error/i);
    });
  });
});