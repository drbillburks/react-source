import React from 'react';
import { FaBook, FaPray, FaPodcast, FaBookOpen } from 'react-icons/fa';

const Navigation = (props) => <div className="row">
  <div className="col">
    <a href="#home"><FaPray/>Home</a>
</div>
  <div className="col">
  <a href="#papers"><FaBook/> Papers</a>
</div>
  <div className="col">
   <a href="#podcast"><FaPodcast/> Podcast</a>
</div>
  <div className="col">
   <a href="#testimony"><FaBookOpen/>
    Testimony</a>
</div>
</div>;

export default Navigation;
