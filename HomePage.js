import React from 'react'; // Import React library to use JSX
import { Container, Button } from 'react-bootstrap'; // Import Bootstrap components

function HomePage() {
  return (
    <Container> {/* Container is a Bootstrap layout component */}
      <h1>Welcome to the Home Page</h1> {/* Main heading */}
      <Button variant="primary">Click Me</Button> {/* Bootstrap Button component */}
    </Container>
  );
}

export default HomePage; // Export the HomePage component to be used in App.js
