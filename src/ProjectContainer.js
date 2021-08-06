import React from 'react';
import GithubBtn from './components/GithubBtn'
import TechBtn from './components/TechButton'
import {Link} from "react-router-dom";

function ProjectContainer(props) {

const showTechs = techs =>{
    // console.log(props)
    return techs.map((tech, index) => <TechBtn key={index} name={tech} /> )
}

// console.log(`./images/${props.project.image}`)

return(
<div className="projContainer" >
        <img src={require(`./images/${props.project.image}`).default} alt={props.project.name} height="15%" width="15%"/>
        <br />
        <div className="projText" >
        <strong>{props.project.name}</strong> <br/> <i>{props.project.description}</i>
        <p>Tech used:{showTechs(props.project.techUsed)}</p>
        <GithubBtn text={props.project.link1[1]} 
                   link={props.project.link1[0]}/>
        {props.project.link2 ?
        <GithubBtn text={props.project.link2[1]} 
        link={props.project.link2[0]}/> : null}
        <Link to={props.project.videoLink[0]}> <button>Video</button> </Link><br/>
        
        </div>
</div>
    )
}

export default ProjectContainer