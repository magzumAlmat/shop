import React, { Component } from 'react';
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

const valuesArr=[]
let productFilteredByPriceArr=[]

class FilterProductsByPrice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: [0, 0],
    };

    this.filterNow = this.filterNow.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setValues();
  }

  setValues() {
    for (let i = 0; i < this.props.products.length; i++) {
      valuesArr.push(Number(this.props.products[i].price))
    }

    const lowestValue = Math.min(...valuesArr);
    const highestValue = Math.max(...valuesArr);

    this.setState({
      value: [lowestValue, highestValue]
    });
  }

  filterNow(value1, value2) {
    productFilteredByPriceArr=[];

    for (let j = 0; j < this.props.products.length; j++) {
      if (Number(this.props.products[j].price)>=value1 && Number(this.props.products[j].price)<=value2) {
        productFilteredByPriceArr.push(this.props.products[j])
      }
    }

    console.log('productFilteredByPriceArr= ',productFilteredByPriceArr)
  }

  handleChange(value) {
    this.setState({ value: value });
    this.filterNow(value[0], value[1]);
  }

  render() {
    const { value } = this.state;
    const lowestValue = Math.min(...valuesArr);
    const highestValue = Math.max(...valuesArr);

    return (
      <>
        <Row>
          <RangeSlider
            max={highestValue}
            defaultValue={[lowestValue, highestValue]}
            constraint={([start, end]) => start <= lowestValue && end <=highestValue}
            value={value}
            onChange={this.handleChange}
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
                  this.handleChange([nextValue, end]);
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
                  this.handleChange([start, nextValue]);
                }}
              />
            </InputGroup>
          </Col>
          {this.filterNow(value[0], value[1])}
        </Row>
      </>
    );
  }
}

FilterProductsByPrice.propTypes = {
  products: PropTypes.array,
};



export default FilterProductsByPrice;
