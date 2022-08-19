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
        propertyId="62f887df54f06e12d88e8553"
        widgetId="1gartncs8"
        ref={tawkMessengerRef}
      />
    </>
  );
}

export default App;
