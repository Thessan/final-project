import React, {useState, useEffect} from 'react'
/* import { useDispatch } from 'react-redux' */
import moment from 'moment'
/* 
import { user } from '../Reducers/user' */
import '../Styling/notes.css'
import { Sidebar } from './NavigationBar/Sidebar'
import { Navbar } from './NavigationBar/Navbar'

const notesURL= "https://pregnancy-week-by-week.herokuapp.com/notes"

export const Notes = () => {
    const [existingNote, setExistingNote] = useState([]) // the existing notes in the list
    const [newNote, setNewNote] = useState('') // new note that's being posted

/*     const dispatch = useDispatch();

    const onDelete = id => {
        dispatch(user.actions.removeNote(id))
    } */

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

    
    const postNote = (event) => {
        event.preventDefault();
        
        fetch(notesURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({message: newNote})
        })
        .then (response => response.json())
        .then(() => { 
          fetchNotes(); // updates the list of posted notes
          setNewNote(''); // resets the textarea
        })
    }

    return (
        <>
        <Sidebar />
        <Navbar />
        <h1 className="h1-notes">Pregnancy Week By Week</h1>
            <div className="new-note-container">
            <form onSubmit= {postNote}>
                <label>
                    <p>What week are you in now? How are you feeling?</p>
                        <textarea 
                            placeholder="Write a new note..."
                            rows="3"
                            onChange={(event) => setNewNote(event.target.value)}
                            value={newNote}>
                        </textarea>
                </label> 

                <p className="character-count"> 
                    {newNote.length} / 400
                </p>

                <button className="send-note"
                    type="submit"
                    disabled={ // button will be disabled if the input field is empty, less than 5 characters or more than 400 characters
                    newNote.length < 5 || newNote.length > 400 ? true : false}>
                        <p>Add note</p>
                </button>
            </form>
        </div>
        <section className="note-wrapper">
        <section className="all-notes-container">
            {existingNote.map(newNote => { // returns a div for each note
                return(                    
                    <div className="note-container" key={newNote._id}>
                        <p className="note-text">{newNote.message}</p>
                        <p className="note-added">Added: {moment(newNote.date).format("MMM Do YYYY")}, {moment(newNote.time).format("h:mm:ss A")}</p>
                        <button className="delete-button" type="button" /* onClick={() => onDelete(newNote.id)} */> <p>delete</p></button>
                    </div>
                    
                )
            })}
        </section>
        </section>
        </>
    )
}