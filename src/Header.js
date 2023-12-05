import React from "react";
import Search from "./Search";

export default function Header() {
  return (
    <div className="header">
      <button className="btn btn-dark btn-sm">Change theme</button>
      <Search />
    </div>
  );
}
