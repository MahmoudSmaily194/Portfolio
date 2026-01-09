import "./hero.css";
import mahmoud from "../../assets/mahmoud.jpeg";
import { motion } from "framer-motion";

const titleContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const titleWord = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-container">
        {/* Left Column */}
        <div className="hero-left">
          <div className="hero-text">
            {/* Title */}
            <motion.h1
              className="hero-title"
              variants={titleContainer}
              initial="hidden"
              animate="show"
            >
              {"I'm Mahmoud".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={titleWord}
                  style={{ marginRight: "8px", display: "inline-block" }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                className="gradient-text"
                variants={titleWord}
                style={{ display: "inline-block" }}
              >
                Web Developer.
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="hero-subtitle"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Junior Full-Stack Developer building robust web applications from
              database to UI. Working with React on the frontend and ASP.NET
              Core & PHP on the backend. Familiar with designing REST APIs,
              authentication basics, and working with PostgreSQL & MySQL in real
              projects
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="cta-buttons"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <button className="btn btn-primary">
              <span className="btn-text">View Projects</span>
              <span className="material-symbols-outlined btn-icon">
                arrow_forward
              </span>
            </button>

            <button className="btn btn-glass">
              <span className="material-symbols-outlined btn-icon mail">
                mail
              </span>
              <span className="btn-text">Contact Me</span>
            </button>
          </motion.div>

          {/* Tech Stack */}
          <div className="teck-con">
            <motion.div
              className="teck-title"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <span>Teck Stack:</span>
            </motion.div>
            <motion.div
              className="hero-tech"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="tech-item">
                <i className="devicon-html5-plain colored"></i>
                <span>HTML</span>
              </div>
              <div className="tech-item">
                <i className="devicon-css3-plain colored"></i>
                <span>CSS</span>
              </div>
              <div className="tech-item">
                <i className="devicon-typescript-plain colored"></i>
                <span>TypeScript</span>
              </div>
              <div className="tech-item">
                <i className="devicon-react-original colored"></i>
                <span>React</span>
              </div>
              <div className="tech-item">
                <i className="devicon-php-plain colored"></i>
                <span>PHP</span>
              </div>
              <div className="tech-item">
                <i className="devicon-dotnetcore-plain colored"></i>
                <span>ASP.NET Core</span>
              </div>
              <div className="tech-item">
                <i className="devicon-postgresql-plain colored"></i>
                <span>PostgreSQL</span>
              </div>
              <div className="tech-item">
                <i className="devicon-mysql-plain colored"></i>
                <span>MySQL</span>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Right Column */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <div className="hero-image">
              <img src={mahmoud} alt="Mahmoud portrait" />
              <div className="hero-image-overlay"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
