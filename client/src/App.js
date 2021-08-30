import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './pages/Home/Homepage';

function App() {
  return (

    <Router>
      <link rel="shortcut icon" href="/palacefavicon.png" />
      <div className="App">
        <Route exact path="/" component={Homepage} />
      </div>
    </Router>
  );
}

export default App;
