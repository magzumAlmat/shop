import React, { useState,useEffect } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import rangeSlider from 'range-slider-input';
import 'range-slider-input/dist/style.css';
import { Slider, RangeSlider, Row, Col, InputGroup, InputNumber } from 'rsuite';
import Products from '../projects/Products';
import Product from '../projects/Product';
const valuesArr=[]
let productFilteredByPriceArr=[]

  function Example2({props}) {
    console.log('PROPS- ',props.products)

    
    let i = 0;


    for (let i = 0; i < props.products.length; i++) {
      console.log('props.products.price= ',props.products[i].price);
      valuesArr.push(Number(props.products[i].price))
      
    }

  
    console.log('Array values prices = ',typeof(valuesArr),valuesArr)


    const lowestValue = Math.min(...valuesArr);
    console.log('MIN= ',lowestValue)

    const highestValue = Math.max(...valuesArr);
    console.log('MAX= ',highestValue)


    productFilteredByPriceArr=[]
    const filterNow=( value1,value2 ) =>{
    
      
    console.log('filter now - ',value1,value2)
    let j=0
      
    for ( j = 0; j < props.products.length; j++) {
      //  console.log('props.products.price= ',props.products[j]);
      if (Number(props.products[j].price)>=value1 && Number(props.products[j].price)<=value2)
      {
        console.log('Number(props.products[j].price)' ,Number(props.products[j].price),'>=value1',value1,'<=value2',value2)
        
        productFilteredByPriceArr.push(props.products[j])

        // return(
        //   <>
        //  <Products productFromPriceFilter={productFilteredByPriceArr}
        //                 key={
        //                     productFilteredByPriceArr.id
        //                 }/>
        //   </>
        // )
        
        
      

      
      }} 


      console.log('productFilteredByPriceArr= ',productFilteredByPriceArr)
    }
  
      // console.log('111    ',productFilteredByPriceArr.price<=value1&&productFilteredByPriceArr.price)

      // return(
      //   <>
      //     <p>{productFilteredByPriceArr.name}</p>
      //   </>
      // )
    

  
    const [value, setValue] = React.useState([lowestValue, highestValue]);
    return (<>
      <Row>
          <RangeSlider
          max={highestValue}
          defaultValue={[lowestValue, highestValue]}
          constraint={([start, end]) => start <= lowestValue && end <=highestValue}
          value={value}
            onChange={value => {
              setValue(value)
            }}
        />

       
       
      </Row>
      <br /><br />
      <Row>
        <Col >
          <InputGroup>
            <InputNumber
              min={0}
              max={1000000}
              value={value[0]}
              onChange={nextValue => {
                const [start, end] = value;
                if (nextValue > end) {
                  return;
                }
                setValue([nextValue, end]);
              }}
            />
            <InputGroup.Addon>to</InputGroup.Addon>
            <InputNumber
              min={0}
              max={1000000}
              value={value[1]}
              onChange={nextValue => {
                const [start, end] = value;
                if (start > nextValue) {
                  return;
                }
                setValue([start, nextValue]);
              }}
            />
          </InputGroup>

        </Col>

        {filterNow(value[0],value[1])}

        
        
        </Row>
        </>
    );
  }
  



export default Example2