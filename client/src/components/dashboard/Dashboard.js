import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';
import { Link } from 'react-router-dom';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
  lang: { lang }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  if ((loading && profile === null) || user === null) return <Spinner />;

  return (
    <Fragment>
      <div className="row mt-2 mb-2 full-page">
        <div className="col-sm-10 offset-1">
          <span className="mt-4 mb-2">
            <h1>{lang === 'rus' ? 'Панель управления' : 'Dashboard'}</h1>
          </span>
          <p>
            <strong>
              {lang === 'rus' ? 'Добро пожаловать, ' : 'Welcome, '}
              {user.name}!
            </strong>
          </p>
          {profile !== null ? (
            <Fragment>
              <p>
                <img
                  className="img-thumbnail"
                  src={profile.avatar}
                  alt="profileImage"
                  width="200"
                />
              </p>
              <p>Your profession: {profile.profession}</p>
              <p>Age: {profile.age}</p>
              <p>{profile.description}</p>
              <p>
                <strong>Experience: </strong>
                {profile.experience}
              </p>
              <p>Regions that I am familiar with: {profile.regions}</p>
              <p>
                <strong>My education: </strong>
                {profile.education}
              </p>
              <p>
                <strong>Location: </strong>
                {profile.location}
              </p>

              <Link
                className="btn btn-primary mr-2 mt-2 mb-3"
                to="/edit_profile"
              >
                {lang === 'rus' ? 'Редактировать профиль' : 'Update Profile'}
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <p>
                {lang === 'rus'
                  ? 'Вы еще не начали создавать свой профиль.'
                  : 'You have not yet started your profile.'}
              </p>
              <p>
                {lang === 'rus'
                  ? 'Вы можете созать профиль работника - гида, повара, переводчика, волонтера или водителя со своим автомобилем.'
                  : 'Add inforamtion about yourself and contacts, so that travel companies can reach you.'}
              </p>
              <p>
                <Link className="btn btn-primary mt-2" to="/create_profile">
                  {lang === 'rus'
                    ? 'Создать профиль работника'
                    : 'Create Employee Profile'}
                </Link>
              </p>
              <p>
                {lang === 'rus'
                  ? 'Или вы можете созать профиль турфирмы - для публикации и продажи ваших туров.'
                  : 'Or you can create a profile of your travel agency to start posting and selling your tours.'}
              </p>
              <p>
                <Link className="btn btn-primary mt-2" to="/create_company">
                  {lang === 'rus'
                    ? 'Создать профиль турфирмы'
                    : 'Create Company Profile'}
                </Link>
              </p>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  lang: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  lang: state.lang
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
