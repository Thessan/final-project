import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './Styling/header.css'
import { Home } from './Pages/Home'
import { FirstTrimester } from './Pages/FirstTrimester'
import { SecondTrimester } from './Pages/SecondTrimester'
import { ThirdTrimester } from './Pages/ThirdTrimester'
import { Sidebar } from './Components/NavigationBar/Sidebar'
import { Navbar } from './Components/NavigationBar/Navbar'

export const App = () => {
  return (
    <>
    
    <BrowserRouter>
      <Sidebar />
      <Navbar />
        <div className="header"></div>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/first-trimester' component={FirstTrimester} />
            <Route path='/second-trimester' component={SecondTrimester} />
            <Route path='/third-trimester' component={ThirdTrimester} />
          </Switch>
      </BrowserRouter>
    </>
  )
}