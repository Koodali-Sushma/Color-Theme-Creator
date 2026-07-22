import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [inputEntries, setInputEntries] = useState(initialColors);

  function handleAddTheme(newTheme) {
    setInputEntries([
      {
        id: nanoid(),
        ...newTheme,
      },
      ...inputEntries,
    ]);
  }
  console.log("inputEntries", inputEntries);
  return (
    <>
      <div className="split-container">
        {/* Left Independent Panel */}
        <section className="panel panel-left">
          <h1 className="rainbow-text">Theme List</h1>
          <ul className="color-List">
            {inputEntries.map((color) => (
              <li key={color.id}>
                <Color color={color} />
              </li>
            ))}
          </ul>
        </section>
        {/* Right Independent Panel */}
        <section className="panel panel-right">
          <h1>Theme Creator</h1>
          <ColorForm onAddTheme={handleAddTheme} />
        </section>
      </div>
    </>
  );
}

export default App;
