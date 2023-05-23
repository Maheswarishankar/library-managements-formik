import React from 'react'
import BaseApp from '../Core/BaseApp'
import { useNavigate } from 'react-router-dom';
import { Appstate } from '../ContexAPI/AppProvider';
import { Card } from 'react-bootstrap';
import {Button} from '@mui/material';

function EnglishBook() {

    const {englishbook,setEnglishBook}=Appstate();
    const navigate = useNavigate();

    
  //Delete functionality...................................................

  const deleteEnglishlBook = (idx) => {
    const newlist = englishbook.filter((books) => books.id !== idx);
    setEnglishBook(newlist)
  }

  return (
    <BaseApp
    title='English Story Book'>
        <br></br>   <Button variant="contained" className="add-btn" onClick={() => navigate('/addenglishbooks')} >
        Add New Books
      </Button>

      <div className='card-set'>
        {
            englishbook && (
                englishbook?.map((e, idx) => (
                  <Card style={{ width: "18rem" }} key={idx}>
                    <Card.Img variant="top" className="img-set" src={e.image} />
                    <Card.Body>
                      <Card.Title>{e.book}</Card.Title>
                      <Card.Text>{e.author}</Card.Text>
                      <Card.Text>{e.releaseyear}</Card.Text>
                      <Card.Text>{e.description}</Card.Text>
    
                      {/* <Button variant="contained" color="success">View</Button>{" "} */}
                      <Button variant="contained" color="secondary" onClick={()=>navigate(`/editEnglishbook/${e.id}`)}>Edit</Button>{" "}
                      <Button variant="contained" color="error" onClick={() => deleteEnglishlBook(e.id)}>
                        Delete
                      </Button><br /> <br />
                    </Card.Body>
                  </Card>
                )
                ))
            }
          </div>
    </BaseApp>
  )
}

export default EnglishBook