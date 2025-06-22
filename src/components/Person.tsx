import React, { useState } from "react";

const Person = () => {
  const [input, setInput] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <div className="">
        <h1 className="">Person Biography</h1>
      </div>

      <p className="">My name is {!input ? "No bio avaliable" : input}</p>
      <div className="">
        <input type="text" onChange={handleChange} />
      </div>
    </div>
  );
};

export default Person;
