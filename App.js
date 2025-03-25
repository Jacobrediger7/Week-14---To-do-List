import React from 'react'; 
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'; // Import Router components for routing
import CreateUser from './components/CreateUser'; // Import CreateUser component
import UpdateUser from './components/UpdateUser'; // Import UpdateUser component
import DeleteUser from './components/DeleteUser'; // Import DeleteUser component
import HomePage from './pages/HomePage'; // Import HomePage component (if you have this)
import AboutPage from './pages/AboutPage'; // Import AboutPage component (if you have this)

function App() {
  return (
    <Router> {/* Enable routing in the app */}
      <div className="App">
        <h1>CRUD Operations</h1> {/* Title for the app */}
        
        {/* Navigation links to navigate to the CRUD pages */}
        <nav>
          <Link to="/">Home</Link> | {/* Home page */}
          <Link to="/about">About</Link> | {/* About page */}
          <Link to="/create">Create User</Link> | {/* Link to Create User page */}
          <Link to="/update">Update User</Link> | {/* Link to Update User page */}
          <Link to="/delete">Delete User</Link> {/* Link to Delete User page */}
        </nav>
        
        {/* The Switch renders the component corresponding a to the route */}
        <Switch>
          <Route path="/" exact component={HomePage} /> {/* Route for Home page */}
          <Route path="/about" component={AboutPage} /> {/* Route for About page */}
          <Route path="/create" component={CreateUser} /> {/* Route for CreateUser component */}
          <Route path="/update" component={UpdateUser} /> {/* Route for UpdateUser component */}
          <Route path="/delete" component={DeleteUser} /> {/* Route for DeleteUser component */}
        </Switch>
      </div>
    </Router>
  );
}

export default App; // Export App component

