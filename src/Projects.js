import React from 'react';
import ProjectContainer from './ProjectContainer.js'


function Projects() {

  const projects = [
    {name:'mythOS',
     image:'mythos1.png',
     description:"innovative web app to explore Greek Mythology",
     link1:["https://github.com/milesjamz/mythosfrontend", "front end"],
     link2:["https://github.com/milesjamz/mythosbackend", "API"],
     techUsed:["React", "Rails", "d3", "Google Maps API", "JWT Auth", "bCrypt"]
    },{name:'Brew Review',
    image:'brewrev1.png',
    description:"full stack web app for users to review breweries",
    link1:["https://github.com/milesjamz/mod4frontend", "front end"],
    link2:["https://github.com/adisagir/BreweriesUSA-backend", "API"],
    techUsed:["React", "Rails", "External APIs", "JWT Auth", "bCrypt"]
    },{name:'BiblioTecha',
    image:'bibliotecha1.png',
    description:"Vanilla JS app that allows you to create virtual libraries and books",
    link1:["https://github.com/milesjamz/bibliotecha", "front end"],
    link2:["https://github.com/milesjamz/bibliotecha_backend", "API"],
    techUsed:["Vanilla JS", "Rails"]
    },{name:'HypochondriAPP',
    image:'hypochond1.png',
    description:"Ruby Driven CLI game that allows you to get sick and be healed",
    link1:["https://github.com/milesjamz/bibliotecha", "CLI App"],
    techUsed:["Ruby", "Faker", "TTY"]
    }
  ]

  const makeTheProjects = data => {
    return data.map((proj, index) => <ProjectContainer key={index} project={proj}/> )
  }

  return (
    <div className="projects">
      P R O J E C T S
      <p>
Here are some of my projects:
</p>
<ul>
{makeTheProjects(projects)}
</ul>
    </div>
  );
}

export default Projects;