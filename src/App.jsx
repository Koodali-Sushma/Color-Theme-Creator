import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

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
      <h1>Theme Creator</h1>
      <ul className="color-List">
        {initialColors.map((color) => (
          <li key={color.id}>
            <Color color={color} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
