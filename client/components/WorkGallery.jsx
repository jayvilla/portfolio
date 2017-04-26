import React from 'react'
import GalleryItem from './GalleryItem.jsx'
import '../sass/styles.scss'

export default class WorkGallery extends React.Component {

  render() {
    return (
      <div className='l-row gallery'>
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </div>
    );
  }
}
