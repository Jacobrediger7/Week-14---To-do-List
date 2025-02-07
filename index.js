// 1. Import React library, which is necessary for using JSX and React features
import React from 'react';

// 2. Import ReactDOM library, which provides the method to render the app in the browser
import ReactDOM from 'react-dom';

// 3. Import the App component from the components folder, which will be the root component of our app
import App from './components/App';

// 4. Render the App component inside the HTML element with the id 'root'
// ReactDOM.render() takes the component <App /> and inserts it into the DOM at the element with id 'root'
ReactDOM.render(<App />, document.getElementById('root'));
