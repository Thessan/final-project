/* import React, {useState, useEffect} from 'react'

const notesURL= "https://pregnancy-week-by-week.herokuapp.com/notes"

export const NewNote = () => {
    const [existingNote, setExistingNote] = useState([]) // the existing notes in the list
    const [newNote, setNewNote] = useState('') // new note that's being posted

    // fetch existing notes from the API
    const fetchNotes = () => {
        fetch(notesURL)
        .then(response => response.json())
        .then ((notes) => {
            setExistingNote(notes)
        })
    }
    useEffect(() => {
        fetchNotes();
    }, []);

    // post a new note from 




} */