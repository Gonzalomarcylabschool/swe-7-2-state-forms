import { useState } from 'react';
import Header from './components/Header';
import PicturesList from './components/PicturesList';
import NewPetForm from './components/NewPetForm';
import './App.css';

const getId = ((id = 0) => () => ++id)();

const initPictures = [
  { id: getId(), src: './images/cat.jpeg', caption: 'meow' },
  { id: getId(), src: './images/dog.jpeg', caption: 'arf' },
  { id: getId(), src: './images/duck.jpeg', caption: 'quack' },
]

const App = () => {
  const [pictures, setPictures] = useState(initPictures);

  const addPicture = (src, caption) => {
     setPictures([...pictures, { id: getId(), src, caption }]);
  }
  return (
    <>
      <Header />
      <NewPetForm addPicture={addPicture}/>
      <PicturesList pictures={pictures}/>
    </> 
  );
};

export default App;