import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  //const [textOfButtonClicked, setTextOfButtonClicked] = useState("");
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

  // Function to UPDATE an existing color by ID
  function handleUpdateColor(updatedColor) {
    setInputEntries((prevEntries) =>
      prevEntries.map((color) =>
        color.id === updatedColor.id ? updatedColor : color,
      ),
    );
  }

  function handleDeleteTheme(colorId) {
    setInputEntries((storedColors) =>
      storedColors.filter((color) => color.id !== colorId),
    );
  }
  return (
    <>
      <div className="split-container">
        {/* Left Independent Panel */}
        <section className="panel panel-left">
          <h1 className="rainbow-text">Theme List</h1>
          {/* Check if there are any colors remaining */}
          {inputEntries.length === 0 ? (
            <p className="empty-state-message">
              No colors left in this theme!
              <br /> Add a new color using the form.
            </p>
          ) : (
            <ul className="color-List">
              {inputEntries.map((color) => (
                <li key={color.id}>
                  <Color
                    color={color}
                    onDeleteColor={handleDeleteTheme}
                    onUpdateColor={handleUpdateColor}
                  />
                </li>
              ))}
            </ul>
          )}
        </section>
        {/* Right Independent Panel */}
        <section className="panel panel-right">
          <h1>Theme Creator</h1>
          <ColorForm onAddTheme={handleAddTheme} buttonText="ADD" />
        </section>
      </div>
    </>
  );
}

export default App;
