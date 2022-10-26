import React from "react";
import MicroFrontend from "./microfrontend";

const {
  REACT_APP_EMOJI_HOST: emojiHost,
  REACT_APP_ANIMAL_HOST: animalHost,
  REACT_APP_TTT_HOST: tttHost,
} = process.env;

function App() {
  return (
    <>
      <MicroFrontend host={emojiHost} name="Emoji" />
      <MicroFrontend host={animalHost} name="Animal" />
      <MicroFrontend host={tttHost} name="Tic-Tac-Toe" />
      <div id="root2"></div>
      <div id="root3"></div>
      <div id="root1"></div>
  
    </>
  );
}

export default App;
