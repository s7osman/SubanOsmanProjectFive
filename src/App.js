import React, { Component } from 'react';
import firebase from './Firebase'
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
        newGoals.push(data[key]);
      }

      this.setState({
        goals: newGoals
      })

    })
    
  }

  handleChange = (event) => {
    this.setState({
      userGoal: event.target.value
    })
  }

  handleClick = (event) => {
    event.preventDefault();

    const dbRef = firebase.database().ref();
    dbRef.push(this.state.userGoal);

    this.setState({
      userGoal: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h1>
          Monthly Goals
        </h1>
        <p> Write <span>one</span> goal you'd like to accomplish this month. </p>
        <form action="submit">
          <label htmlFor="newGoal" className="sr-only" >Add New Goal Here</label>
          <input 
          type="text"
          id="newGoal"
          onChange={this.handleChange}
          value={this.state.userGoal}
          placeholder="Add New Goal Here"/>

          <button onClick={this.handleClick}>Add Goal</button>
        </form>
        
        <ul>
        {
          this.state.goals.map((goal) => {
            return (
              <li>
                <p>{goal}</p>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}


// componentDidMount() {
//   const dbRef = firebase.databse().ref();
//   dbRef.on('value', (data) => {
//     const newGoal = data.val();
//     console.log(newGoal);
    
    // const newGoalArray = [];

    // for(propName in newGoal) {
    //   newGoalArray.push()
    // }

    // console.log(newGoal)

    // this.setState({
    //   goals: newGoalArray
//     // })
//   })
// }


export default App;