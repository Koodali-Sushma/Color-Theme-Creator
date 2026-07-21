import "./Color.css";

export default function Color({ color }) {
  return (
    <article>
      <div
        className="color-card"
        style={{ background: color.hexValue, color: color.contrastText }}
      >
        <h3 className="color-headline">Role: {color.role}</h3>
        hex-Value:<span className="colorcard__hexValue">{color.hexValue}</span>
        <br />
        Contrast-Text:
        <span className="colorcard__contrastText">{color.contrastText}</span>
      </div>
      <br />
    </article>
  );
}
