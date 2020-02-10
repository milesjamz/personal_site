import React from 'react';
import MeHoney from './images/mehoney.jpg'
function AboutMe() {

  const plee = hmm => {
    const mySong = new Audio('./Pastry.mp3')
    mySong.play()
  }

  return (
    <div className="aboutme">
      <button onClick={() => plee()} >Play a little summin summin</button><br/>
<h2>MILES MARILLO</h2>
I'm just a swell guy in a wonderful world.<br/>
Ain't my wife a beaut?
<br/><br/>
      <img src={MeHoney} alt='hehe' height='100%' width='50%' />
    </div>
  );
}

export default AboutMe;