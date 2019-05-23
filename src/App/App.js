import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React To Do App</h1>
      <button className="btn btn-danger">Help me</button>
      <Button
        tag='a'
        color='success'
        size='large'
        target='_blank'
      >
        View Reactstrap Docs
</Button>

    </div>
  );
}

export default App;
