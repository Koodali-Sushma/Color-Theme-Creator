import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm";

/* const intialColors = [
  {
    id: "0",
    hexValue: "#595959",
    role: "Partial-darkMode",
    contrastText: "#00FDFF",
  },
  {
    id: "1",
    hexValue: "#8f1414",
    role: "Partial-darkMode",
    contrastText: "#33ff00b0",
  },
]; */

function App() {
  return (
    <>
      <div className="split-container">
        {/* Left Independent Panel */}
        <section className="panel panel-left">
          <h1 className="rainbow-text">Theme List</h1>
          <ul className="color-List">
            {initialColors.map((color) => (
              <li key={color.id}>
                <Color color={color} />
              </li>
            ))}
          </ul>
        </section>
        {/* Right Independent Panel */}
        <section className="panel panel-right">
          <h1>Theme Creator</h1>
          <ColorForm />
        </section>
      </div>
    </>
  );
}

export default App;
