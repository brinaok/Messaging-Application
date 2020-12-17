import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  const Input = () => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        props.onAdd(inputText);
        setInputText("");
        console.log("do validate");
      }
    };

    return (
      <input
        type="text"
        onKeyDown={handleKeyDown}
        value={inputText}
        onChange={handleChange}
      />
    );
  };

  return (
    <div className="form">
      <Input />
    </div>
  );
}

export default InputArea;
