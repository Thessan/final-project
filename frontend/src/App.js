import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import './Styling/header.css'
import { todosOne } from './Reducers/todosOne'
import { Home } from './Pages/Home'
import { FirstTrimester } from './Pages/FirstTrimester'
import { SecondTrimester } from './Pages/SecondTrimester'
import { ThirdTrimester } from './Pages/ThirdTrimester'
import { TodoLists } from './Pages/TodoLists'
import { Sidebar } from './Components/NavigationBar/Sidebar'
import { Navbar } from './Components/NavigationBar/Navbar'

const reducer = combineReducers({
  todosOneReducer: todosOne.reducer
})

const store = configureStore({ reducer })


export const App = () => {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
      <Sidebar />
      <Navbar />
        <div className="header"></div>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/first-trimester' component={FirstTrimester} />
            <Route path='/second-trimester' component={SecondTrimester} />
            <Route path='/third-trimester' component={ThirdTrimester} />
            <Route path='/todo-lists' component={TodoLists} />
          </Switch>
      </BrowserRouter>
      </Provider>
    </>
  )
}