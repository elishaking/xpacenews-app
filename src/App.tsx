import React from "react";
import "./App.css";
import { Text, TextType } from "./components/atoms/text";

function App() {
  return (
    <div className="App">
      <Text type={TextType.HEADER}>Hello</Text>
      <Text type={TextType.TITLE}>Hello</Text>
      <Text type={TextType.BODY}>Hello</Text>
    </div>
  );
}

export default App;
