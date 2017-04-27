import React from 'react'
import PortfolioHeader from './PortfolioHeader.jsx'
import PortfolioGallery from './PortfolioGallery.jsx'
import PortfolioFooter from './PortfolioFooter.jsx'
import '../sass/styles.scss'

export default class Portfolio extends React.Component {

  render() {
    return (
      <div className='portfolio'>
        <PortfolioHeader />
        <PortfolioGallery />
        <PortfolioFooter />
      </div>
    );
  }
}
