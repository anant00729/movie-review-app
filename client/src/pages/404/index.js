import React from "react";
import Page404 from "../../images/warning.svg";

export default function PageNotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <img
        src={Page404}
        alt="Page404"
        style={{
          width: "150px",
          marginTop: "32px",
          height: "150px",
        }}
      />
      <h3
        style={{
          marginTop: "16px",
        }}
      >
        Page Not Found
      </h3>
    </div>
  );
}
