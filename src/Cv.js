import React from 'react';
import Graph from './Graph'
import Resume from './marilloresumepdf.pdf'
import Resume2 from './milesmarilloresume.docx'

function CV() {
  return (
    <div className="cv">
      MILES MARILLO'S CV
      {Resume2}
<Graph />
    </div>
  );
}

export default CV;