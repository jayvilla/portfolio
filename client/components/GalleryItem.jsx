import React from 'react'

import '../sass/styles.scss'

export default class GalleryItem extends React.Component {
  renderWorkItem() {
    return (
      <div className='l-col-2 gallery-item'>
        <div className='picture'>Picture of skills</div>
        <h3>Name of Skill</h3>
        <p>Brief description of skill</p>
      </div>
    );
  }

  renderPortfolioItem() {
    return (
      <div className='l-col-2 gallery-item'>
        <div className='picture'>Picture of App/Project</div>
        <h3>{this.props.project.name}</h3>
        <p>{this.props.project.description}</p>
      </div>
    )
  }

  render() {
    if (this.props.section == 'work') {
      return this.renderWorkItem();
    } else if (this.props.section == 'portfolio') {
      return this.renderPortfolioItem();
    }
  }
}
