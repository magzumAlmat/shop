import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import Product from "./Product";
import Pagination from "./Pagination";
import Spinner from "../layout/Spinner";
import { Container, Row, Col } from "reactstrap";

import { Nav, NavItem, NavLink, Button } from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import {
  Collapse,
  Navbar,List,
  NavbarToggler,
  NavbarBrand,
  Text,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,CardImg,
  DropdownItem,Card,CardBody,CardTitle,CardSubtitle,CardText,CardLink,CardGroup
} from "reactstrap";
import { Link } from "react-router-dom";

import Products from "./Product";
class ProductCardstable extends Component {
  state = {
    products: [],
    pageOfItems: [],
    checked:false,
    data:[],
    pcat:[]
  };

  
  componentWillReceiveProps(nextProps) {
    this.setState({ products: nextProps.products });
    console.log(this.state.data)
  }

  onChangePage = (pageOfItems) => this.setState({ pageOfItems: pageOfItems });

  selectCategory = (e, props, state,pcat) => {
    console.log('Category selected = ',e.target.value);

    this.setState({ pickedCategory: [] });
    this.setState({ pickedCategory: pcat });

    // this.setState({
    //   pickedCategory: ''
    // });
  };

  // getFilteredProducts(pickedCategory) {
  //   console.log('Я внутри getFilteredProduycts------------------------------------------')
  //   console.log(' '  ,this.state.pickedCategory)

  //   const filter = this.props.filter;

  //   console.log(this.state.pageOfItems)

  //   // console.log('------------------------------------------')
  //   // console.log('вывод ',(this.state.pageOfItems))
  //   // console.log('------------------------------------------')

  //   const filteredProducts = this.state.pageOfItems.map(obj => {
  //   const filtered = Object.values(obj.Category.value)
  //       let concatedArray=[]
  //       let buffer=''
  //       // console.log('Filtered до цикла  ', filtered)

  //       if (!filtered==null){
  //         console.log('filtered is null', filtered)

  //       }
  //       else{ buffer = filtered.join('')}

  //       concatedArray.push(buffer,obj)

  //       // console.log('buffer ',buffer)
  //       // console.log('obj',obj)

  //       console.log('  pickedCategory  ---- ', this.state.pickedCategory)
  //       if (buffer===this.state.pickedCategory.toString()){
  //         this.state.newArray.push(concatedArray[1])
  //         console.log('GG '  ,this.state.newArray)}

  //       if (filtered.length === 0) return null;
  //     })

  getFilteredProducts(pickedCategory) {
    console.log('this is pickedCategory=  ',pickedCategory)
    this.state.newArray = [];
    const filter = this.props.filter;
    console.log(this.state.pageOfItems)
    console.log('------------------------------------------')
    console.log('вывод ',(this.state.pageOfItems))
    console.log('------------------------------------------')
    const filteredProducts = this.state.pageOfItems.map((obj) => {
      const filtered = Object.values(obj.Category.value);
      let concatedArray = [];
      let buffer = "";
      console.log('Filtered до цикла  ', filtered)
      buffer = filtered.join("");
      concatedArray.push(buffer, obj);
      console.log('buffer ',buffer)
      console.log('obj',obj)
      console.log("3 pickedCategory is ", pickedCategory);
      if (buffer === this.state.pickedCategory.toString()) {
        this.state.newArray.push(concatedArray[1]);
        console.log("4 NewArray -  ", this.state.newArray);
      }
      // if (newArray.length === 0) return <p>Выберите категорию товара</p>;
    });

    return (
      <>
        {this.state.newArray.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </>
    );
  }

  handleCheckboxChange = (event) =>
    this.setState({ checked: event.target.checked });
   
  
  render() {

    const Checkbox = (props) => <input type="checkbox" {...props} />;

    const { products } = this.state;


    if (products.length > 0) {
      return (
        <>
          <Container style={{ "padding-left": "0px" }}>
            <br />
          <Nav onClick={this.selectCategory}>
            
              <NavItem>
                <Button value='dplatya' color="secondary" size="sm">
                Платья
                </Button>{" "}
              </NavItem>
              
              <NavItem>
                <Button value="dbruki" color="secondary" size="sm">
                  Брюки
                </Button>{" "}
              </NavItem>
              <NavItem>
                <Button value="dkofty" color="secondary" size="sm">
                Кофты
                </Button>{" "}
              </NavItem>
              <NavItem>
                <Button value="daccessories" color="secondary" size="sm">
                Аксессуары
                </Button>{" "}
              </NavItem>
              <NavItem>
                <Button value="dfootbolki" color="secondary" size="sm">
                  НАУШНИКИ
                </Button>{" "}
              </NavItem>
              <NavItem>
                <Button value="dkurtki" color="secondary" size="sm">
                  Куртки
                </Button>{" "}
              </NavItem>
              <NavItem>
                <Button value="dshorty" color="secondary" size="sm">
                  Шорты
                </Button>
              </NavItem>
              <NavItem>
              <NavItem>
                <Button value="dsportkostymy" color="secondary" size="sm">
                  Спортивные костюмы
                </Button>
              </NavItem>
              </NavItem>
            </Nav>
          </Container>{" "}
          <br />
          <Container>
            <Row >
              <Col xs="2" >
                <div className="verticleLine" >
                
                  <span>Цена</span>
                  <br />  
                  <label>
                    <Checkbox
                      checked={this.state.checked}
                      onChange={this.handleCheckboxChange}
                    />
                    <span>50 000 - 99 999 Т</span>
                  </label>

                  <br />
                </div>
              </Col>
              <Col xs="10">
                <Row>
                  {/* {this.state.pageOfItems.map(product => (
            
                <Product product={product} key={product.id}  />

            ))} */}




                  {this.state.pickedCategory === "dplatya" ? (
                    this.getFilteredProducts()
                  ) : this.state.pickedCategory === "dbruki" ? (
                    this.getFilteredProducts()
                  ) : this.state.pickedCategory === "drubashki" ? (
                    this.getFilteredProducts()
                  ) : this.state.pickedCategory === "daccessories" ? (
                    this.getFilteredProducts()
                  ) : this.state.pickedCategory === "dfootbolki" ? (
                    this.getFilteredProducts()
                  ) : this.state.pickedCategory === "diubki" ? (this.getFilteredProducts()
                  ) : this.state.pickedCategory === "dshorty" ? (this.getFilteredProducts()
                  ) : this.state.pickedCategory === "dsportkostymy" ? (
                      this.getFilteredProducts()
                  ) : (
                    <p >
                     SmartSHOP
                    </p>
                  )}
                  
                  <Pagination
                    items={products}
                    onChangePage={this.onChangePage}
                  />
                </Row>
              </Col>
            </Row>
          </Container>
        </>
      );
    } else {
      return <Spinner />;
    }
  }
}

Products.propTypes = {
  firestore: PropTypes.object.isRequired,
  products: PropTypes.array,
};

const mapStateToProps = (state) => ({
  products: state.firestore.ordered.products,
});

// console.log('this is map state to props',mapStateToProps)

export default compose(
  firestoreConnect((props) => [
    {
      collection: "products",
      orderBy: props.sort,
    },
  ]),
  connect(mapStateToProps)
)(ProductCardstable);
