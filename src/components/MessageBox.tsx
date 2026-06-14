import React from "react";

type MessageBoxProps = {
  messages?: string[];
};

export const MessageBox = ({ messages = [] }: MessageBoxProps) => (
  <ul id="message-box">
    {messages.map((m, i) => (
      <li key={i}>{m}</li>
    ))}
  </ul>
);
