import React from 'react';
import './Person.css';

const person = (props) =>{
   return (
     <div className="Person">  
     <p onClick={props.click}>Hi, I'm a {props.name} and I'm a {props.age} year old!</p>
     <input type="text" onChange={props.changed} value={props.name} />
    </div>
   )
};


export default person;