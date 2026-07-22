import "./ColorForm.css";

export default function ColorForm() {
  return (
    <form className="theme-creator-form">
      <fieldset>
        <legend>Create your own theme</legend>
        <label htmlFor="role">Role:</label>
        <input type="text" id="role" name="role" />
        <br />
        <label htmlFor="hexValue">Hex Value:</label>
        <input type="color" id="hexValue" name="hexValue" />
        <br />
        <label htmlFor="contrastText">Contrast Text:</label>
        <input type="color" id="contrastText" name="contrastText" />
        <br />
        <button type="submit">Add</button>
      </fieldset>
    </form>
  );
}
