import React from 'react';

function GithubBtn(props) {

return( 
  <div className="githubBtn">
<button><a href={props.link} 
           target='_blank' 
           rel="noopener noreferrer"
           > {props.text} </a> </button>
  </div>
  )
}

export default GithubBtn