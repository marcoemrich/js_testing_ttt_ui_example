import React from "react";

export const Player = ({ label, name, onChange }) => (
  <div>
    <b>{label}</b>:{" "}
    <input value={name.toUpperCase()} onChange={onChange} data-testid="player"></input>
  </div>
);
