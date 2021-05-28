import React from 'react';
import Graph from './components/Graph';

function AboutMe() {

  const bioBlurb = "More TK"

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