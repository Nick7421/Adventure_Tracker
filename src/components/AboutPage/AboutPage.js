import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
    <h1>About Adventure Tracker</h1>
    <p>This application was built to store adventures and have the ability to easily recall specific locations</p>
      <p>
        This application was made with the following technologies.
      </p>
      <ul>
        <li>React.js</li>
        <li>Redux</li>
        <li>Redux Sagas</li>
        <li>React Router</li>
      </ul>
    </div>
  </div>
);

export default AboutPage;
