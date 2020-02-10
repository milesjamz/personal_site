import React from 'react';

function githubBtn(props) {
  return (
    <button><a href={props.link} target="_blank">{props.text}</a></button>
  );
}

export default githubBtn;