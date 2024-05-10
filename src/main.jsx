import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const firebaseConfig = {
  apiKey: "AIzaSyAhXOz3WEiIDi8Hr-j0MT6CnX62j-JGlGY",
  authDomain: "email-chatting-47864.firebaseapp.com",
  projectId: "email-chatting-47864",
  storageBucket: "email-chatting-47864.appspot.com",
  messagingSenderId: "1026247677437",
  appId: "1:1026247677437:web:c6775e0a19198bee9df594",
  measurementId: "G-TGGZD2RPD9"
};

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
