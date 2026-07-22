import "./Color.css";
import { useState } from "react";

export default function Color({ color, onDeleteColor }) {
  const [isConfirming, setIsConfirming] = useState(false);

  function handleDeleteClick() {
    setIsConfirming(true);
  }

  function handleCancelDelete() {
    setIsConfirming(false);
  }

  function handleConfirmDelete() {
    onDeleteColor(color.id);
  }
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
        <br />
        {/* Conditional rendering for delete confirmation */}
        {isConfirming ? (
          <div className="color-card-confirm">
            <p className="color-card-highlight">Are you sure?</p>
            <button
              type="button"
              className="color-card-button color-card-button--cancel"
              onClick={handleCancelDelete}
            >
              CANCEL
            </button>
            <button
              type="button"
              className="color-card-button color-card-button--delete"
              onClick={handleConfirmDelete}
            >
              CONFIRM DELETE
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="color-card-button"
            onClick={handleDeleteClick}
          >
            DELETE
          </button>
        )}
      </div>
      <br />
    </article>
  );
}
