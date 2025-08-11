import { Card } from "react-bootstrap";

import styles from "src/components/testimonials/testimonials.module.scss";

const Testimonials = () => {
  return (
    <div>
      <h1>Testimonials.</h1>

      {testimonials.map(({ copy }) => (
        <Card className={styles.testimonialCard}>
          <Card.Body>
            <Card.Text>{copy}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

const testimonials = [
  {
    copy: "You're so great!! Thank you @Jess!",
  },
  {
    copy: "OMG AMAZINGGGGGG. Thank you so much @Jess",
  },
  {
    copy: "yay!!! thank you jess!!!",
  },
  {
    copy: "THIS MANAGE USERS FUNCTION IS AMAZINGGGGGG. Thank you @Jess!!!!!",
  },
];

export default Testimonials;
