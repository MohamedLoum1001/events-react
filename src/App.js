import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Incrementer from "./Components/Incrementer";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1 className='text-center my-5'>Les Evénements en react JS</h1>
        <Incrementer />
      </div>
    )
  }
  
}

export default App;




