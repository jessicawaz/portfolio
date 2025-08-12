import { Card } from "react-bootstrap";

import styles from "src/components/testimonials/testimonials.module.scss";

const Testimonials = () => {
  return (
    <div>
      <h1>Testimonials.</h1>

      {testimonials.map(({ copy,description }) => (
        <Card className={styles.testimonialCard}>
          <Card.Body>
            <Card.Text>{copy}</Card.Text>
            <Card.Text className={styles.testimonialDescription}>- {description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

const testimonials = [
  {
    copy: "You're so great!! Thank you @Jess!",
    description: "Editing the mobile bracket view to have images appear top/bottom instead of left/right."
  },
  {
    copy: "OMG AMAZINGGGGGG. Thank you so much @Jess",
    description: "Supporting a junior engineer with an upset client surrounding image quality."
  },
  {
    copy: "yay!!! thank you jess!!!",
    description: "Getting a demo custom NHL 'Frozen Frenzy' experience ready to send."

  },
  {
    copy: "THIS MANAGE USERS FUNCTION IS AMAZINGGGGGG. Thank you @Jess!!!!!",
    description: "Sending a product update to team members that included a deactivating users feature."
  },
];

export default Testimonials;
