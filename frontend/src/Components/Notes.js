import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

import '../Styling/notes.css'
import { Sidebar } from './NavigationBar/Sidebar'
import { Navbar } from './NavigationBar/Navbar'

const notesURL= "https://pregnancy-week-by-week.herokuapp.com/notes"

export const Notes = () => {
    const [existingNote, setExistingNote] = useState([]) // the existing notes in the list
    const [newNote, setNewNote] = useState('') // new note that's being posted

    const accessToken = useSelector((store) => store.user.login.accessToken);

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

    // post a new note 
    const postNote = (event) => {
        event.preventDefault();
        
        fetch(notesURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': accessToken},
            body: JSON.stringify({newNote:newNote})
        })
        .then (response => response.json())
        .then(() => { 
          fetchNotes(); // updates the list of posted notes
          setNewNote(''); // resets the textarea
        })
    }

    // delete a note
    const deleteNote = (_id) => {

        fetch(`https://pregnancy-week-by-week.herokuapp.com/notes/${_id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json', 'Authorization': accessToken},
        })

        .then((response) => {
            if (!response.ok) {
            throw new Error('Could not delete note');
            }
            return response.json();
        })
        .then(() => { 
            fetchNotes(); // after note is deleted the page refreshes with remaining existing notes
        })
    }

    return (
        <>
            <Sidebar />
            <Navbar />
                <h1 className="h1-notes">Pregnancy Week By Week</h1>
                    <section className="notes-background">
                        <div className="notes-wrapper">
                            <div className="new-note-container">
                                <form onSubmit= {postNote}>
                                <label>
                                    <p className="new-note-text">What week are you in? How are you feeling?</p>
                                        <textarea 
                                            placeholder="Write a new note..."
                                            rows="3"
                                            onChange={(event) => setNewNote(event.target.value)}
                                            value={newNote}>
                                        </textarea>
                                </label>

                                    <p className="character-count"> {newNote.length} / 700 </p>

                                    <button className="add-note"
                                        type="submit"
                                        disabled={ 
                                        newNote.length < 5 || newNote.length > 700 ? true : false}>
                                            <p>Add note</p>
                                    </button>
                                </form>
                            </div>
                        </div>

                        <section className="note-wrapper">
                            <div className="all-notes-container">
                                {existingNote.map(newNote => { 
                                    return(                    
                                        <div className="note-container" key={newNote._id}>
                                            <p className="note-text">{newNote.newNote}</p>
                                                <p className="note-added">Added: {moment(newNote.createdAt).format("MMM Do YYYY")}, {moment(newNote.createdAt).format("h:mm:ss A")}</p>
                                            
                                            <button className="delete-button"
                                                type="button"
                                                onClick={ () => {deleteNote(newNote._id)}}> 
                                                    <p>delete</p>
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                    </section>
        </>
    )
}



// WILL USE THIS LATER FOR IMAGE UPLOADING 

/* const imageURL= "https://pregnancy-week-by-week.herokuapp.com/notes" */

/*     const fileInput = useRef() // for image upload */

/*     // post a new note & upload an image
    const postNote = (event) => {
        
        const formData = new FormData()
        formData.append('image', fileInput.current.files[0])
    
        fetch(imageURL, {
            method: 'POST',
            body: formData
        })
        .then((response) => response.json())
        .then((json) => {
        console.log(json)
        })

        fetch(notesURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': accessToken},
            body: JSON.stringify({newNote:newNote})
        })
        .then (response => response.json())
        .then(() => { 
          fetchNotes(); // updates the list of posted notes
          setNewNote(''); // resets the textarea
        })
    } */

                    /*  <label>
                        <p className="label-text">Upload an image</p>
                        <input className="choose-image" type="file" ref={fileInput} />
                        </label>  */
                        
                
                /* <form onSubmit={postNote}>
                    

                    <button type="submit">
                        Submit
                    </button>
                    </form>
 */