import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        This page is{" "}
        <a
          href="https://github.com/sorim492/weather-app.git"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github
        </a>{" "}
        Coded by{" "}
        <a href="https://www.kairosquin.com/" target="_blank" rel="noreferrer">
          Miros Quin
        </a>{" "}
        from{" "}
        <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
          SheCodes
        </a>
      </p>
    </div>
  );
}
