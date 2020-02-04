import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import EditProfile from './components/profile-forms/EditProfile';
import CreateProfile from './components/profile-forms/CreateProfile';
import CreateCompany from './components/profile-forms/CreateCompany';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Review from './components/reviews/Review';
import PrivateRoute from './components/routing/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store';

import { loadUser } from './actions/auth';

function App() {
  useEffect(() => {
    localStorage.token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUzNGQyZGUwMjRmY2U0ZDkyMWJmMTc2In0sImlhdCI6MTU4MDUyOTc0MiwiZXhwIjoxNTgwODg5NzQyfQ.MrqvQFhZcJ82iMJ0ArH23h29ex771qHbCxotUmaigNM';
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Alert />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/profile/review/:id" component={Review} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/edit_profile" component={EditProfile} />
          <PrivateRoute
            exact
            path="/create_profile"
            component={CreateProfile}
          />
          <PrivateRoute
            exact
            path="/create_company"
            component={CreateCompany}
          />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
