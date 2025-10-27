import React from "react";
import ReactDOM from "react-dom/client";
import Exercise from "./Exercise.jsx";  // ← Auto-import ini
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Exercise />  {/* ← Ganti dari <App /> */}
  </React.StrictMode>
);