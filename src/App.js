import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import UserOutput from './UserOutput/UserOutput';
// import UserInput from './UserInput/UserInput';

class App extends Component {

  // return (
  //   <div>
  //     <UserInput change={this.inputChangeHandler} currentName={this.state.username}></UserInput>
  //     <UserOutput
  //       username={this.state.username}>
  //     </UserOutput>
  //     <UserOutput
  //       username={this.state.username}>
  //     </UserOutput>
  //     <UserOutput
  //       username="Kuzmanoska">
  //     </UserOutput>
  //   </div>
  // )



  state = {
    persons: [
      { name: "Marija", age: 30 },
      { name: "Jovan", age: 30 },
      { name: "Jordanka", age: 60 },
    ],
    showPersons: false
  };
  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Kuzmanoska", age: 31 },
        { name: event.target.value, age: 30 },
        { name: "Jordanka", age: 64 },
      ]
    })
  };
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: "Jovan", age: 30 },
        { name: "Jordanka", age: 64 },
      ]
    })
  };

  // state = {
  //   username: 'Marija'
  // }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  // inputChangeHandler = (event) => {
  //   this.setState({
  //     username: event.target.value
  //   })
  // }
  render() {

    const style = {
      backgroundColor: "yellow",
      font: 'bold',
      padding: '5px',
      border: '1px solid orange',
      cursor: 'pointer'
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
           return <Person name={person.name}
              age={person.age}
              // click={this.switchNameHandler.bind(this, 'neshto2')}
              change={this.changeNameHandler}
            />
          })}
      </div>
    )}

    return (
      <div className="App" >
        <h1> I'm sexy and I know it!!!</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Swith names</button>
        {persons}
      </div>
    );
  }
}
export default App;
