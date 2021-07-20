import React from 'react';
import GithubBtn from './components/GithubBtn'
import Video from './Video'

function ProjectContainer(props) {

const showTechs = techs =>{
    console.log(techs)
    return techs.map((tech, index) => {
    if (index !== techs.length-1) {
    return `${tech}, `
    }
    else {  return `${tech}` }
    })
}
// console.log(`./images/${props.project.image}`)

return(
<div className="projContainer" >
        {/* <img src={require(`./images/${props.project.image}`).default} alt={props.project.name} height="15%" width="15%"/> */}
        <br />
        <div className="projText" >
        <strong >{props.project.name}</strong> <br/> <i>{props.project.description}</i>
        <p>Tech used:{showTechs(props.project.techUsed)}</p>
        <GithubBtn text={props.project.link1[1]} 
                   link={props.project.link1[0]}/>
        {props.project.link2 ?
        <GithubBtn text={props.project.link2[1]} 
        link={props.project.link2[0]}/> : null}
        <Video film={props.project.videoLink[1]}/>        
        </div>
</div>
    )
}

export default ProjectContainer