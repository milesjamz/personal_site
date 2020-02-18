import React from 'react';
import Graph from './components/Graph';

function AboutMe() {

  const bioBlurb = "Full stack web developer with a love for telling stories through tech. Experienced in Rails, JavaScript and React/Redux, with a background in songwriting and recording. My passions include discovering compelling stories in data, and using technology to enhance, rather than reduce, our humanity."

  const skills = ['JavaScript','Ruby','HTML','CSS','React','Rails','JWT Auth','git','RESTful APIs','Postgres', 'Node']

  return (
    <div className="aboutme">
<div className="aboutContainer">
<p id="blurb">
<strong>About Me</strong>
<br /><br />
{bioBlurb}</p>
<ul id="skills">
<strong>Skills</strong>
<p>{skills.map((skill, index) => <li key={index}>{skill}</li>)}</p>
</ul><br/>
<Graph />
<div id="socialLinks">
<strong>Links:</strong><br/>
<a href="http://www.linkedin.com/in/milesjamz" target="_blank" rel="noopener noreferrer">linkedin</a>
<br />
<a href="http://www.github.com/milesjamz" target="_blank" rel="noopener noreferrer">github</a>
</div>
<br/><br/>

    </div>
  </div>
  );
}

export default AboutMe;