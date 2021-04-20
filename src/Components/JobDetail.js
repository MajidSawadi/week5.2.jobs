import React from 'react'
import {useParams} from "react-router-dom"
import{useState , useEffect} from 'react'
import { Container ,Spinner} from 'react-bootstrap';

const JobDetail=()=> {
  const { id } = useParams();
  const [job, setJob] = useState({});
 
  useEffect(() => {
   async function fetchDate(){
     const respo=await fetch("http://localhost:3001/jobs/" +id);
     const json =await respo.json();
     setJob(json);
     console.log(json);
    }
      fetchDate();

  }, [])

  if(!job.title) return <Spinner animation="grow" />;
   
    return <Container>
      <h1>{job.title}</h1>
      <h6> {job.description}</h6>
      <h4>Salary: {job.salary}</h4>
      
    </Container>;
  };

export default JobDetail;
