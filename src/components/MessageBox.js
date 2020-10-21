import React from "react";

export const MessageBox = ({ messages = [] }) => (
  <ul id="message-box">
    {messages.map((m, i) => (
      <li key={i}>{m}</li>
    ))}
  </ul>
);
