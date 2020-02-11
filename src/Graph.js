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
              js: 'Vanilla JavaScript',
              react: 'React/Redux',
              ruby: 'Ruby + Rails'
            }}
            data={[
              // data
              {
                data: {
                  html: 0.9,
                  css: .77,
                  js: 0.85,
                  react: 0.99,
                  ruby: 0.90
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