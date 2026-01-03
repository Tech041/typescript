import React, { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function UserForm({ onSubmit }:{onSubmit:any}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await onSubmit({ name, email });
      setStatus(response.message);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </div>

      <button type="submit">Submit</button>

      {status && <p data-testid="status">{status}</p>}
    </form>
  );
}