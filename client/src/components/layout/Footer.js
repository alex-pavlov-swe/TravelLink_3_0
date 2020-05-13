import React from 'react';
import { connect } from 'react-redux';

function Footer({ lang: { lang } }) {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  return (
    <footer className="footer bg-dark text-center fixed-bottom align-middle">
      <p>
        {' '}
        {lang === 'rus' ? 'Гиды Камчатки, 2020' : 'Kamchatka Guides, 2020'}
      </p>
      {/*<p>Kamchatka Guides, {year}</p>*/}
    </footer>
  );
}

const mapStateToProps = (state) => ({
  lang: state.lang,
});

export default connect(mapStateToProps)(Footer);
