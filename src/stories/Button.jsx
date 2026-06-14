import React from "react";

// Kleine Demo-Komponente für Storybook (ersetzt die alte SB-Default-Boilerplate).
export const Button = ({ primary = false, label, onClick }) => {
  const mode = primary ? "demo-btn--primary" : "demo-btn--secondary";
  return (
    <button type="button" className={`demo-btn ${mode}`} onClick={onClick}>
      {label}
    </button>
  );
};
