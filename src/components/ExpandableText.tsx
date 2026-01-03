import React, { useState, type ChangeEvent } from "react";

const ExpandableText: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="">
      <h1>ExpandableText</h1>
      <div>
        <input
          type="text"
          placeholder="Write ..."
          value={input}
          onChange={handleInput}
        />
      </div>

      <p>
        {expanded || input.length <= 10
          ? input
          : `${input.substring(0, 10)}...`}
      </p>

      <div>
        {input.length > 10 && (
          <button onClick={toggleExpand}>
            {expanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ExpandableText;