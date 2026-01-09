import "./App.css";
import Nav from "./Components/Nav/Nav";
import Hero from "./pages/hero/Hero";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const splash = document.getElementById("splash");
    if (splash) {
      splash.style.transition = "opacity 0.3s ease";
      splash.style.opacity = "0";
      setTimeout(() => splash.remove(), 300);
    }
  }, []);
  return (
    <>
      <Nav />
      <Hero />
    </>
  );
}

export default App;
