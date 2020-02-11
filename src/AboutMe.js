import React from 'react';
import Graph from './Graph'
import {
  Link
} from "react-router-dom";

function AboutMe() {

  const skills = ['JavaScript','Ruby','HTML','CSS','React','Rails','JWT Auth','git','RESTful APIs','Postgres', 'Node']

  return (
    <div className="aboutme">
<p>Full stack web developer with a love for telling stories through tech. Experienced in Rails, 
  JavaScript and React/Redux, with a background in songwriting and recording. My passions include 
  discovering compelling stories in data, and using technology to enhance, rather than reduce, our 
  humanity.
</p>
<ul>
Skills
{skills.map(skill => <li>{skill}</li>)}
</ul>
<br/><br/>
<Graph />
<Link to='/cv'>View my Resume </Link>
    </div>
  );
}

export default AboutMe;