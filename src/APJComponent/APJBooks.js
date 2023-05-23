import React from 'react'
import BaseApp from '../Core/BaseApp'
import { Appstate } from '../ContexAPI/AppProvider'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import {Card} from 'react-bootstrap';


function APJBooks() {
const {APJBooks,setAPJBooks}=Appstate();
  const navigate = useNavigate();

  const deleteABJBooks = (idx)=>{
    const newlist = APJBooks.filter((books)=>books.id !== idx)
    // console.log(newlist);
    setAPJBooks(newlist);

  }
  return (
    <BaseApp
    title="APJ.Abdulkalam Books">
        <br></br>   <Button variant="contained" className="add-btn" onClick={() => navigate('/add/apjbooks')} >
        Add New Books
      </Button>
       <div className='card-set'>
        {
          APJBooks && (
            APJBooks?.map((e, idx) => (
              <Card style={{ width: "18rem" }} key={idx}>
                <Card.Img variant="top" className="img-set" src={e.image} />
                <Card.Body>
                  <Card.Title>{e.book}</Card.Title>
                  <Card.Text>{e.author}</Card.Text>
                  <Card.Text>{e.releaseyear}</Card.Text>
                  <Card.Text>{e.description}</Card.Text>

                  {/* <Button variant="contained" color="success">View</Button>{" "} */}
                  <Button variant="contained" color="secondary" onClick={()=>navigate(`/editabjbooks/${e.id}`)}>Edit</Button>{" "}
                  <Button variant="contained" color="error" onClick={() => deleteABJBooks(e.id)}>
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

export default APJBooks