// App.js
import React from "react";
import { ThemeProvider } from "./components/ThemeContext";
import Content from "./components/Content";

const App = () => {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
};

export default App;
