import React from 'react';
import './NoteForm.scss';

class NoteForm extends React.Component {
  state = {
    newNoteContent: '',
  }

  handleUserInput = this.handleUserInput.bind(this);
  writeNote = this.writeNote.bind(this);

  handleUserInput(e) {
    console.log(this);
    this.setState({
      newNoteContent: e.target.value,
    })
  }

  writeNote() {
    this.props.addNote(this.state.newNoteContent);
  }

  render() {
    return (
      <div className='formWrapper'>
        <input
          className="noteInput"
          placeholder='Write a new note...'
          value={this.state.newNoteContent}
          onChange={this.handleUserInput} />
        <button className='noteButton' onClick={this.writeNote}>Add Note</button>

      </div>
    );
  }
}

export default NoteForm;
