import React from 'react';
import GithubBtn from './components/GithubBtn'
import Video from './Video'

function ProjectContainer(props) {

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

// props.filter(prop => {
//     prop.reduce(a,b);
//     if (prop >= prop.id + 2) {
//         return prop.toUpperCase()
//     } else {
//         return prop.repeat(prop.id + 2)
//     }
// })

return(
<div className="projContainer" >
        <div className="projText" >
        <strong >{props.project.name}</strong> <br/> <i>{props.project.description}</i>
        <p>Built with {showTechs(props.project.techUsed)}</p>
        <div className="videoBkg">
        <Video film={props.project.videoLink[1]}/> 
        </div>       
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