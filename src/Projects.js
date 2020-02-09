import React from 'react';
import GithubBtn from './GithubBtn'
import Mythos from './mythos1.png'
import Biblio from './bibliotecha1.png'
import Hypo from './hypochond1.png'
import BrewRev from './brewrev1.png'

function Projects() {

  return (
    <div className="projects">
      <h1> P R O J E C T S</h1>
      <p>
Here are some of my projects:
</p>
<ul>
  <li><img src={Mythos} alt='mythos' height="18%" width="18%"/>
  <strong>mythOS</strong> - innovative web app to explore Greek Mythology <GithubBtn link="https://github.com/milesjamz/mythosfrontend"/></li>
  <li><img src={BrewRev} alt='brew review' height="18%" width="18%"/>
  <strong>brew review</strong> - <GithubBtn link="https://github.com/milesjamz/mod4frontend"/></li>
  <li><img src={Biblio} alt='bibliotecha' height="18%" width="18%"/>
  <strong>bibliotecha</strong> - <GithubBtn link="https://github.com/milesjamz/bibliotecha"/></li>
  <li><img src={Hypo} alt='hypochondriapp' height="18%" width="18%"/>
  <strong>hypochondriapp</strong> - <GithubBtn link='https://github.com/milesjamz/hypochondriapp'/></li>
</ul>
    </div>
  );
}

export default Projects;