import React from "react";

export default function Col({ children, size = 1 }) {
  return <div style={{ flex: size }}>{children}</div>;
}
