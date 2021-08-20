import React from 'react';
import GithubBtn from './components/GithubBtn'
import Video from './Video'

function ProjectContainer(props) {

/* <img src={require(`./images/${props.project.image}`).default} alt={props.project.name} height="15%" width="15%"/> */


const showTechs = techs =>{
    console.log(techs)
    if (techs.length === 1) {
    return techs
    } else if (techs.length === 2) {
        return `${techs[0]} & ${techs[1]}`
    } else {
    return techs.map((tech, index) => {
    if (index !== techs.length-1) {
    return `${tech}, `
    }
    else {  return ` & ${tech}` }
    })
}
}
// console.log(`./images/${props.project.image}`)

return(
<div className="projContainer" >
        <div className="projText" >
        <strong >{props.project.name}</strong> <br/> <i>{props.project.description}</i>
        <p>Built with {showTechs(props.project.techUsed)}</p>
        <Video film={props.project.videoLink[1]}/>        
        </div>
        <br/>
        Find it on GitHub:
        <GithubBtn text={props.project.link1[1]} 
                   link={props.project.link1[0]}/>
        {props.project.link2 ?
        <GithubBtn text={props.project.link2[1]} 
        link={props.project.link2[0]}/> : null}
</div>
    )
}

export default ProjectContainer