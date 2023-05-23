import React from 'react'
import BaseApp from '../Core/BaseApp'
import { Appstate } from '../ContexAPI/AppProvider'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import {Card} from 'react-bootstrap';

function TamilBook() {
    const {tamilbook,setTamilBook}=Appstate();
    const navigate = useNavigate();

    
  //Delete functionality...................................................

  const deleteTamilBook = (idx) => {
    const newlist = tamilbook.filter((books) => books.id !== idx);
    setTamilBook(newlist)
  }

  return (
    <BaseApp
    title="Tamil Books">
         <br></br>   <Button variant="contained" className="add-btn" onClick={() => navigate('/addTamilbooks')} >
        Add New Books
      </Button>

      <div className='card-set'>
        {
            tamilbook && (
                tamilbook?.map((e, idx) => (
                  <Card style={{ width: "18rem" }} key={idx}>
                    <Card.Img variant="top" className="img-set" src={e.image} />
                    <Card.Body>
                      <Card.Title>{e.book}</Card.Title>
                      <Card.Text>{e.author}</Card.Text>
                      <Card.Text>{e.releaseyear}</Card.Text>
                      <Card.Text>{e.description}</Card.Text>
    
                      {/* <Button variant="contained" color="success">View</Button>{" "} */}
                      <Button variant="contained" color="secondary" onClick={()=>navigate(`/editTamilbook/${e.id}`)}>Edit</Button>{" "}
                      <Button variant="contained" color="error" onClick={() => deleteTamilBook(e.id)}>
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

export default TamilBook