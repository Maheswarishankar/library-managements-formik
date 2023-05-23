import React from 'react'
import BaseApp from '../Core/BaseApp';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Appstate } from '../ContexAPI/AppProvider';



function Moivation() {
  const {motivation,setMotivation}=Appstate();
  const navigate = useNavigate();

  //Delete functionality...................................................

  const deleteMotivation = (idx) => {
    const newlist = motivation.filter((books) => books.id !== idx);
    setMotivation(newlist)
  }

  return (
    <BaseApp
      title='Motivation Books'>
      <br></br>   <Button variant="contained" className="add-btn" onClick={() => navigate('/add/motivation')} >
        Add New Books
      </Button>

      <div className='card-set'>
        {
          motivation && (
            motivation?.map((e, idx) => (
              <Card style={{ width: "18rem" }} key={idx}>
                <Card.Img variant="top" className="img-set" src={e.image} />
                <Card.Body>
                  <Card.Title>{e.book}</Card.Title>
                  <Card.Text>{e.author}</Card.Text>
                  <Card.Text>{e.releaseyear}</Card.Text>
                  <Card.Text>{e.description}</Card.Text>

                  {/* <Button variant="contained" color="success">View</Button>{" "} */}
                  <Button variant="contained" color="secondary" onClick={()=>navigate(`/edit/motivation/${e.id}`)}>Edit</Button>{" "}
                  <Button variant="contained" color="error" onClick={() => deleteMotivation(e.id)}>
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

export default Moivation