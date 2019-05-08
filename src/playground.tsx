import React from "react";
import ReactDOM from "react-dom";

import { useVariation, createClient } from "./lib/";

const App = ({ clientId }: { clientId: string }) => {
  const client = createClient(clientId);
  const user = {
    key: "foo@bar.com",
    email: "foo@bar.com"
  };
  const feat1 = useVariation(client, user, "feature-1", false);
  const feat2 = useVariation(client, user, "feature-2", false);
  return (
    <>
      <h1>App</h1>
      {feat1 && <h2>Feat1</h2>}
      {feat2 && <h2>Feat2</h2>}
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
