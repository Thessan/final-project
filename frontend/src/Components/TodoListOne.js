import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { todosOne } from '../Reducers/todosOne'
import {
        Wrapper,
        TodoContainer,
        TodoTitel,
        EachTodoContainer,
        List,
        TodoText } from '../Styling/TodoStyling'

export const TodoListOne = () => {
    const dispatch = useDispatch();

    // reducer from App.js
    const items = useSelector(store => store.todosOneReducer);

    // onChecked takes the function checkedItem from the reducer
    // and dispatch/trigger the action to update the state from
    // not being checked/completed to being checked/completed
    const onChecked = complete => {
        dispatch(todosOne.actions.toggleComplete(complete))
    }

    return (
        // mapping over the todoItems from createSlice in todosOne.js
        <Wrapper>
            <TodoContainer>
            <TodoTitel>This is a todo list</TodoTitel>
            {items.map(todoItems => (
                <EachTodoContainer key={todoItems.id}>
                    <List>
                            <input type="checkbox"
                            checked={todoItems.complete}
                            onChange={() => onChecked(todoItems.id)}
                            />
                    </List>
                    <TodoText>{todoItems.text}</TodoText>
                </EachTodoContainer>
            ))}
            </TodoContainer>
        </Wrapper>
    )
}




















