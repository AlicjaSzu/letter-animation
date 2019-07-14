import React from "react";
import AnimatedTitle, { TitleInputWithState } from "./lib";

function App() {
  return (
    <div className="App">
      <h2>Title</h2>
      <AnimatedTitle>Lettero1</AnimatedTitle>
      <AnimatedTitle animationType="lettero2">Lettero2</AnimatedTitle>
      <AnimatedTitle animationType="lettero3">Lettero3</AnimatedTitle>
      <AnimatedTitle animationType="lettero4">Lettero4</AnimatedTitle>
      <AnimatedTitle animationType="lettero5">Lettero5</AnimatedTitle>
      <h2>Input</h2>
      <TitleInputWithState title="Lettero1" />
      <TitleInputWithState animationType="lettero2" title="Lettero2" />
      <TitleInputWithState animationType="lettero3" title="Lettero3" />
      <TitleInputWithState animationType="lettero4" title=" Lettero4" />
      <TitleInputWithState animationType="lettero5" title=" Lettero5" />
    </div>
  );
}

export default App;
