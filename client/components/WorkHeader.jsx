import React from 'react'

import '../sass/styles.scss'

export default class WorkHeader extends React.Component {

  render() {
    return (
      <div className='header'>
        <div className='title'>Heres all the stuff I do</div>
        <div className='description'>Heres the description of all the stuff I do</div>
      </div>
    );
  }
}
