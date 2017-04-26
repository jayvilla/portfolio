import React from 'react'
import WorkHeader from './WorkHeader.jsx'
import WorkGallery from './WorkGallery.jsx'
import WorkFooter from './WorkFooter.jsx'

import '../sass/styles.scss'

export default class Work extends React.Component {

  render() {
    return (
      <div className='work'>
        <WorkHeader />
        <WorkGallery />
        <WorkFooter />
      </div>
    );
  }
}
