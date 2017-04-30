import React from 'react'
import GalleryItem from './GalleryItem.jsx'
import '../sass/styles.scss'

export default class WorkGallery extends React.Component {
  renderWorkItems() {
    const work = 'work';
    const data = [
      { className: 'fa-jsfiddle', name: 'Front End', description: 'Description for skill will go here' },
      { className: 'fa-database', name: 'Back End', description: 'Description for skill will go here' },
      { className: 'fa-bar-chart', name: 'Tools', description: 'Description for skill will go here' },
    ];
    return data.map( (data, i) => <GalleryItem section={work} data={data} key={i} />)
  }

  render() {

    return (
      <div className='l-row gallery'>
        {this.renderWorkItems()}
      </div>
    );
  }
}
