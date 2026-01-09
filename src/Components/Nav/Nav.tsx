import { useState } from "react";
import "./nav.css";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="Navbar">
        <div className="logo_con">
          <div className="logo">
            <span className="material-symbols-outlined">terminal</span>
          </div>
          <span>
            Mahmoud<span className="brand-dot">.</span>
          </span>
        </div>
        <nav>
          <a>Body</a>
          <a>Work</a>
          <a>Stack</a>
        </nav>
        <div className="resume">
          <span>Resume</span>
          <span className="material-symbols-outlined">download</span>
        </div>

        <div onClick={() => setIsOpen(!isOpen)} className="logo menu-icon">
          {isOpen ? (
            <span className="material-symbols-outlined">close</span>
          ) : (
            <span className="material-symbols-outlined icon">menu_open</span>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-link">
            <span className="material-symbols-outlined">grid_view</span>
            <a href="#">Body</a>
          </div>
          <div className="mobile-menu-link">
            <span className="material-symbols-outlined">person_search</span>
            <a href="#">Work</a>
          </div>
          <div className="mobile-menu-link">
            <span className="material-symbols-outlined">database</span>
            <a href="#">Stack</a>
          </div>
          <div className="mobile-menu-link">
            <span className="material-symbols-outlined">
              download_for_offline
            </span>
            <a href="#contact">Resume</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
