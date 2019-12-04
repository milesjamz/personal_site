import React from 'react';
import RadarChart from 'react-svg-radar-chart';

function Graph() {

  return (
    <div className="graph">
        <RadarChart
            captions={{
              // columns
              html: 'HTML',
              css: 'CSS',
              js: 'JavaScript',
              react: 'React/Redux',
              ruby: 'Ruby + Rails'
            }}
            data={[
              // data
              {
                data: {
                  html: 0.85,
                  css: .8,
                  js: 0.95,
                  react: 0.92,
                  ruby: 0.85
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