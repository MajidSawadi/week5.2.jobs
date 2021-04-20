import React from 'react'
import {Link} from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import {useState, useEffect} from 'react'

function JobList() {

    const [joblidst, setJoblist]=useState([]);
    const dbUrl =process.env.REACT_APP_BACKEND_SERVER_URL;
    useEffect(() => {
     const fetchdata=async ()=>{
        const respo= await fetch("http://localhost:3001/jobs");
        const json=await  respo.json();
        setJoblist(json);
     }
     fetchdata();
    }, [])
    return (
        <Container>
            {joblidst.map((j)=>{
                return(
    <Card className="mb-3" >
 
  <Card.Body>
    <Card.Title>{j.title}</Card.Title>
    <Card.Img variant="top" src={j.img} />
    <Card.Text>
      {j.description}
    </Card.Text>
    <Card.Text>
      {j.city}
    </Card.Text>
    <Button variant="white"> <Link to={`/jobs/${j.id}`}>More Details</Link></Button>
  </Card.Body>
</Card>
             ); 
})}
           

        </Container>
           
        
    );
}

export default JobList;
