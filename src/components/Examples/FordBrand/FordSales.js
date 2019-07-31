import React, { Fragment } from 'react';

import CircleGauge from './CircleGauge.js';

import './Ford.css';

const sortMainCategories = (children, year) => {
  const copy = [...children];

  return copy.sort( (a, b) => {
    if ( (a[`${year}_total`] - b[`${year}_total`]) > 0 ) return -1;
    else if ( (a[`${year}_total`] - b[`${year}_total`]) < 0 ) return 1;
    else return 0;
  })
}

const lookupMainCategory = (children, category) => {
  for (let child of children) {
    if (child.name === category) {
      return child;
    }
  }
}

const FordSales = props => {
  const mainCategory = lookupMainCategory(props.data.children, props.category);
  const sortedCategories = sortMainCategories(props.data.children, props.year);

  const size = 200;
  
  return (
    <div 
      className={
        props.view === "landscape"
          ? "ford-sales-wrapper"
          : "ford-sales-portrait-wrapper"
      }
    >
    {
      props.category === "All"
        ? (
          <Fragment>

            <div className="ford-total-wrap">
              <p className="ford-total-p">
                {`${props.year} Total Sales`}
              </p>
              <p className="ford-total-p">
                {props.data[`${props.year}_rounded`]}
              </p>
            </div>

            <div className="ford-3circles-wrapper">
              {
                sortedCategories.map(item => (
                  <div 
                    className="ford-circle-wrapper"
                    key={item.name}
                  >
                    <p className="ford-circle-p">
                      {item.name}
                    </p>
                    <CircleGauge
                      name={item.name}
                      size={size}
                      actual={item[`${props.year}_total`]}
                    />
                  </div>
                ))
              }
            </div>

          </Fragment>
        )
        : (
          <Fragment>

            <div className="ford-total-wrap">
              <p className="ford-total-p">
                {`${props.year} ${props.category.slice(0, -1)} Sales`}
              </p>
              <p className="ford-total-p">
                {mainCategory[`${props.year}_rounded`]}
              </p>
            </div>

            <div className="ford-rankBy-wrapper">
              <button 
                className={
                  props.rankBy === "Yearly Increase"
                    ? "ford-button-active"
                    : "ford-button"
                }
                onClick={event => props.setRankBy(event.target.value)}
                value="Yearly Increase"
              >Yearly Increase</button>
              <button 
                className={
                  props.rankBy === "Sales Total"
                    ? "ford-button-active"
                    : "ford-button"
                }
                onClick={event => props.setRankBy(event.target.value)}
                value="Sales Total"
              >Sales Total</button>
            </div>

          </Fragment>
        )
    }
    </div> 
  ); 
};

export default FordSales;