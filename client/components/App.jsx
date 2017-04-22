import React from 'react'
import Navigation from './Navigation.jsx'
import '../sass/styles.scss'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
          <div className='example'>
          <h1>Welcome to Jeff's portfolio</h1>
          </div>
      </div>
    )
  }
}
