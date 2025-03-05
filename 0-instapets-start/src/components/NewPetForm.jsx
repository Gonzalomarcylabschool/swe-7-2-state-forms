
import { useState } from "react";
const NewPetForm = ({ addPicture }) => {
  const [src, setSrc] = useState('');
  const [caption, setCaption] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addPicture(src, caption);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="src-input">Image Source:</label>
      <input 
      type="text" 
      name="src" 
      id="src-input" 
      onChange={(e)=> {
        
        // console.log(e.target.value);
        console.log(src);
        setSrc(e.target.value);
      }}/>

      <label htmlFor="caption-input">Caption:</label>
      <input type="text" name="caption" id="caption-input" onChange={(e) => {setCaption(e.target.value)}}/>
      <button>Submit</button>
    </form>
  )
}

export default NewPetForm;