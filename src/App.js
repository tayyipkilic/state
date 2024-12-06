
import './App.css';
import Course from './course.js';
import { useState } from 'react'


function getRandomCourse() {
  const courseArray = ['Angular','Bootstrap','Ccsharp','Kompleweb'];
   return courseArray [Math.floor(Math.random()*courseArray.length)]
}

function App() {

  const [courses, setcourses] = useState([])

  const handleClick = () =>{
    setcourses ([...courses , getRandomCourse()])
  } 
  const courseList = courses.map((course,index)=> {
    return  <Course key={index} courseName={course} />
  });
  return (
    <div className="App">
      <button className = "appButton" onClick = {handleClick}>Kurs Ekle</button>
      <div className='courseList'>{courseList}</div>
      </div>
  );
}

export default App;
