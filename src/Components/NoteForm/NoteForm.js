import React from 'react';
import './NoteForm.scss';

class NoteForm extends React.Component {
  state = {

  }
  render() {
    return (
      <div className='formWrapper'>
        <input
          className="noteInput"
          placeholder='Write a new note...' />
        <button className='noteButton'>Add Note</button>

      </div>
    );
  }
}

export default NoteForm;
