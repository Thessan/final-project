import React, {useState, useEffect} from 'react'

const notesURL= "https://pregnancy-week-by-week.herokuapp.com/notes"

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

    // post a new note from 
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
        <section className="newThoughtContainer">
        <form onSubmit={postNote}>
            <label>
            <p>What week are you in now? How are you feeling?</p>
                <textarea 
                placeholder="Write a new note..."
                rows="3"
                onChange={event => setNewNote(event.target.value)}
                value={newNote}>
                </textarea>
        </label> 

        <p className="characterCount"> 
                {newNote.length} / 400
        </p>

            <button className="send-note"
            type="submit"
            disabled={ // button will be disabled if the input field is empty, less than 5 characters or more than 400 characters
                newNote.length < 5 || newNote.length > 400 ? true : false}>
                <p>Add note</p>
            </button>
        </form>
        </section>

        <section className="allRepliesContainer">
            {existingNote.map(note => { // returns a div for each note
                return(                    
                    <div className="replyContainer" key={note._id}>
                        <p className="replyText">{note.note}</p>
                    </div>
                )
            })}
        </section>
</>
    )

}