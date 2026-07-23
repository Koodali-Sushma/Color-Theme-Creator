import "./Color.css";
import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";

export default function Color({ color, onDeleteColor, onUpdateColor }) {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  // State to toggle delete confirmation mode

  function handleDeleteClick() {
    setIsConfirming(true);
  }

  function handleCancelDelete() {
    setIsConfirming(false);
  }

  function handleConfirmDelete() {
    onDeleteColor(color.id);
  }

  function handleEditClick() {
    setIsConfirming(false); // Hide delete prompt if edit is clicked
    setIsEditing(true);
  }
  function handleCancelEdit() {
    setIsEditing(false);
  }
  function handleSaveEdit(updatedData) {
    // Keep the existing ID and merge with updated form values
    onUpdateColor({
      id: color.id,
      ...updatedData,
    });
    setIsEditing(false); // Close edit form
  }

  // -------------------------------------------------------------
  // EDIT MODE: Render ColorForm pre-filled with current color data
  // -------------------------------------------------------------
  if (isEditing) {
    return (
      <article className="color-card color-card--editing">
        <ColorForm
          buttonText="UPDATE"
          defaultValue={color}
          onAddTheme={handleSaveEdit}
        />
        <button
          type="button"
          className="color-card-button color-card-button--cancel"
          onClick={handleCancelEdit}
        >
          CANCEL
        </button>
      </article>
    );
  }

  // -------------------------------------------------------------
  // NORMAL DISPLAY MODE
  // -------------------------------------------------------------
  return (
    <article>
      <div
        className="color-card"
        style={{ background: color.hexValue, color: color.contrastText }}
      >
        <h3 className="color-headline">Role: {color.role}</h3>
        hex-Value: <span className="colorcard__hexValue">{color.hexValue}</span>
        <br />
        Contrast-Text:{" "}
        <span className="colorcard__contrastText">{color.contrastText}</span>
        <br />
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
          <div className="color-card-actions">
            <button
              type="button"
              className="color-card-button"
              onClick={handleEditClick}
            >
              EDIT
            </button>
            <button
              type="button"
              className="color-card-button"
              onClick={handleDeleteClick}
            >
              DELETE
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
