import React from 'react'
import WorkHeader from './WorkHeader.jsx'
import WorkGallery from './WorkGallery.jsx'
import WorkFooter from './WorkFooter.jsx'
import '../sass/styles.scss'

export default class PortfolioHeader extends React.Component {

  render() {
    return (
      <div className='header'>
        <h1>Heres some stuff I made recently</h1>
        <p>Proin odio consequat sapien vestibulum consequat lorem dolore feugiat lorem ipsum dolore.</p>
      </div>
    );
  }
}
