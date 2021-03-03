import './App.scss';
import Main from 'pages/main';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
