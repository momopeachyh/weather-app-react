import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="small-wrapper">
        <div>
          <a
            href="https://github.com/momopeachyh/weather-app-react"
            target="_blank"
            rel="noreferrer"
            className="repository-link"
          >
            Open-source code
          </a>{" "}
          by Heidi Willden
        </div>
      </div>
    </div>
  );
}
