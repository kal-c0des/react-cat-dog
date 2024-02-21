import { useState } from "react";
import { students, cats, dogs } from "./data";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className="student-cont">
        <h1>Students:</h1>
        {students.map((student) => {
          return <h2 key={student.id}>{student.name}</h2>;
        })}
      </div>
      <div className="cats-cont">
        <h1>Cats:</h1>
        {cats.map((cat) => {
          return (
            <div key={cat.id} className="cat-card">
              <h2>{cat.name}</h2>
              <p>Age: {cat.age}</p>
              <p>Breed: {cat.breed}</p>
            </div>
          );
        })}
      </div>
      <div className="dogs-cont">
        <h1>Dogs:</h1>
        {dogs.map((dog) => {
          return (
            <div key={dog.id} className="dog-card">
              <h2>{dog.name}</h2>
              <p>Age: {dog.age}</p>
              <p>Breed: {dog.breed}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
