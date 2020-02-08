import React from 'react';

function Projects() {

  const githubBtn = link => {
    <div>
    <li><button><a href="link" target="_blank">github</a></button></li>
    </div>
  }

  return (
    <div className="projects">
      <h1> P R O J E C T S</h1>
      <p>
Here are some of my projects:
</p>
<ul>
  <li>mythOS - <button> <a href='https://github.com/milesjamz/mod4frontend' 
                           target="_blank">github</a> </button> </li> 
  <li>brew review - <button> <a href='https://github.com/milesjamz/mod4frontend' 
                           target="_blank">github</a> </button></li>
  <li>bibliotecha - <button> <a href='https://github.com/milesjamz/bibliotecha' 
                           target="_blank">github</a></button></li>
  <li>hypochondriapp - <button> <a href='https://github.com/milesjamz/hypochondriapp' 
                           target="_blank">github</a></button></li>
{githubBtn('hypochondriapp')}
</ul>
    </div>
  );
}

export default Projects;