import { Activity, useState, useEffect } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Hero from "./pages/hero/Hero";
import SplashScreen from "./Components/Nav/splashScreen/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide splash after 2 seconds
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Splash screen is visible when loading */}
      <Activity mode={loading ? "visible" : "hidden"}>
        <SplashScreen />
      </Activity>

      {/* Main app is hidden while loading */}
      <Activity mode={loading ? "hidden" : "visible"}>
        <Nav />
        <Hero />
      </Activity>
    </>
  );
}

export default App;
