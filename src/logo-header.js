import React from 'react';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
const LogoHeader = (props) =>  <Jumbotron> 
    <Image src="logo.png" className="rounded float-left mr-3 " alt="Dr. Bill Burks"/>
    <h1 className="text-left" >Dr. Bill Burks</h1>
</Jumbotron>
export default LogoHeader;
