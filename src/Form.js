import React, { Component } from 'react';
import firebase from './Firebase';

//Create Form class component
class Form extends Component {
    constructor() {
        super();
        this.state = {
            userGoal: ""
        }
    }

//When user inputs goal, save state
handleChange = (event) => {
    this.setState({
        userGoal: event.target.value
    })
}


//when user adds goal, store value in firebase and display new goal on the screen
// Handle Invalid Error
handleClick = (event) => {
    event.preventDefault();
    this.setState({
    userGoal: ''
    })

    if (this.state.userGoal === '') {
        alert ("Nice Try! Please add a Goal");
    } else {
        const dbRef = firebase.database().ref();
        dbRef.push(this.state.userGoal);

    }
}

//form to be displayed on the screen
render() {
    return(
        <form action="submit" >
            <label htmlFor="newGoal" className="srOnly">Add New Goal Here</label>
            <input 
            type="text"
            id="newGoal"
            onChange={this.handleChange}
            value={this.state.userGoal}
            placeholder="Add New Goal Here"
            tabindex="1"
            />
            <button onClick={this.handleClick}>Add Goal</button>
        </form>
    )
}

};

export default Form;