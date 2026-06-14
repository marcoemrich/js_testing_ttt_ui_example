import React from "react";

type PlayerProps = {
  label: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const Player = ({ label, name, onChange }: PlayerProps) => (
  <div>
    <b>{label}</b>:{" "}
    <input value={name.toUpperCase()} onChange={onChange} data-testid="player"></input>
  </div>
);
