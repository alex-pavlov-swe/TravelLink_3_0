import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLanguage } from '../../actions/lang';

function Home({ lang: { lang }, changeLanguage }) {
  useEffect(() => {
    if (localStorage.lang) {
      if (localStorage.lang !== lang) {
        changeLanguage(localStorage.lang);
      }
    }
  });
  return (
    <div className="row home align-top" id="home-page">
      <div className="col-sm-12 text-center align-self-center">
        <header className="app_header">
          <h1>
            {lang === 'rus'
              ? 'TravelLink - социальная сеть для туриндустрии Камчатки'
              : 'TravelLink - a social network for the travel industry in Kamchatka'}
          </h1>
        </header>
        <ul className="main_page_choice_buttons m-4">
          {/*
          <li>
            <Link className="btn btn-info btn-home" to="">
              {lang === 'rus' ? 'Найти туры' : 'Find tours'}
            </Link>
          </li>
          */}
          <li>
            <Link className="btn btn-info btn-home" to="/profiles">
              {lang === 'rus' ? 'Найти персонал' : 'Find staff'}
            </Link>
          </li>
          <li>
            <Link className="btn btn-info btn-home" to="/dashboard">
              {lang === 'rus' ? 'Найти работу' : 'Find jobs'}
            </Link>
          </li>
          {/*
          <li>
            <Link className="btn btn-info btn-home" to="/dashboard">
              {lang === 'rus' ? ' Добавить туры' : 'Add tours'}
            </Link>
          </li>
          */}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  lang: state.lang,
});

export default connect(mapStateToProps, { changeLanguage })(Home);
