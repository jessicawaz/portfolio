import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

import { ReactComponent as Node } from "icons/node.svg";
import { ReactComponent as Next } from "icons/next.svg";
import { ReactComponent as Reactjs } from "icons/react.svg";
import { ReactComponent as JavaScript } from "icons/js.svg";
import { ReactComponent as PHP } from "icons/php.svg";
import { ReactComponent as AWS } from "icons/aws.svg";
import { ReactComponent as Linkedin } from "icons/linkedin.svg";
import { ReactComponent as Github } from "icons/github.svg";
import { ReactComponent as File } from "icons/file.svg";
import me from "icons/me.png";
import styles from "components/home/home.module.scss";
import Contact from "components/contact/index";
import Projects from "components/projects/index";
import About from "components/about/index";

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

      <Row className={styles.content}>
        <Col lg={6} xs={12}>
          <div className={styles.headerWrapper}>
            <div className={styles.headerImage}>
              <img alt="Jess Wazbinski" src={me} />
            </div>
            <div className={styles.header}>Jess Wazbinski</div>
            <div className={styles.subheader}>Software Engineer</div>

            <div className={styles.stackIconWrapper}>
              <Row>
                {stackIcons.map(({ icon, title, link }) => (
                  <Col>
                    <div key={title} className={styles.icon}>
                      <a target="_blank" href={link}>
                        {icon}
                        <p>{title}</p>
                      </a>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Col>

        <Col>
          <div className={styles.scrollWrapper}>
            <div className={styles.aboutWrapper}></div>
            <div className={styles.projectsWrapper}>
              <About />
              <Projects />
            </div>
          </div>

          <div className={styles.scrollText}>Scroll To View More</div>
        </Col>
      </Row>

      {contactModal && (
        <Contact show={contactModal} onHide={() => setContactModal(false)} />
      )}
    </div>
  );
};

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
  {
    title: "PHP",
    icon: <PHP />,
    link: "https://www.php.net/",
  },
  {
    title: "AWS",
    icon: <AWS />,
    link: "https://aws.amazon.com/",
  },
];

export default Home;
