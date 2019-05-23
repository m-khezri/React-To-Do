import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Note from '../Components/Note/Note';
import './App.scss';

class App extends React.Component {
  state = {
    notes: [
      { id: 1, noteContent: 'Note 1 here!' },
      { id: 2, noteContent: 'Note 1 here!' },
    ],
  }


  render() {
    return (
      <div className="notesWrapper">
        <div className='notesHeader'>
          <div className='heading'>React and Firebase ToDo App</div>
        </div>
        <div className='notesBody'>
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent={note.noteContent} noteId={note.id} key={note.id} />
              )
            })
          }

        </div>
        <div className="notesFooter">
          Footer will go here....
            </div>
      </div>
    );
  }
};

export default App;
