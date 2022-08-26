import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import FirstComponent from './components/learning/FirstComponent'
import SecondComponent from './components/learning/SecondComponent'
import ThirdComponent from './components/learning/ThirdComponent'
import Counter from './components/counter/Counter'
import ToDoApp from './components/todo/ToDoApp'
 
class App extends Component {
  render() {
    return (
      <div className='App'>
        <ToDoApp/>
      </div>
    )
  }
}

export default App
