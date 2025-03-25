import React from 'react'; // Import React library
import { Container, Form, Button } from 'react-bootstrap'; // Import necessary Bootstrap components

function ContactPage() {
  return (
    <Container>
      <h1>Contact Us</h1> {/* Display title for the contact page */}
      {/* Simple form to collect name and message */}
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
        </Form.Group>

        <Button variant="primary" type="submit"> {/* Submit button */}
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ContactPage; // Export ContactPage component to be used in App.js
