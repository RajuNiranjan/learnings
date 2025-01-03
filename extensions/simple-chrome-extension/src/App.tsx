import { useState } from "react";

import "./App.css";

function App() {
  const [colour, setColour] = useState("");

  const onClick = async () => {
    const [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript<string[], void>({
      target: { tabId: tab.id! },
      args: [colour],
      func: (colour) => {
        document.body.style.backgroundColor = colour;
      },
    });
  };

  return (
    <>
      <input type="color" onChange={(e) => setColour(e.currentTarget.value)} />
      <button onClick={() => onClick()}>change</button>
    </>
  );
}

export default App;
