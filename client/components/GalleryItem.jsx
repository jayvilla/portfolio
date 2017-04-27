import React from 'react'

import '../sass/styles.scss'

export default class GalleryItem extends React.Component {

  render() {
    return (
      <div className='l-col-2 gallery-item'>
        <div className='picture'>Picture of skills</div>
        <h3>Name of Skill</h3>
        <p>Brief description of skill</p>
      </div>
    );
  }
}
