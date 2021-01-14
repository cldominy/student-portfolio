import React from "react";

export function Container({ fluid, children }) {

  return (
    <div className={`container${fluid ? "-fluid" : ""}`}>
      {children}
    </div>
  );
}

export function Row({ children, classType }) {
  return <div className={`row ` + classType} >{children}</div>;
}

export function Col({ size, children }) {
  return (
    <div
      className={"mt-5 " + size
        .split(" ")
        .map((size) =>  size)
        .join(" ")}
    >
     {children}
    </div>
  );
}
