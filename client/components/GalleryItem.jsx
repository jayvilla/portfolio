import React from 'react'
import '../sass/styles.scss'

export default class GalleryItem extends React.Component {
  renderWorkItem() {
    const className = `picture ${this.props.data.className}`;

    return (
      <div className='l-col-2 gallery-item'>
        <div className={className}>Picture of skills</div>
        <h3>{this.props.data.name}</h3>
        <p>{this.props.data.description}</p>
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
