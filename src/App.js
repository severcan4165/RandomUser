import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import emailSvg from "./assets/email.svg";
import locationSvg from "./assets/location.svg";
import phoneSvg from "./assets/phone.svg";

function App() {
  const [getData, setGetData] = useState([])

  const getUsers = async () =>{
    const url = "https://randomuser.me/api/";
    try {
      const {data} = await axios(url);
      const userInfo = data.results[0];
      setGetData(userInfo);
    
      
    } catch (error) {
      console.log(error);
    }
    
  }
useEffect(() => {
  getUsers();
  console.log("mount")
}, [])

const{name, location, email, picture, dob, registered, phone} = getData;

console.log(getData);
 
  return (

  <Container className="mt-5 w-50 bg-info p-3 rounded-4">
    <Container>
        <div className="d-flex  my-4">
           <img className="me-5" src={picture?.large} alt="" width="200px" style={{borderRadius:"0.8rem"}}/>
           <h1 className="display-4">{name?.title} {name?.first} {name?.last}</h1>
        </div>
        <div className="d-flex  my-4">
          <img className="me-5" src={emailSvg} alt="" width="70px"/>
          <p className="display-6">{email}</p>
        </div>
        <div className="d-flex  my-4">
          <img className="me-5" src={phoneSvg} alt="" width="70px"/>
          <p className="display-6">{phone}</p>
        </div>
        <div className="d-flex  my-4">
          <img className="me-5" src={locationSvg} alt="" width="70px"/>
          <p className="display-6">{location?.city}</p>
        </div>
        <div className="text-center">
          <p className="display-6">Age:{dob?.age}</p>
        </div>
        <div className="text-center">
          <p className="display-6">Register Date:{registered?.date}</p>
        </div>
    </Container>
      <Container className="text-center my-5">
        <Button onClick ={()=>getUsers()} className="btn btn-success">Get Random User</Button>
      </Container>
     
  </Container>
 
 
  );
}

export default App;
