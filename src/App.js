import React from "react";

import AnimatedTitle, { TitleInputWithState } from "./lib";
import Form from "./Form";

const App = () => {
  return (
    <div className="App">
      <h2>Title</h2>
      <AnimatedTitle>Lettero1</AnimatedTitle>
      <AnimatedTitle animationType="lettero2">Lettero2</AnimatedTitle>
      <AnimatedTitle animationType="lettero3">Lettero3</AnimatedTitle>
      <AnimatedTitle animationType="lettero4">Lettero4</AnimatedTitle>
      <AnimatedTitle animationType="lettero5">Lettero5</AnimatedTitle>
      <h2>Input</h2>
      <TitleInputWithState>Lettero1</TitleInputWithState>
      <TitleInputWithState animationType="lettero2">
        Lettero2
      </TitleInputWithState>
      <TitleInputWithState animationType="lettero3">
        Lettero3
      </TitleInputWithState>
      <Form />
    </div>
  );
};

export default App;
