import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { todos } from '../Reducers/todos'
import {
        Wrapper,
        TodoContainer,
        TodoTitel,
        EachTodoContainer,
        List,
        TodoText } from '../Styling/TodoStyling'

export const TodoListTwo = () => {
    const dispatch = useDispatch();

    // reducer from App.js
    const items = useSelector(store => store.todosReducer[1]);

    // onChecked takes the function checkedItem from the reducer
    // and dispatch/trigger the action to update the state from
    // not being checked/completed to being checked/completed
    const onChecked = complete => {
        dispatch(todos.actions.toggleComplete(complete))
    }

    return (
        // mapping over the name:todos from createSlice in todos.js
        <Wrapper>
            <TodoContainer>
            <TodoTitel>This is TodoListTwo</TodoTitel>
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