import React from 'react';
import FlavorText from './flavor-text';
import { FaPray } from 'react-icons/fa';

const Home = (props) => <>
  <section id="home">
    <h1><FaPray/> Who is Dr. Bill Burks?</h1>
    
<p>Dr. Bill Burks of Fort Worth Texas provides both audio, and textual sermons. Pastor Bill Burks's ministry is varied. He has taught Sabbath school and delights in explaining Bible principles.  He has studied Greek and Hebrew and enjoys sharing insights from both languages.</p>
    
<p>He prays for people and preaches in a way that even children can understand the gospel message. He can bring concepts of faith down to their level and still keep the interest of their parents.</p>
    
<p>He has gone out of his way to assist folks when necessary and works with church leaders to present a united front to the community.  He has the skills from his secular job to reach people with the Word of God.   He adheres to sound doctrine and can explain where cults may deviate from the simple New Testament faith of the time of Jesus Christ.   One leader at our church conference summed him up in just two words one year:  "Good thinker."</p>
    <FlavorText book="Psalm" chapter="37" verse="39" text="But the salvation of the righteous is of the LORD"/>
  </section>
</>


export default Home;
