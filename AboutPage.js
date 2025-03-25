import React from 'react'; // Import React to use JSX
import { Container } from 'react-bootstrap'; // Import Bootstrap Container

function AboutPage() {
  return (
    <Container>
      <h1>About Us</h1> {/* Display title for About page */}
      <p>This is a demo project for the final coding assignment.</p> {/* A simple paragraph about the project */}
    </Container>
  );
}

export default AboutPage; // Export AboutPage component for routing in App.js
