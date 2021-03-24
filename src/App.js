import './App.scss';
import FirstScreen from 'pages/FirstScreen';
import Login from 'pages/Login';
import Register from 'pages/Register';
import TutorialPage from 'pages/Tutorial';
import PostPage from 'pages/Post';
import AddPost from 'pages/AddPost';
import ProfilePage from 'pages/Profile';
import EditProfile from 'pages/EditProfile';
import EditPost from 'pages/EditPost';
import MyPost from 'pages/MyPost';
import EditPP from 'pages/EditPP';
import axios from 'axios';

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
          <Route exact path='/AllPosts'>
            <PostPage />
          </Route>
          <Route exact path='/AddPost'>
            <AddPost />
          </Route>
          <Route exact path='/Profile'>
            <ProfilePage />
          </Route>
          <Route exact path='/EditProfile'>
            <EditProfile />
          </Route>
          <Route exact path='/EditPost'>
            <EditPost />
          </Route>
          <Route exact path='/MyPost'>
            <MyPost />
          </Route>
          <Route exact path='/EditPP'>
            <EditPP />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
