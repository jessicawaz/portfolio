import { useState } from "react";
import { Button } from "react-bootstrap";

import { ReactComponent as Node } from "../../icons/node.svg";
import { ReactComponent as Next } from "../../icons/next.svg";
import { ReactComponent as Reactjs } from "../../icons/react.svg";
import { ReactComponent as JavaScript } from "../../icons/js.svg";
import { ReactComponent as Linkedin } from "../../icons/linkedin.svg";
import { ReactComponent as Github } from "../../icons/github.svg";
import { ReactComponent as File } from "../../icons/file.svg";
import styles from "./Home.module.scss";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import About from "../About/About";

const socialIcons = [
  {
    title: "LinkedIn",
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/jessica-wazbinski/",
  },
  {
    title: "GitHub",
    icon: <Github />,
    link: "https://github.com/jessicawaz",
  },
  {
    title: "Resume",
    icon: <File />,
    link: "https://drive.google.com/file/d/1eRjiQjvQq8oCV97Otwpiwpg5_G7Zx2WC/view?usp=sharing",
  },
];

const stackIcons = [
  {
    title: "Node",
    icon: <Node />,
    link: "https://nodejs.org/",
  },
  {
    title: "Next",
    icon: <Next />,
    link: "https://nextjs.org/",
  },
  {
    title: "React",
    icon: <Reactjs />,
    link: "https://react.dev/",
  },
  {
    title: "JavaScript",
    icon: <JavaScript />,
    link: "https://www.javascript.com/",
  },
];

const Home = () => {
  const [contactModal, setContactModal] = useState(false);

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.navWrapper}>
        <div className={styles.socialIconWrapper}>
          {socialIcons.map(({ icon, title, link }) => (
            <div key={title} className={styles.icon}>
              <a target="_blank" href={link}>
                {icon}
              </a>
            </div>
          ))}
        </div>
        <Button onClick={() => setContactModal(true)}>Lets Chat</Button>
      </div>

      <div className={styles.headerWrapper}>
        <div className={styles.header}>Jess Wazbinski</div>
        <div className={styles.subheader}>Software Engineer</div>

        <div className={styles.stackIconWrapper}>
          {stackIcons.map(({ icon, title, link }) => (
            <div key={title} className={styles.icon}>
              <a target="_blank" href={link}>
                {icon}
                <p>{title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      {contactModal && (
        <Contact show={contactModal} onHide={() => setContactModal(false)} />
      )}

      <div className={styles.scrollWrapper}>
        <div className={styles.aboutWrapper}></div>
        <div className={styles.projectsWrapper}>
          <About />
          <Projects />
        </div>
      </div>

      <div className={styles.scrollText}>Scroll To View More</div>
    </div>
  );
};

export default Home;
