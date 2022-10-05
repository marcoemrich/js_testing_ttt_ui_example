import React from "react";
import { Search } from "./Search";

const getData = () => [1, 2, 3, 4];

export const Main = () => (
  <>
    <h1>Foo2</h1>
    <Search getData={getData} />
  </>
);
