import React from 'react';
import ProjectContainer from './ProjectContainer.js'


function Projects() {

  const projects = [
    {name:'mythOS',
     image:'mythos1.png',
     description:"Explore Greek mythology using maps and data visualization",
     link1:["https://github.com/milesjamz/mythosfrontend", "front end"],
     link2:["https://github.com/milesjamz/mythosbackend", "API"],
     videoLink:['/mythos', 'mythostest.mov'],
     techUsed:["React", "Rails", "d3", "Google Maps API", "JWT Auth", "bCrypt"]
    },{name:'Brew Review',
    image:'brewrev1.png',
    description:"Discover, rate, and review American breweries",
    link1:["https://github.com/milesjamz/mod4frontend", "front end"],
    link2:["https://github.com/adisagir/BreweriesUSA-backend", "API"],
    videoLink:['/hypochondriapp', 'mythostest.mov'],
    techUsed:["React", "Rails", "External APIs", "JWT Auth", "bCrypt"]
    },{name:'BiblioTecha',
    image:'bibliotecha1.png',
    description:"Create, stock, and save your own illustrated personal library",
    link1:["https://github.com/milesjamz/bibliotecha", "front end"],
    link2:["https://github.com/milesjamz/bibliotecha_backend", "API"],
    videoLink:['/bibliotecha', 'bibliotechatest.mov'],
    techUsed:["Vanilla JS", "Rails"]
    },{name:'HypochondriAPP',
    image:'hypochond1.png',
    description:"Explore medical data analytics in humorous, text-driven, gamified setting",
    link1:["https://github.com/milesjamz/bibliotecha", "CLI App"],
    videoLink:['/hypochondriapp','hypochondemo.mov'],
    techUsed:["Ruby", "Faker", "TTY"]
    }
  ]

  const makeTheProjects = data => {
    return data.map((proj, index) => <ProjectContainer key={index} 
                                                       project={proj}
                                                       numbah={index} /> )
  }

  return (
    <div className="projects">
<ul>
{makeTheProjects(projects)}
</ul>
    </div>
  );
}

export default Projects;