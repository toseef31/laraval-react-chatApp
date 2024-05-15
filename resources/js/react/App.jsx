import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            {/* <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
