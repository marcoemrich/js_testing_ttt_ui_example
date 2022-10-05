import React from "react";

export const Search = ({ getData }) => (
  <>
    <h2 data-testid="headline">My Search Component</h2>
    {getData().map((e) => (
      <p>{e}</p>
    ))}
  </>
);
