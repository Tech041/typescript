import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import UserAccount, { User } from "../../src/components/UserAccount";

describe("UserAccount", () => {
  it("should render appropriate heading when mounted", () => {
    const user: User = { id: 1, name: "Chinwuba", isAdmin: true };
    render(<UserAccount user={user} />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/User Profile/i);
  });
  it("should show name when name is provided", () => {
    const user: User = { id: 1, name: "Chinwuba", isAdmin: true };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
    expect(screen.getByText(user.name)).toHaveTextContent(/Chinwuba/i);
  });
  it("should render button with text content when  is  admin", () => {
    const user: User = { id: 1, name: "Chinwuba", isAdmin: true };

    render(<UserAccount user={user} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });
  it("should not render button with text content when  is not admin", () => {
    const user: User = { id: 1, name: "Chinwuba", };

    render(<UserAccount user={user} />);
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
    
  });
});
