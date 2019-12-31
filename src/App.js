import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  // state = {
  //   persons: [
  //     { name: "Marija", age: 30 },
  //     { name: "Jovan", age: 30 },
  //     { name: "Jordanka", age: 60 },
  //   ]
  // };
  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 31 },
  //       { name: "Jovan", age: 30 },
  //       { name: "Jordanka", age: 64 },
  //     ]
  //   })
  // };
  // changeNameHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       { name: "Kuzmanoska", age: 31 },
  //       { name: event.target.value, age: 30 },
  //       { name: "Jordanka", age: 64 },
  //     ]
  //   })
  // };
  state = {
    username: 'Marija'
  }

  inputChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }
    render() {

      return (
        <div>
          <UserInput change={this.inputChangeHandler} currentName={this.state.username}></UserInput>
          <UserOutput
            username={this.state.username}>
          </UserOutput>
          <UserOutput
            username={this.state.username}>
          </UserOutput>
          <UserOutput
            username="Kuzmanoska">
          </UserOutput>
        </div>
      )





    }
  }






  // const style = {
  //   backgroundColor: "yellow",
  //   font: 'bold',
  //   padding:'5px',
  //   border: '1px solid orange',
  //   cursor:'pointer'
  // // }
  // return (
  //   <div className="App" >
  //     <h1> I'm sexy and I know it!!!</h1>
  //     <button 
  //     style={style}
  //     onClick={() => this.switchNameHandler("Neshto!!!")}>Swith names</button>
  //     <Person
  //       name={this.state.persons[0].name} age={this.state.persons[0].age}
  //       click={this.switchNameHandler.bind(this, 'neshto2')}
  //       change={this.changeNameHandler}></Person>
  //     <Person
  //       name={this.state.persons[1].name} age={this.state.persons[1].age}
  //       click={this.switchNameHandler.bind(this, 'neshto2')}
  //       change={this.changeNameHandler}> Hobies: Learning to code</Person>
  //     <Person
  //       name={this.state.persons[2].name} age={this.state.persons[2].age}
  //       click={this.switchNameHandler.bind(this, 'neshto2')}
  //       change={this.changeNameHandler}>
  //     </Person>
  //   </div>
  // );


  export default App;
