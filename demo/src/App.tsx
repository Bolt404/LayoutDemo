import React from 'react';
// import './App.css';

import CountComponent from './components/AboutComponent';
import AboutComponent from './components/CountComponent';
import ImageComponent from './components/ImageComponent';
import ShowDog from './components/ShowDog';
import { DogClass } from './objects/DogClass';
import { DogType } from './types/DogType';
import { Otter } from './objects/Otter';

import exampleImage from './assets/react.svg';

function App() {
  const myDog = new DogClass ('Lab', 2);
  const myDogType: DogType = { name: 'Hugo', age: 1 };
  const myDogType2: DogType = { name: 'Bo', age: 6 };
  const myDogType3: DogType = { name: 'Lasse', age: 3 };
  const myOtter = new Otter ('Bobby', new Date('2024-11-08'));

  const dogs: DogType[] = [myDogType];
  console.log("DOGS!", dogs)

  dogs.push(myDogType2, myDogType3);
  console.log("DOGS!", dogs)

  const lastDogArray: DogType = dogs.pop() || { name: "Default", age: 0 };

  return (
    <div>
      <table>    
         <tr> <td> <ImageComponent imgSrc={exampleImage} /> </td> </tr>
         <tr> <td> <CountComponent /> </td> </tr> 
         <tr> <td> <AboutComponent /> </td> </tr>
         <tr> <td> <ShowDog dog={myDog} /> </td></tr>
         <tr> <td> <p>TypeDog: <br /> Name: { myDogType.name } <br /> Age:{ myDogType.age } </p></td></tr>
         <td>
            <p>TypeDogArray:</p>
            <ul>
              {dogs.map((dog, index) => (
                <li key={index}>
                  Name: { dog.name }, Age: { dog.age }
                </li>
              ))}
            </ul>
          </td>
          <tr> <td> <p>Removed from array : { lastDogArray.name }</p></td></tr>
          <tr> <td> <p>Look at my Otter : { myOtter.getName() } he was born on {myOtter.getBorn().toDateString()} </p></td></tr>
      </table>
    </div>
  );
}

export default App;