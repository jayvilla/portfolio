import React from 'react'
import '../sass/styles.scss'

export default class Navigation extends React.Component {

  render() {
    return (
      <div className="navigation">
        <ul>
          <li>About Me</li>
          <li>Work</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}
