import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { changeLanguage } from '../../actions/lang';
import { toggleMobileMenu } from '../../actions/settings';

const Navbar = ({
  auth: { isAuthenticated, loading },
  lang: { lang },
  settings: { mobileMenuDisplay },
  logout,
  changeLanguage,
  toggleMobileMenu,
}) => {
  const changeLanguageHandle = (newLang) => async (dispatch) => {
    if (lang !== newLang) {
      localStorage.lang = newLang;
      changeLanguage(newLang);
    }
  };

  const toggleMobileMenuHandle = (disp) => {
    toggleMobileMenu(disp);
  };

  const openMobileMenu = (e) => {
    let disp = mobileMenuDisplay;

    if (disp === 'mobileMenuHide') {
      disp = 'mobileMenuShow';
    } else {
      disp = 'mobileMenuHide';
    }

    toggleMobileMenuHandle(disp);
  };

  const closeMobileMenu = (e) => {
    document.getElementById('navbar-mobile').style.display = 'none';
  };

  const authLinks = (
    <Fragment>
      <li className="nav-item">
        <a className="nav-link" href="/">
          {lang === 'rus' ? 'Главная' : 'Home'}
        </a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/profiles">
          {lang === 'rus' ? 'Персонал' : 'Profiles'}
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard">
          {lang === 'rus' ? 'Профиль' : 'Dashboard'}
        </Link>
      </li>
      <li className="nav-item mr-4">
        <a className="nav-link" onClick={logout} href="/">
          {lang === 'rus' ? 'Выйти' : 'Logout'}
        </a>
      </li>
      <li className="nav-item-lang-rus ml-1">
        <div className="nav-link" onClick={changeLanguageHandle('rus')}>
          Ru
        </div>
      </li>
      <li className="nav-item-lang-dash no-mobile">
        <div className="nav-link">/</div>
      </li>
      <li className="nav-item-lang-eng">
        <div className="nav-link" onClick={changeLanguageHandle('eng')}>
          Eng
        </div>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <a className="nav-link" href="/">
          {lang === 'rus' ? 'Главная' : 'Home'}
        </a>
      </li>
      {/*
      <li className="nav-item">
        <Link className="nav-link" to="/">
          {lang === 'rus' ? 'Туры' : 'Tours'}
        </Link>
      </li>
      */}
      <li className="nav-item">
        <Link className="nav-link" to="/profiles">
          {lang === 'rus' ? 'Персонал' : 'Profiles'}
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/register">
          {lang === 'rus' ? 'Регистрация' : 'Register'}
        </a>
      </li>
      <li className="nav-item mr-4">
        <a className="nav-link" href="/login">
          {lang === 'rus' ? 'Войти' : 'Login'}
        </a>
      </li>
      <li className="nav-item-lang-rus ml-1">
        <div className="nav-link" onClick={changeLanguageHandle('rus')}>
          Ru
        </div>
      </li>
      <li className="nav-item-lang-dash no-mobile">
        <div className="nav-link">/</div>
      </li>
      <li className="nav-item-lang-eng">
        <div className="nav-link" onClick={changeLanguageHandle('eng')}>
          Eng
        </div>
      </li>
    </Fragment>
  );

  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark text-uppercase mb-0"
        id="main-navbar"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            {lang === 'rus' ? 'Гиды Камчатки' : 'Kamchatka Guides'}
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse bg-dark"
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <nav
        id="navbar-mobile"
        className=" navbar-expand-sm navbar-dark bg-dark text-uppercase mb-0"
      >
        <div className="container">
          <div className={mobileMenuDisplay}>
            <ul className="navbar-nav" onClick={(e) => closeMobileMenu(e)}>
              {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  toggleMobileMenu: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  lang: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  lang: state.lang,
  settings: state.settings,
});

export default connect(mapStateToProps, {
  logout,
  changeLanguage,
  toggleMobileMenu,
})(Navbar);
