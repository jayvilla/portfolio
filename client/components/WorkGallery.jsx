import React from 'react'
import GalleryItem from './GalleryItem.jsx'
import '../sass/styles.scss'

export default class WorkGallery extends React.Component {
  render() {
    const work = 'work';

    return (
      <div className='l-row gallery'>
        <GalleryItem section={work} />
        <GalleryItem section={work} />
        <GalleryItem section={work} />
      </div>
    );
  }
}
