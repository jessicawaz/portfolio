import { Card } from "react-bootstrap";

import styles from "components/about/about.module.scss";

const About = () => {
  return (
    <div className="projects">
      <h1>About Me.</h1>

      <Card className={styles.aboutCard}>
        <Card.Body>
          <Card.Text>{aboutMeText}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

const aboutMeText = (
  <div>
    <ul>
      <li>
        Recently got into matcha instead of coffee <br />
        (but still love a coffee - I'm working on my latte art)
      </li>
      <li>
        <em>Extremely</em> excited for football season year-round <br /> (though
        I tend to end up disappointed iykyk)
      </li>
      <li>
        Ask me about my cat <br /> (her name is Cider and I couldn't live
        without her)
      </li>
    </ul>
  </div>
);

export default About;
