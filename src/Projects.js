import React from 'react';
import GithubBtn from './GithubBtn'

function Projects() {

  return (
    <div className="projects">
      <h1> P R O J E C T S</h1>
      <p>
Here are some of my projects:
</p>
<ul>
  <li>mythOS - <GithubBtn link="https://github.com/milesjamz/mythosfrontend"/></li>
  <li>brew review - <GithubBtn link="https://github.com/milesjamz/mod4frontend"/></li>
  <li>bibliotecha - <GithubBtn link="https://github.com/milesjamz/bibliotecha"/></li>
  <li>hypochondriapp - <GithubBtn link='https://github.com/milesjamz/hypochondriapp'/></li>
</ul>
    </div>
  );
}

export default Projects;