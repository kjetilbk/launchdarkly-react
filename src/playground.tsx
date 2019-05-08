import React from "react";
import ReactDOM from "react-dom";

import { useVariation } from "./lib/";

const CLIENT_ID = "5cca878ff65c62082a9b3378";
console.log("hehe");
const App = () => {
  const sub = useVariation(CLIENT_ID, "user", "feature1", true);
  return (
    <>
      <h1>App</h1>
      {sub && <h2>Subtitle</h2>}
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
