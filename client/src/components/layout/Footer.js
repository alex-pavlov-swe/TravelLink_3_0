import React from 'react';
import { connect } from 'react-redux';

function Footer({ lang: { lang } }) {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  return (
    <footer className="footer bg-dark text-center fixed-bottom">
      <p>
        {' '}
        {lang === 'rus'
          ? 'Гиды Камчатки - социальная сеть для туриндустрии Камчатки'
          : 'Kamchatka Guides - a social network for the travel industry in Kamchatka'}
      </p>
      {/*<p>Kamchatka Guides, {year}</p>*/}
    </footer>
  );
}

const mapStateToProps = (state) => ({
  lang: state.lang,
});

export default connect(mapStateToProps)(Footer);
