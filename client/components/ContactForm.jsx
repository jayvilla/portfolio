import React from 'react'
import '../sass/styles.scss'

export default class ContactForm extends React.Component {
  render() {
    return (
      <div className='form'>
        <form method='post' action='#'>
          <div className='l-col-12'>
            <div className='l-row l-col-6'>
              <input type='text' name='name' id='name' placeholder='Name' />
            </div>
            <div className='l-row l-col-6'>
              <input type='text' name='email' id='email' placeholder='Email' />
            </div>
          </div>
          <div className='l-col-12'>
            <input type='text' name='subject' id='subject' placeholder='Subject' />
          </div>
          <div className='l-col-12'>
            <textarea name='message' id='message' placeholder='Message'></textarea>
          </div>
          <div className='l-col-12'>
            <ul className='actions'>
              <li><input type="submit" value="Send Message" /></li>
							<li><input type="reset" value="Clear Form" className="alt" /></li>
            </ul>
          </div>
        </form>
      </div>
    );
  }
}
