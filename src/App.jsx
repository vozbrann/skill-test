import React, {useEffect} from 'react';
import AppBar from './components/AppBar';
import Main from './components/main/Main';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';

import {getUserInfo} from './store/actions/userActions';

import {useDispatch, useSelector} from 'react-redux';
import Catalog from './components/catalog/Catalog';
import Profile from './components/profile/Profile';

function GusetLinks() {
  return (
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/catalog" component={Catalog}/>
      <Route exact path="/signUp" component={SignUp}/>
      <Route exact path="/login" component={Login}/>
      <Route path="*" render={() => <Redirect to="/"/>}/>
    </Switch>
  )
}

function UserLinks() {
  return (
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/catalog" component={Catalog}/>
      <Route exact path="/profile" component={Profile}/>
      <Route path="*" render={() => <Redirect to="/"/>}/>
    </Switch>
  )
}

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const userInfoLoading = useSelector(state => state.user.userInfoLoading);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  return (
    <Router>
      <div className="App">
        <AppBar/>
        {user || userInfoLoading ? <UserLinks/> : <GusetLinks/>}
      </div>
    </Router>
  );
}

export default App;
