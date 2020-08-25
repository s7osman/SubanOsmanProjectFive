import React, { Component } from 'react';
import firebase from './Firebase';
import Form from './Form';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      goals: [],
      userGoal: ''
    }
  }

  componentDidMount() {
    //This variable refers to data held in the firebase database.
    const dbRef = firebase.database().ref();
    dbRef.on('value', (snapshot) => {
      
      const newGoals =[];

      const data = snapshot.val()

      for (let key in data) {
        newGoals.push({key: key, name: data[key]});
      }

      this.setState({
        goals: newGoals
      })

    })
    
  }

// Deleted the goal from both the page as well as the firebase database.
  deleteGoal = (goalId) => {
    const dbRef = firebase.database().ref()
    dbRef.child(goalId).remove();
  }

  render() {
    return (
      <div className="app">
        <h1>
          <span className="title">Monthly Goals</span>
        </h1>
        <div className="appContainer wrapper">
        <p className="description"> Write <span>one</span> goal you'd like to accomplish this month. </p>
        
        <Form />
        
        <ul className="wrapper">
          {
            this.state.goals.map((goal) => {
              return (
                <li key={goal.key}>
                  <p>{goal.name}</p>
                  <i className="fas fa-backspace" onClick={() => this.deleteGoal(goal.key)}></i>  
                </li>
              )
            })
          }
        </ul>
        </div>
      </div>
    )
  }
}

export default App;