import { createSlice } from '@reduxjs/toolkit'

// function with all the todo items and their initial state
export const todos = createSlice({
    name: 'todos',
    initialState: [[
        // index 0
        { id: 1, text: 'This is a to-do item', complete: false },
        { id: 2, text: 'This is a to-do item', complete: false },
        { id: 3, text: 'This is a to-do item', complete: false },
        { id: 4, text: 'This is a to-do item', complete: false },
        { id: 5, text: 'This is a to-do item', complete: false },
    ],

    [   // index 1
        { id: 6, text: 'This is a to-do item', complete: false },
        { id: 7, text: 'This is a to-do item', complete: false },
        { id: 8, text: 'This is a to-do item', complete: false },
        { id: 9, text: 'This is a to-do item', complete: false },
        { id: 10, text: 'This is a to-do item', complete: false },
    ]],


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