import React from 'react'
import Navigation from './Navigation.jsx'
import Profile from './Profile.jsx'
import Work from './Work.jsx'
import Portfolio from './Portfolio.jsx'
import '../sass/styles.scss'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
        <Profile />
        <Work />
        <Portfolio />
      </div>
    )
  }
}
