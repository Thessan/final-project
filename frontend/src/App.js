import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { combineReducers, configureStore } from '@reduxjs/toolkit' // add createStore when adding localstorage for todolists

import './Styling/header.css'
/* import { todos } from './Reducers/todos' */
import { user } from './Reducers/user'
import { Home } from './Pages/Home'
import { FirstTrimester } from './Pages/FirstTrimester'
import { SecondTrimester } from './Pages/SecondTrimester'
import { ThirdTrimester } from './Pages/ThirdTrimester'
/* import { TodoLists } from './Pages/TodoLists' */
import { Signup } from './Components/Signup'
import { Login } from './Components/Login'
import { Sidebar } from './Components/NavigationBar/Sidebar'
import { Navbar } from './Components/NavigationBar/Navbar'


const reducer = combineReducers({Reducer: user.reducer})
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
      <Sidebar />
      <Navbar />
        <div className="header"></div>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/first-trimester' component={FirstTrimester} />
            <Route path='/second-trimester' component={SecondTrimester} />
            <Route path='/third-trimester' component={ThirdTrimester} />
            {/* <Route path='/todo-lists' component={TodoLists} /> */}
            <Route path='/signup' component={Signup}/>
            <Route path='/login' component ={Login} />
          </Switch>
      </BrowserRouter>
      </Provider>
    </>
  )
}