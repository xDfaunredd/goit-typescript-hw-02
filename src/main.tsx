import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App.tsx";
import MyContext from "./assets/context/MyContext/MyContext.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyContext>
      <Toaster position="top-right" />
      <App />
    </MyContext>
  </StrictMode>
);
