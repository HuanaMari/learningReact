import React, { Component } from 'react';
import stilisimo from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
// import classes from '*.module.css';
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
      { id: "1", name: "Marija", age: 30 },
      { id: "2", name: "Jovan", age: 30 },
      { id: "3", name: "Jordanka", age: 60 },
    ],
    showPersons: false
  };
  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({},this.state.persons[personIndex])
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons: persons });

  }
  deletePersonsHandler = (personsIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personsIndex, 1)
    this.setState({ persons: persons })
  }
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

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons}
            clicked={this.deletePersonsHandler}
            changed={this.changeNameHandler}
          />
        </div>
      )
    }
    return (
      <div className={stilisimo.App}>
        <Cockpit
        title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}
export default withClass(App,stilisimo.App);
