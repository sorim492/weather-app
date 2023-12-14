import React from "react";


export default function Header() {


  function changeTheme(){
    alert("black");
    
    
  }

  return (
    <div className="header">
        <div className="container">
            <button className="btn btn-dark btn-sm" onClick={changeTheme}>Change theme</button>
      </div>
    </div>
  );
}
