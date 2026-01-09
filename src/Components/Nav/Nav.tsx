import "./nav.css";
const Nav = () => {
  return (
    <>
      <div className="Navbar">
        <div className="logo_con">
          <div className="logo">
            <span className="material-symbols-outlined icon">terminal</span>
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
        <div className="resume"><span>Resume</span><span className="material-symbols-outlined">download</span></div>
      </div>
    </>
  );
};

export default Nav;
