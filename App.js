import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import Home from "./src/pages";


const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,

  },
};

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <Home/>
    </NativeBaseProvider>
  );
}