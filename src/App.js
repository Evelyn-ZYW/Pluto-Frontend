import './App.scss';
import FirstScreen from 'pages/FirstScreen';
import Login from 'pages/Login';
import Register from 'pages/Register';
import TutorialPage from 'pages/Tutorial';

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
            <FirstScreen />
          </Route>
          <Route exact path='/Login'>
            <Login />
          </Route>
          <Route exact path='/Register'>
            <Register />
          </Route>
          <Route exact path='/Tutorial'>
            <TutorialPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
