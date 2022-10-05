import React from "react";

export const Search = ({ getData }) => (
  <>
    <h2 data-test-id="headline">My Search Component</h2>
    {getData().map((e) => (
      <p>{e}</p>
    ))}
  </>
);
