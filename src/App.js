import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
     persons: [
       {id:'111', name:'Aleksandar' , age:'39'},
       {id:'222', name: 'Biljana', age:'39'},
       {id:'333', name: 'Vanja' , age:'18'}
     ],
     otherState : 'some other value',
     showPersons: true
  }


  tooglePersonHandler = () =>{
   const isShow  = !this.state.showPersons;
   this.setState({showPersons: isShow});
  };


  switchNameHandler = (newName) =>{
     // console.log('was clicked');
     //this.state.persons[0].name = 'Aca';
     this.setState({
       persons: [
        {name: newName, age:'39'},
        {name: 'Biljana', age:'39'},
        {name: 'Vanja' , age:'18'}
      ]
     })
  };

  nameChangeHandler = (event,ElementIndex) => {
    const helpPersons = [...this.state.persons];
    const findedElement = helpPersons.findIndex(el => el.id === ElementIndex);
    helpPersons[findedElement].name = event.target.value;
    this.setState({persons:helpPersons});
 };


  
  deletePersonHandler = (ElementIndex) => {
    const helpPersons = [...this.state.persons];
    helpPersons.splice(ElementIndex,1);
    //console.log(helpPersons);
    this.setState({
      persons : helpPersons
    });
  };



  render() {

    const styles = {
      background: "green",
      color: "white",
      fontsize: "15px",
      padding: "10px 25px",
      textalign: "center",
      cursor: "pointer",
      border: "none"
    }


    let persons = null;

    if(this.state.showPersons){
       persons = (
        <div>
          {this.state.persons.map((element, index) => {
            return <Person
                   key = {element.id}
                   name = {element.name}
                   age = {element.age}
                   click = {() => this.deletePersonHandler(index)}
                   changed = {(event) => this.nameChangeHandler(event, element.id)} />
          })
          }
        </div>
       );
    }


    return (
      <div className="App">
      <h1>React App!</h1>
      <button style={styles} onClick={this.tooglePersonHandler}>Toogle Persons</button>
      {persons}
      </div>
    )
  }
}

export default App;



  /**/