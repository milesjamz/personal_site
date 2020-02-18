import React from 'react';
import RadarChart from 'react-svg-radar-chart';

function Graph() {


  const defaultOptions = {
    axes: true, // show axes?
    scales: 2, // show scale circles?
    captionMargin: 10,
    dots: false, // show dots?
    zoomDistance: 1.1, // where on the axes are the captions?
    setViewBox: (options) => `-${options.captionMargin} 0 ${options.size + options.captionMargin * 2} ${options.size}`, // custom viewBox ?
    axisProps: () => ({ className: 'axis' }),
    scaleProps: () => ({ className: 'scale', fill: 'none' }),
    shapeProps: () => ({ className: 'shape' }),
    captionProps: () => ({
      className: 'caption',
      textAnchor: 'middle',
      fontSize: 9,
      fontFamily: 'sans-serif'
    }),
    dotProps: () => ({
      className: 'dot',
      mouseEnter: (dot) => { console.log(dot) },
      mouseLeave: (dot) => { console.log(dot) }
    })
  }

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
                meta: { color: 'lightblue' }
              },
            ]}
            size={300}
            options={defaultOptions}
          />
    </div>
  );
}

export default Graph;