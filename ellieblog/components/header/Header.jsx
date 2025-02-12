import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ spacing = "Left", content = [], additional = null }) => {
  // Map spacing options to CSS justify-content values
  const spacingMap = {
    Left: "flex-start",
    Right: "flex-end",
    Center: "center",
    Between: "space-between",
  };

  return (
    <header className="header" style={{ justifyContent: spacingMap[spacing] }}>
      {spacing === "Between" ? (
        <>
          <div className="header-content">{content}</div>
          {additional && <div className="header-additional">{additional}</div>}
        </>
      ) : (
        content
      )}
    </header>
  );
};

export default Header;
