import React, { Component } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import { geoAlbersUsa, geoPath } from 'd3-geo';
import usDataJSON from './USMap1.js';
import object1 from './state1';
import usGeo1 from './gz_2010_us_outline_500k.js';
console.log('data: ', usDataJSON);
import './USMap1.css';
let first = {
  "type": "LineString",
  "coordinates": [
      [
          -101.744384,
          39.32155
      ],
      [
          -101.552124,
          39.330048
      ],
      [
          -101.403808,
          39.330048
      ],
      [
          -101.332397,
          39.364032
      ],
      [
          -101.041259,
          39.368279
      ],
      [
          -100.975341,
          39.304549
      ],
      [
          -100.914916,
          39.245016
      ],
      [
          -100.843505,
          39.164141
      ],
      [
          -100.805053,
          39.104488
      ],
      [
          -100.491943,
          39.100226
      ],
      [
          -100.437011,
          39.095962
      ],
      [
          -100.338134,
          39.095962
      ],
      [
          -100.195312,
          39.027718
      ],
      [
          -100.008544,
          39.010647
      ],
      [
          -99.865722,
          39.00211
      ],
      [
          -99.684448,
          38.972221
      ],
      [
          -99.51416,
          38.929502
      ],
      [
          -99.382324,
          38.920955
      ],
      [
          -99.321899,
          38.895308
      ],
      [
          -99.113159,
          38.869651
      ],
      [
          -99.0802,
          38.85682
      ],
      [
          -98.822021,
          38.85682
      ],
      [
          -98.448486,
          38.848264
      ],
      [
          -98.206787,
          38.848264
      ],
      [
          -98.020019,
          38.878204
      ],
      [
          -97.635498,
          38.873928
      ]
  ]
};

export default class USMap1 extends Component {

  
  render() {
    const width = 960;
    const height = 500;
    let centered;

    const projection = geoAlbersUsa()
        .scale(1070)
        .translate([width / 2, height / 2]);

    const path = geoPath()
        .projection(null);

    console.log(path(first))

    return (
      <svg
        height={height}
        width={width}
      >
        <g transform={`translate(${width/2},${height/2})`}>
          <path
            className="first-path"
            d={path(first)}
          />
          <path
            className="first-path"
            d={path(usGeo1)}
          />
        </g>
      </svg>
    )
  }
}