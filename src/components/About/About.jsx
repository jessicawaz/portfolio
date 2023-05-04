import { Button, Card } from "react-bootstrap";

import styles from "./About.module.scss";

const About = () => {
  return (
    <div className="projects">
      <h1>About Me.</h1>

      <Card className={styles.aboutCard}>
        <Card.Body>
          <Card.Text>desc</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
