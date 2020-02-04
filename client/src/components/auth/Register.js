import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

function Register({ setAlert, register, isAuthenticated }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onSubmit = async e => {
    e.preventDefault();

    if (password !== password2) {
      setAlert('Passwords do not match', 'danger', 3600);
    } else {
      register({ name, email, password });
    }
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <div className="row mt-2 mb-2 full-page">
        <div className="col-md-6 offset-md-3 col-sm-12">
          <form className="form" onSubmit={e => onSubmit(e)}>
            <h3>
              <i className="fas fa-user" />
              Create Your Account
            </h3>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                value={name}
                onChange={e => onChange(e)}
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
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
                className="form-control"
                type="text"
                name="password"
                value={password}
                onChange={e => onChange(e)}
                required
                minLength="6"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Confirm password</label>
              <input
                className="form-control"
                type="text"
                name="password2"
                value={password2}
                onChange={e => onChange(e)}
                required
                minLength="6"
                placeholder="Repeat your password"
              />
            </div>
            <button className="btn btn-primary mt-1 mb-2" type="submit">
              Register
            </button>
          </form>
          <p>
            Already have an account?
            <Link to="/login"> Sign in</Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
