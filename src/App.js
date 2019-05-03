import React from 'react';
import './App.css';
import Counter from './Counter';

const Welcome = (props) => {
  return (
    <div>
      {
        props.isTeacher && 
        <h2>Hello, {props.name}, I am a Teacher</h2>
      }
      {
        !props.isTeacher &&
        <p>{`Hello ${props.name}, I am a student`}</p>
      }
    </div>
  );
} 

const App= () => {
  return (
    <section className="App">
        <Welcome name={'Nick'} isTeacher />
        <Welcome name="Tim" />
        <Welcome name="Sam" />
        <Counter/>
    </section>
  );
}

export default App;
