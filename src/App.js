import React from "react";

import AnimatedTitle, { AnimatedInputWithState } from "./lib";
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
      <AnimatedInputWithState>Lettero1</AnimatedInputWithState>
      <AnimatedInputWithState animationType="lettero2">
        Lettero2
      </AnimatedInputWithState>
      <AnimatedInputWithState animationType="lettero3">
        Lettero3
      </AnimatedInputWithState>
      <Form />
    </div>
  );
};

export default App;
