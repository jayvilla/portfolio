import React from 'react'
import GalleryItem from './GalleryItem.jsx'
import '../sass/styles.scss'

export default class PortfolioGallery extends React.Component {
  renderProjects() {
    const portfolio = 'portfolio';
    const projectNames = [
      {name: 'VISA', description: 'Description goes here', image: 'Picture of App/Project'},
      {name: 'Skullcandy', description: 'Description goes here', image: 'Picture of App/Project'},
      {name: 'Snacktime', description: 'Description goes here', image: 'Picture of App/Project'},
      {name: 'FilmedIn', description: 'Description goes here', image: 'Picture of App/Project'},
      {name: 'Hangouts', description: 'Description goes here', image: 'Picture of App/Project'},
      {name: 'Portfolio', description: 'Description goes here', image: 'Picture of App/Project'}
    ];
    return projectNames.map((project, i) => <GalleryItem section={portfolio} project={project} key={i} />)
  };

  render() {
    return (
      <div className='gallery'>
        {this.renderProjects()}
      </div>
    );
  }
};
