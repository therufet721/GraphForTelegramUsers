import React from "react";
import "./styles.css";
import TelegramGraph from "./components/TelegramGraph/telegramGraph";

const App = () => {
  return (
    <div className="App">
      <h1>Telegram Graph Visualization</h1>
      <TelegramGraph />
    </div>
  );
};

export default App;
