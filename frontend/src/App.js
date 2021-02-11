import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { combineReducers, configureStore } from '@reduxjs/toolkit' // add createStore when adding localstorage for todolists

import { user } from './Reducers/user'
import { Login } from './Components/Login'
import { Signup } from './Components/Signup'
import { Member } from './Components/Member'
import { FirstTrimester } from './Pages/FirstTrimester'
import { SecondTrimester } from './Pages/SecondTrimester'
import { ThirdTrimester } from './Pages/ThirdTrimester'
import { Notes } from './Components/Notes'
import { Logout } from './Components/Logout'

const reducer = combineReducers({ user: user.reducer })
const store = configureStore({ reducer });

// USE THIS WITH TODOLISTS FOR LOCAL STORAGE
/* These lines of code is a setup to store the checked/completed To-Do's locally
so that the checked boxes don't get reset every time the page is updated.
The variable persistedStateJSON will check if anything's saved in the local storage
by the method getItem. The data being saved locally is in this project named savedTodoData.
If savedTodoData is found, we need to parse it, this parsed version is assigned to persistedState and
will work as our initialState 
const persistedStateJSON = localStorage.getItem("savedTodoData");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
};

the original setup ( const store = configureStore({ reducer }); )
is changed to the line of code below 
const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  localStorage.setItem("savedTodoData", JSON.stringify(store.getState()));
}); */

export const App = () => {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/member' component={Member} /> 
            <Route path='/first-trimester' component={FirstTrimester} />
            <Route path='/second-trimester' component={SecondTrimester} />
            <Route path='/third-trimester' component={ThirdTrimester} />
            <Route path='/notes' component={Notes} />
            <Route path='/logout' component={Logout} />
          </Switch>
      </BrowserRouter>
      </Provider>
    </>
  )
}