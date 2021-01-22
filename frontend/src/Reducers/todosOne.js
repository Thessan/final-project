import { createSlice } from '@reduxjs/toolkit'

// function with all the todo items and their initial state
export const todosOne = createSlice({
    name: 'todos',
    initialState: [
        { id: 1, text: 'This is a todo item', complete: false },
        { id: 2, text: 'This is a todo item', complete: false },
        { id: 3, text: 'This is a todo item', complete: false },
        { id: 4, text: 'This is a todo item', complete: false },
        { id: 5, text: 'This is a todo item', complete: false },
    ],

    // function that receives the initial state and the action updates
    // the state and returns a new state (in this case, the new state is that the todo
    // item is checked/marked as completed)
    reducers: {
        toggleComplete: (store, action) => {
        const checkedItem = store.find(item => item.id === action.payload)
            if (checkedItem) {
            checkedItem.complete = !checkedItem.complete
            }
        }
    }
})