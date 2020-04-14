import React from 'react';
import Graph from './components/Graph';

function AboutMe() {

  const bioBlurb = "Full stack web developer with a love for telling stories through tech. Experienced in Rails, JavaScript and React/Redux, with a background in songwriting and recording. My passions include discovering compelling stories in data, and using technology to enhance, rather than reduce, our humanity."

  return (
    <div>
<div className="aboutContainer">
<br /><br />
<strong>About Me</strong>
<p id="blurb">
{bioBlurb}</p>
<strong>Skills</strong>
<ul id="skills">
<Graph />
</ul><br/>
<div id="socialLinks">
<strong>Links:</strong><br/>
<a href="http://www.github.com/milesjamz" target="_blank" rel="noopener noreferrer">github</a>
</div>
<br/><br/>

    </div>
  </div>
  );
}

export default AboutMe;