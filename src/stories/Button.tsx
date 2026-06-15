import React from "react";

type ButtonProps = {
  primary?: boolean;
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

// Small demo component for Storybook (replaces the old SB default boilerplate).
export const Button = ({ primary = false, label, onClick }: ButtonProps) => {
  const mode = primary ? "demo-btn--primary" : "demo-btn--secondary";
  return (
    <button type="button" className={`demo-btn ${mode}`} onClick={onClick}>
      {label}
    </button>
  );
};
