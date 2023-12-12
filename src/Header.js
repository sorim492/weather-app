import React from "react";
import Weather from "./Weather";

export default function Header() {
  function changeTheme(){
    alert("black")
  }

  return (
    <div className="header">
        <div className="container">
            <button className="btn btn-dark btn-sm" onClick={changeTheme}>Change theme</button>
            <Weather />
      </div>
    </div>
  );
}
