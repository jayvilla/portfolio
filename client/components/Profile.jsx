import React from 'react'
import ProfilePicture from './ProfilePicture.jsx'
import ProfileInfo from './ProfileInfo.jsx'
import '../sass/styles.scss'

export default class Profile extends React.Component {

  render() {
    return (
      <div className='l-row profile'>
        <ProfilePicture />
        <ProfileInfo />
      </div>
    );
  }
}