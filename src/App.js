import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
render() {
  return (
    <div className="container">
      <div className='box backlog'>
        <div className='header card'>Backlog</div>
        <div className='card'>Chat</div>
        <div className='card'>Rest</div>
      </div>
      <div className='box todo'>
        <div className='header card'>ToDo</div>
        <div className='card'>Chat</div>
        <div className='card'>Rest</div>
      </div>
      <div className='box progress'>
        <div className='header card'>Progress</div>
        <div className='card'>Chat</div>
        <div className='card'>Rest</div>
      </div>
      <div className='box done'>
        <div className='header card'>Done</div>
        <div className='card'>Chat</div>
        <div className='card'>Rest</div>
      </div>
    </div>
  )
  }
}
export default App;
