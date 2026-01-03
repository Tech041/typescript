import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import UserList from "../../src/components/UserList";
import { User } from "../../src/components/UserAccount";

describe("UserList", () => {
  it("should render no user when user array is empty", () => {
    render(<UserList users={[]} />);
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toHaveTextContent(/No users/i);
    expect(screen.getByText(/No user/i)).toBeInTheDocument();
  });
  it("should not render  paragraph with no  users text when user array is not empty", () => {
    const users: User[] = [
      { id: 2, name: "Mosh", isAdmin: true },
      { id: 4, name: "Nelson", isAdmin: false },
      { id: 7, name: "Uche", isAdmin: false },
    ];
    render(<UserList users={users} />);
    const paragraph = screen.queryByRole("paragraph");
    expect(paragraph).not.toBeInTheDocument();
  });
  it("should render  a  list of users ", () => {
    const users: User[] = [
      { id: 2, name: "Mosh", isAdmin: true },
      { id: 4, name: "Nelson", isAdmin: false },
      { id: 7, name: "Uche", isAdmin: false },
    ];

    render(<UserList users={users} />);
    users.forEach(user=>{
     const link =  screen.getByRole('link',{name:user.name});
     expect(link).toBeInTheDocument();
     expect(link).toHaveAttribute('href',`/users/${user.id}`)
    })
  });
});
