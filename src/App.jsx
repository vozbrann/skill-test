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
import TestDetails from './components/testDetails/TestDetails';
import Test from './components/test/Test';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const userInfoLoading = useSelector(state => state.user.userInfoLoading);
  const test = useSelector(state => state.test.test);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  return (
    <Router>
      <div className="App">
        <AppBar/>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/catalog" component={Catalog}/>
          <Route exact path="/catalog/:id" component={TestDetails}/>
          {(user || userInfoLoading) && <Route exact path="/profile" component={Profile}/>}
          {/*{user && test && <Route exact path="/test" component={Test}/>}*/}
          <Route exact path="/test" component={Test}/>
          ((!user || userInfoLoading) && <Route exact path="/signUp" component={SignUp}/>}
          {(!user || userInfoLoading) && <Route exact path="/login" component={Login}/>}
          <Route path="*" render={() => <Redirect to="/"/>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
