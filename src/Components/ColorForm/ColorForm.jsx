import "./ColorForm.css";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({
  onAddTheme,
  defaultValue = {
    hexValue: "#595959",
    role: "Partial-darkMode",
    contrastText: "#00FDFF",
  },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newEntry = {
      role: data.role,
      hexValue: data.hexValue,
      contrastText: data.contrastText,
    };
    onAddTheme(newEntry);
  }

  return (
    <form className="theme-creator-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create your own theme</legend>
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={defaultValue.role}
        />
        <br />
        <label htmlFor="hexValue">Hex Value:</label>
        <ColorInput id="hexValue" defaultValue={defaultValue.hexValue} />
        <br />
        <label htmlFor="contrastText">Contrast Text:</label>
        <ColorInput
          id="contrastText"
          defaultValue={defaultValue.contrastText}
        />
        <br />
        <button type="submit">Add</button>
      </fieldset>
    </form>
  );
}
