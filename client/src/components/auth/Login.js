import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

function Login({ login, isAuthenticated }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onSubmit = e => {
    e.preventDefault();
    login({ email, password });
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="row mt-4 mb-2 login-container full-page">
        <div className="col-md-6 offset-md-3 col-sm-12">
          <form className="form" onSubmit={e => onSubmit(e)}>
            <h3>
              <i className="fas fa-user" />
              Log in
            </h3>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                value={password}
                onChange={e => onChange(e)}
                required
                placeholder="Enter your password"
              />
            </div>
            <button className="btn btn-primary mt-1 mb-2" type="submit">
              Submit
            </button>
            <p>
              Don't have an account? <Link to="register">Create one</Link> to
              submit your profile and start being visible for potential
              employers
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
