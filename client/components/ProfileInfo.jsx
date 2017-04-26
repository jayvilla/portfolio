import React from 'react'
import '../sass/styles.scss'

export default class ProfileInfo extends React.Component {

  render() {
    return (
      <div className='l-col-7 profile-info'>
        <div className='intro'>Hi. Im <strong>Jeff Villarina</strong>.</div>
        <div className='description'>My description will be put into this area right here.</div>
        <button type='button'>Find out more about me</button>
      </div>
    );
  }
}
