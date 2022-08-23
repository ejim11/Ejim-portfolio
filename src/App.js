import React, { useRef } from "react";
import "./App.scss";
import Layout from "./Components/Layout/Layout";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

function App() {
  const tawkMessengerRef = useRef();
  return (
    <>
      <Layout />
      <TawkMessengerReact
        propertyId="6304ea8b37898912e964ae66"
        widgetId="1gb5j8d4u"
        ref={tawkMessengerRef}
      />
    </>
  );
}

export default App;
