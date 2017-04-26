import React from 'react'
import '../sass/styles.scss'

export default class Navigation extends React.Component {

  render() {
    return (
      <nav className='navigation'>
        <ul className='container'>
          <li>Top</li>
          <li>Work</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}
