import React, { Component } from 'react';
import firebase from './Firebase'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      goals: [],
      userInput: ''
    }
  }

  componentDidMount() {
    //This Variable holds the database
    const dbRef = firebase.database().ref();
    dbRef.on('value', (snapshot) => {
      
      const newState =[];

      const data = snapshot.val()

      for (let key in data) {
        newState.push(data[key]);
      }

      this.setState({
        goals: newState
      })

    })
    
  }

  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  handleClick = (event) => {
    event.preventDefault();

    const dbRef = firebase.database().ref();
    dbRef.push(this.state.userInput);

    this.setState({
      userInput: ''
    })
  }


  render() {
    return (
      <div className="App">
        <h1>
          Weekly Goals
        </h1>
        <p> My goal this Week is: </p>
      
        <form action="submit">
          <label htmlFor="newGoal" className="sr-only" >Add New Goal Here</label>
          <input 
          type="text"
          id="newGoal"
          onChange={this.handleChange}
          value={this.state.userInput}
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