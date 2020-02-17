import React from 'react';
import RadarChart from 'react-svg-radar-chart';

function Graph() {

  return (
    <div id="graphBox">
        <RadarChart
            captions={{
              // columns
              html: 'HTML',
              css: 'CSS',
              js: 'JavaScript',
              react: 'React/Redux',
              ruby: 'Ruby + Rails',
              bash: 'git/bash',
              postgresql: 'PostgreSQL'
            }}
            data={[
              // data
              {
                data: {
                  html: 0.9,
                  css: .77,
                  js: 0.85,
                  react: 0.99,
                  ruby: 0.90,
                  bash: .88,
                  postgresql: 0.78
                },
                meta: { color: 'navy' }
              },
            ]}
            size={300}
          />
    </div>
  );
}

export default Graph;