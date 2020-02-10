import React from 'react';
import GithubBtn from './GithubBtn'
import TechBtn from './TechButton'

function ProjectContainer(props) {

const showTechs = techs =>{
    return techs.map((tech, index) => <TechBtn key={index} name={tech} /> )
}


return(
<div className="projContainer">
{console.log(props.project)}
    <li>
        <img src={require(`./images/${props.project.image}`)} alt={props.project.name} height="18%" width="18%"/>
        <strong>{props.project.name}</strong> - {props.project.description} 
        <GithubBtn text={props.project.link1[1]} 
                   link={props.project.link1[0]}/>
        {props.project.link2 ?
        <GithubBtn text={props.project.link2[1]} 
        link={props.project.link2[0]}/> : null}
        {showTechs(props.project.techUsed)}
</li>
</div>
    )
}

export default ProjectContainer