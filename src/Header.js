import React from "react";
import Search from "./Search";

export default function Header() {
  function changeTheme(){
    alert("black")
  }

  return (
    <div className="header">
        <div className="container">
            <button className="btn btn-dark btn-sm" onClick={changeTheme}>Change theme</button>
            <Search />
      </div>
    </div>
  );
}
