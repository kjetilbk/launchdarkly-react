import React from "react";
import ReactDOM from "react-dom";

import { useVariation } from "./lib/";

const App = ({ clientId }: { clientId: string }) => {
  const user = {
    key: "foo@bar.com",
    email: "foo@bar.com"
  };
  const sub = useVariation(clientId, user, "test", false);
  return (
    <>
      <h1>App</h1>
      {sub && <h2>Subtitle</h2>}
    </>
  );
};
if (process.env.CLIENT_ID) {
  ReactDOM.render(
    <App clientId={process.env.CLIENT_ID} />,
    document.getElementById("root")
  );
} else {
  console.log("Please provide the CLIENT_ID environment variable.");
}
