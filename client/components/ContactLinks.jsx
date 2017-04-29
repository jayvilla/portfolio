import React from 'react'
import '../sass/styles.scss'

export default class ContactLinks extends React.Component {
  render() {
    return (
      <div className='links'>
        <hr />
        <h3>Find me on...</h3>
        <ul className='social'>
          <li><a href='#' className='icon fa-twitter'><span className='label'>Twitter</span></a></li>
					<li><a href='#' className='icon fa-facebook'><span className='label'>Facebook</span></a></li>
					<li><a href='#' className='icon fa-dribbble'><span className='label'>Dribbble</span></a></li>
					<li><a href='#' className='icon fa-linkedin'><span className='label'>LinkedIn</span></a></li>
					<li><a href='#' className='icon fa-tumblr'><span className='label'>Tumblr</span></a></li>
					<li><a href='#' className='icon fa-google-plus'><span className='label'>Google+</span></a></li>
					<li><a href='#' className='icon fa-github'><span className='label'>Github</span></a></li>
        </ul>
      </div>
    );
  }
}
