import { Button, Card } from "react-bootstrap";

import styles from "src/components/projects/projects.module.scss";
import runner from "src/icons/runner.png";
import toast from "src/icons/toast.png";
import me from "src/icons/meagain.png";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects.</h1>

      {projects.map(({ image, link, title, desc, buttonText }) => (
        <Card className={styles.projectCard}>
          <Card.Img src={image} alt={title} />

          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
            <Button type="link" href={link} target="_blank">
              { buttonText || "Source Code"}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

const projects = [
  {
    image: runner,
    link: "https://x.com/PredsNHL/status/1891594787725123593",
    buttonText: "Watch Gameplay",
    title: "Runner Game",
    desc: "Game built with the Phaser framework. Click to watch the Nashville Predators play!",
  },
  {
    image: toast,
    link: "https://github.com/jessicawaz/BYOToast",
    title: "BYO Toast",
    desc: "Website built with React and Bulma.",
  },
  {
    image: me,
    link: "https://github.com/jessicawaz/portfolio",
    title: "This Portfolio",
    desc: "Portfolio built with React and React-Bootstrap.",
  },
];

export default Projects;
