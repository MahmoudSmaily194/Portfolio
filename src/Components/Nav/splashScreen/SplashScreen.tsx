// SplashScreen.jsx
import { useEffect } from "react";
import "./SplashScreen.css"; // we’ll style it next

const SplashScreen = ({ onFinish }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // tell parent to hide splash
    }, 2000); // show splash for 2 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <div className="splash_logo">
        <span className="material-symbols-outlined">terminal</span>
      </div>
    </div>
  );
};

export default SplashScreen;
