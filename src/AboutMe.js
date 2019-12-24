import React from 'react';
// import RilloOne from './rini1.jpg'
    // <img className="aboutMePic" src={RilloOne} alt='the man himshelf' height='29%' width='29%' />
import MeHoney from './mehoney.jpg'
function AboutMe() {

  const plee = hmm => {
    const mySong = new Audio('./Pastry.mp3')
    console.log(typeof mySong )
    mySong.play()
  }

  return (
    <div className="aboutme">
      <button onClick={() => plee()} >Play a little summin summin</button><br/>
      hey hey hey, dis me eebeeet mee<br/>
      Also i'm great<br/>
      in addition quite nice<br/>
      moreover, superb<br/>
      i can also say very sweet<br/>
      mama mia, mama mia let me go<br/>
      ha hah a<br/>
      do  dodododo<br/>
      hey hey hey, dis me eebeeet mee<br/>
      Also i'm great<br/>
      in addition quite nice<br/>
      moreover, superb<br/>
      i can also say very sweet<br/>
      f i n i s<br/> 
      <img src={MeHoney} alt='hehe' height='18%' width='18%' />
    </div>
  );
}

export default AboutMe;