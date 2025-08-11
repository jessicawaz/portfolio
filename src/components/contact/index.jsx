import { Button, Modal, Form } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";

import styles from "src/components/contact/contact.module.scss";

const Contact = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      className={styles.contactModal}
    >
      <Modal.Header closeButton>
        <p>Lets Chat</p>
      </Modal.Header>
      <Modal.Body>
        <Form
          className={styles.contactForm}
          action="https://formsubmit.co/jesswaz24@gmail.com"
          method="POST"
        >
          <Form.Control name="name" type="text" placeholder="Name" required />
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <Form.Control
            name="message"
            as={TextareaAutosize}
            placeholder={"Message"}
            minRows={2}
            maxRows={3}
          />
          <Button type="submit">Send</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Contact;
