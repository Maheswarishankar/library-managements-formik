import React, { useEffect, useState } from 'react'
import BaseApp from '../Core/BaseApp'
import { useNavigate, useParams } from 'react-router-dom'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Appstate } from '../ContexAPI/AppProvider';




function EditMotivation() {
  const {motivation,setMotivation} = Appstate();
  
  const [idx, setIdx] = useState("");
  const [image, setImage] = useState("");
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [releaseyear, setReleaseYear] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const { id } = useParams()

  const selectedID = motivation.find((book) => book.id === id);

  useEffect(() => {
    setIdx(selectedID.id);
    setImage(selectedID.image);
    setBook(selectedID.book);
    setAuthor(selectedID.author);
    setReleaseYear(selectedID.releaseyear);
    setDescription(selectedID.description);
  }, [])


  const UpdateBooks = () => {

    //collecting the new data
    const editindex = motivation.findIndex(book => book.id === id);

    //changed data in inputfield 
    const editBooks = {
      id: idx,
      image,
      book,
      author,
      releaseyear,
      description,
    }
    //update the books 
    motivation[editindex] = editBooks
    setMotivation([...motivation]);
    navigate('/motivation')
    alert("Update successfully")
  }

  return (
    <BaseApp
      title="Edit the New Book">
      <form className='text-areas'>

        <TextField
          variant="outlined"
          label="ID"
          value={idx}
          onChange={(e) => (setIdx(e.target.value))}
        />
        <TextField
          variant="outlined"
          label="Image-URL"
          value={image}
          onChange={(e) => (setImage(e.target.value))}
        />

        <TextField
          variant="outlined"
          label="Name of the Book"
          value={book}
          onChange={(e) => (setBook(e.target.value))}
        />

        <TextField
          variant="outlined"
          label="Author"
          value={author}
          onChange={(e) => (setAuthor(e.target.value))} />

        <TextField
          variant="outlined"
          label="ReleaseYear"
          value={releaseyear}
          onChange={(e) => (setReleaseYear(e.target.value))} />

        <TextField
          variant="outlined"
          label="Description"
          value={description}
          onChange={(e) => (setDescription(e.target.value))} />

        <Button variant="contained" className='add-submit'
          onClick={UpdateBooks}
        >

          update
        </Button>
      </form>

    </BaseApp>
  )
}


export default EditMotivation