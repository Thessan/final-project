import React, {useState, useEffect} from 'react'
import moment from 'moment'

import '../Styling/notes.css'
import { Sidebar } from './NavigationBar/Sidebar'
import { Navbar } from './NavigationBar/Navbar'

const notesURL= "https://pregnancy-week-by-week.herokuapp.com/notes"
const deleteURL= "https://pregnancy-week-by-week.herokuapp.com/notes/:notesId"

export const Notes = () => {
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

    const deleteNote = (event) => {
        event.preventDefault();

        fetch(deleteURL, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({message: deleteNote })
        })

        .then((response) => {
            if (!response.ok) {
            throw new Error('Could not delete note');
            }
            return response.json();
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
                    disabled={ 
                    newNote.length < 5 || newNote.length > 400 ? true : false}>
                        <p>Add note</p>
                </button>
            </form>
        </div>

        <section className="note-wrapper">
        <section className="all-notes-container">
            {existingNote.map(newNote => { 
                return(                    
                    <div className="note-container" key={newNote._id}>
                        <p className="note-text">{newNote.message}</p>
                        <p className="note-added">Added: {moment(newNote.createdAt).format("MMM Do YYYY")}, {moment(newNote.createdAt).format("h:mm:ss A")}</p>
                        <button className="delete-button"
                            type="button"
                            onClick={deleteNote}
                            > 
                                <p>delete</p>
                        </button>
                    </div>
                    
                )
            })}
        </section>
        </section>
        </>
    )
}