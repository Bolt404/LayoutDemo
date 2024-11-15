import React from 'react';
import { DogClass } from '../objects/DogClass';

type ShowDogProps = {
    dog: DogClass;
  };
  
  const ShowDog: React.FC<ShowDogProps> = ({ dog }) => {
    return (
      <div>
        <p>Component showing DogClass : <br/> Dog Race: {dog.getRace()} <br/> Dog Age: {dog.getAge()}</p>
      </div>
    );
  };

export default ShowDog;