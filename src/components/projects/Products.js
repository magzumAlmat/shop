import React, {Component, useParams,useState} from "react";
import PropTypes from "prop-types";
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";

import Product from "./Product";
// import Pagination from "./Pagination";
import Spinner from "../layout/Spinner";
import { Row, Col} from "reactstrap";

import { NavItem, NavLink} from "reactstrap";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {
    Collapse,
    
    List,
    NavbarToggler,
    NavbarBrand,
    Text,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    CardImg,
    DropdownItem,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardLink,
    CardGroup
} from "reactstrap";
import {Link} from "react-router-dom";
import MainPage from "../MainPage";
import Pagination from "../lib/Pagination";
import FilterByPrice from '../filters/StudiosList'
import {
	ReactiveBase,
	SearchBox,
	MultiList,
	SingleRange,
	RangeInput,
	ResultCard,
    DynamicRangeSlider,
	SelectedFilters,
	ResultList,
	ReactiveList,
} from '@appbaseio/reactivesearch';
import {  InputNumber,Dropdown ,Button} from 'rsuite';

import 'rsuite/dist/rsuite.min.css'

import StudiosList from "../filters/StudiosList";
import Example2 from "../filters/Example2";
import Example3 from "../filters/Example3";

import { SelectPicker } from 'rsuite';
import FilterProductsByPrice from "../filters/FilterProductsByPrice";
import ProductFilter from "../filters/ProductFilter";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'range-slider-input/dist/style.css';
import { Slider, RangeSlider, InputGroup } from 'rsuite';

//---------------------------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------------------------------------


const data = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map(
  item => ({ label: item, value: item })
);

const valuesArr=[]
let productFilteredByPriceArr=[]

class Products extends Component {
    constructor(props) {
        super(props);
    this.state = {
        pageSize: 6,
        currentPage: 1,
        products: [],
        pageOfItems: [],
        checked: false,
        pickedCategory: this.props.match.params.cat,
        passProduct:[],
        value:[1000,100000],
        lowestValue:0,
        highestValue:0,
        pickedSize:'all',
        pickedSex:'any',
        newPreArray:[]

        // isOpen: false
    };
    
    // this.toggle = this.toggle.bind(this);
}
// toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }

    changeCurrentPage = numPage => {
        this.setState({currentPage: numPage});
        // fetch a data
        // or update a query to get data
    };

    componentWillReceiveProps(nextProps) {
        this.setState({products: nextProps.products});
        // console.log('Я отработался при рендере NextProps', nextProps)
      



    }

    // onChangePage = (pageOfItems) => this.setState({ pageOfItems: pageOfItems });


    selectCategory = (e, props, state) => {
        this.state.pickedSize='all'
        // console.log('im in selectCategory  func   e=  ', e.target.value);


        // console.log('im in selectCategory  func  pickedCATEGORY is', this.state.pickedCategory)

        this.setState({pickedCategory: e.target.value});
        // console.log('im in selectCategory  func  pickedCATEGORY after setState is', this.state.pickedCategory)


        // this.setState({
        // pickedCategory: ''
        // });
    };
    selectSex = (e, props, state) => {
        
        console.log('!!!  im in SelectSex func   e=  ', e.target.value);


        // console.log('im in SelectSize func  is', this.state.pickedSize)

        this.setState({pickedSex: e.target.value});
        console.log('im in selectSize  func  after setState is', this.state.pickedSex)

        // this.getFilteredProducts(this.state.pickedSize)


        // this.setState({
        // pickedCategory: ''
        // });
    };

    selectSize = (e, props, state) => {
        
        console.log('!!!  im in SelectSize func   e=  ', e.target.value);


        // console.log('im in SelectSize func  is', this.state.pickedSize)

        this.setState({pickedSize: e.target.value});
        console.log('im in selectSize  func  after setState is', this.state.pickedSize)

        // this.getFilteredProducts(this.state.pickedSize)


        // this.setState({
        // pickedCategory: ''
        // });
    };

    // getFilteredProducts(pickedCategory) {
    // console.log('Я внутри getFilteredProduycts------------------------------------------')
    // console.log(' '  ,this.state.pickedCategory)

    // const filter = this.props.filter;

    // console.log(this.state.pageOfItems)

    // // console.log('------------------------------------------')
    // // console.log('вывод ',(this.state.pageOfItems))
    // // console.log('------------------------------------------')

    // const filteredProducts = this.state.pageOfItems.map(obj => {
    // const filtered = Object.values(obj.Category.value)
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

  


  
  

    getFilteredProducts(pickedCategory,props) {
        console.log('im in getFiltereProducts--  pickedSize= ',typeof(this.state.pickedSize),this.state.pickedSize)
        
        // console.log('Я отработался при рендере pageOFITEMS===  ', this.state.pageOfItems)

        // console.log('this is Params ', this.props.match.params)

        pickedCategory = this.props.match.params.cat
        // console.log('this is Params ', this.props.match.params)

        // console.log('type of pickedCategory is= ', typeof(pickedCategory), 'PickedCategory value is = ', pickedCategory)
        this.state.newPreArray = [];

        this.state.newArray = [];
        const filter = this.props.filter;
        // console.log(this.state.pageOfItems)
        // console.log('------------------------------------------')
        // console.log('вывод ', (this.state.pageOfItems))
        // console.log('------------------------------------------')


        const filteredProducts = this.state.products.map((obj) => {
            console.log('OBJ= ',obj)
            const filtered = Object.values(obj.Category.value);
            const filteredSizes = Object.values(obj.sizes.label);
            const filteredSex = Object.values(obj.sex.value);
            
            // console.log('filteredSizes= ',filteredSizes)
            let concatedArray = [];
            let buffer = "";
            let buffer2 = "";
            let buffer3 = "";
            
            // console.log('Filtered до цикла  ', filtered)
            buffer = filtered.join("");
            buffer2=filteredSizes.join("")
            buffer3=filteredSex.join("")
            // console.log('buffer3 = ', buffer3)
            concatedArray.push(buffer, obj,buffer2,buffer3);
        

            // console.log('CONCATED ARRAY=  ', concatedArray)
            // console.log('obj', obj)
            // console.log("3 pickedCategory is ", pickedCategory);
            // console.log('this.state.pickedCategory.toString() - ', this.state.pickedCategory.toString())
           
            // console.log('buffer= ',buffer ,'this.state.pickedCategory.toString() = ',this.state.pickedCategory.toString() )
            // console.log('buffer2= ',buffer2 ,'tthis.state.pickedSize.toString() = ',this.state.pickedSize.toString() )
            // console.log('buffer3= ',typeof(buffer3 ),buffer3 ,'tthis.state.pickedSex.toString() = ',typeof(this.state.pickedSex.toString() ),this.state.pickedSex.toString())
            // console.log('concatedArray=  ',concatedArray)
            


             console.log('buffer= ',buffer ,'this.state.pickedCategory.toString() = ',this.state.pickedCategory.toString() )
            console.log('buffer2= ',buffer2 ,'tthis.state.pickedSize.toString() = ',this.state.pickedSize.toString() )
            console.log('buffer3= ',typeof(buffer3 ),buffer3 )
            console.log('this.state.pickedCategory.toString()= ',this.state.pickedCategory.toString())
            console.log('this.state.pickedSize.toString()= ',this.state.pickedSize.toString())
            console.log('this.state.pickedSex.toString(),= ',this.state.pickedSex.toString())


            if (buffer === this.state.pickedCategory.toString() 
            && (buffer2 === this.state.pickedSize.toString()) 
                ) {
                this.state.newArray.push(concatedArray[1]);
               }
            else if(buffer === this.state.pickedCategory.toString() 
            && ('all' === this.state.pickedSize.toString()) 
            )
            {
                this.state.newArray.push(concatedArray[1]);
            }


            // console.log('buffer3= ',typeof(buffer3 ),buffer3 )
            // console.log('pickedSex ',typeof(this.state.pickedSex.toString() ),this.state.pickedSex.toString())

            // for (let i = 0; i < this.state.newPreArray.length; i++) {
              
            //     if(buffer3===this.state.pickedSex.toString())
            //     {
            //         this.state.newArray.push(this.state.newPreArray[i]);
            //     }
            //     else {
            //         this.state.newArray.push(this.state.newPreArray[i]); 
            //     }
            //   }
            //   console.log('YES!',this.state.newArray)
          
           


            // if (newArray.length === 0) return <p>Выберите категорию товара</p>;
        }
        
        );




        let min=0
        let max=0
        
        // console.log('new Array=   ',this.state.newArray)

        productFilteredByPriceArr=[]
      
        
     

        for (let i = 0; i < this.state.newArray.length; i++) {
            // console.log('props.products.price= ',this.state.newArray[i].price);
            valuesArr.push(Number(this.state.newArray[i].price))
            
          }
      
        
          this.state.lowestValue = Math.min(...valuesArr);
        //   console.log('MIN= ',this.state.lowestValue+1)

          this.state.highestValue = Math.max(...valuesArr)
        //   console.log('MAX= ',this.state.highestValue+1)
          
        // onsole.log('Array values prices = ',typeof(valuesArr),valuesArr)
        //   console.log('filter now - ',this.state.lowestValue,this.state.highestValue)
        //   console.log('111',this.state.newArray)
        //   console.log('LEN= ',this.state.newArray.length)
       
          let numbPrice=0

       
        for (let j = 0; j < this.state.newArray.length; j++) {
        numbPrice=Number(this.state.newArray[j].price)
        // console.log('внутри  циклв numbPrice= ',numbPrice)
        //    n
        //    console.log('numb Price ', typeof(numbPrice),'  ', numbPrice);
        //     if((numbPrice >= this.state.value[0] ) && (numbPrice<this.state.value[1]))
        //   {
        //     console.log('111',numbPrice,this.state.newArray[j])
        //     console.log('if numbPrice ' ,numbPrice ,'>=value1',this.state.value[0],'<=value2',this.state.value[1])
        //     productFilteredByPriceArr.push(this.state.newArray[j])
        //     this.state.newArray=productFilteredByPriceArr
        //   }
        
    
        if (numbPrice >= this.state.value[0]  && numbPrice<this.state.value[1]) {
            // console.log('this.state.newArray[j]=  ',this.state.newArray[j])
            // console.log('if numbPrice ' ,numbPrice ,'>=value1',this.state.value[0],'<=value2',this.state.value[1])
            productFilteredByPriceArr.push(this.state.newArray[j])
          

          } else {
            // console.log('NOOOO!')
            // console.log('111',numbPrice,this.state.newArray[j])
            // console.log('if numbPrice ' ,numbPrice ,'>=value1',this.state.value[0],'<=value2',this.state.value[1])
          }
        
        } //конец for

        //   console.log('value from inouts=  ',this.state.value[0],this.state.value[1])
        //   console.log('111   productFilteredByPriceArr= ',productFilteredByPriceArr)
          console.log('111   mewArray= ',this.state.newArray)
          this.state.newArray=productFilteredByPriceArr// Отфильтрованные данные кидаем в пагинатор

        

          
        this.state.passProduct=[]
        return (

            <> {/* (page_number - 1) * page_size, page_number * page_size) */}
                {
                this.state.newArray.slice((this.state.currentPage - 1) * this.state.pageSize, 
                this.state.currentPage * this.state.pageSize).map(product => 
                    (
                    // min=Number(product.price),
                    // max=Number(product.price),
                    // console.log('',min),
                    // console.log('',max),
                    this.state.passProduct.push(product),
                    // console.log('this is PassProduct =  ', this.state.passProduct),
                    // console.log('this is product filtered =  ', product),
                    
                     <Product product={product}
                        key={
                            product.id
                        }/>
                    
                    ))
                } 
                
                {/* <FilterProductsByPrice  product={this.state.passProduct}/>
                           */}

                {/*          
          <h3>Deafult</h3>
          <Pagination
            currentPage={this.state.currentPage}
            totalPages={10}
            changeCurrentPage={this.changeCurrentPage}
            theme="default"
          />
      */} </>

        );
    
       
    }

    handleCheckboxChange = (event) => this.setState({checked: event.target.checked});

    handleSliderChange = (value) => {
        this.setState({ value });
    };

    handleInputNumberChange = (index, nextValue) => {
        const [start, end] = this.state.value;
        const newValue = [...this.state.value];
        newValue[index] = nextValue;
        if (index === 0 && nextValue > end) {
        return;
        } else if (index === 1 && start > nextValue) {
        return;
        }
        this.setState({ value: newValue });
    };

    render()
    
    {

        console.log('Отрабатываюсь при рендеринге!!!!')
        this.getFilteredProducts(this.state.pickedCategory)
        const Checkbox = (props) => <input type="checkbox" {...props}/>;

        const {products} = this.state;

        if (products.length > 0) {
            return (

                <>          
                    <Container>
                        <Row > 
                        <Col 
                             md="3"
                              sm="12"
                              xs="12">
                      
                    <Container style={
                        {"paddingLeft": "0px"}
                    }>
                        <br id='hideOnMobile'/>

                     
 
                        {/* <Example2 props={this.props}/> */}

                        {/* --------------------------------------------------------------------------- */}
                        <div id='hideOnMobile'>
                        <h6>Стоимость, ₸</h6>
                        <br />
                        
                        <Row >
                      
                      
                        <RangeSlider
                            max={100000}
                            constraint={([start, end]) => start <= this.state.lowestValue && end <= 100000}
                            value={this.state.value}
                            onChange={this.handleSliderChange}
                        />
                        </Row>
                     
                        <Row >
                        <Col >
                            <InputGroup>
                            <InputNumber
                                min={0}
                                max={20000}
                                defaultValue={500}
                                value={this.state.value[0]}
                                onChange={(nextValue) => this.handleInputNumberChange(0, Number(nextValue))}
                            />
                            <InputGroup.Addon>to</InputGroup.Addon>
                            <InputNumber
                                min={0}
                                max={200000}
                                defaultValue={100000}
                                value={this.state.value[1]}
                                onChange={(nextValue) => this.handleInputNumberChange(1, Number(nextValue))}
                            />
                            </InputGroup>

                        </Col>
                    
                      
                        </Row>
                        </div>
                        {/* --------------------------------------------------------------------------------- */}
                        <hr id='hideOnMobile'/>
                        <br id='hideOnMobile'/>
                        <h6>Категории</h6>
                        {/* <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Example</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar > */}
                        <Nav className="ml-auto" navbar onClick={
                            this.selectCategory
                        }>            
                        <ul id='displayOnMobile' style={{'display': 'contents'}}>
                            <li >
                            <NavItem>
                                <Button value='dplatya'  appearance="link" size="sm" style={{'fontsize':'1.1rem','color':'black'}}>
                                    Платья
                                </Button>
                                {" "} </NavItem>
                            </li>
                            <li >
                            <NavItem>
                                <Button value="dbruki" appearance="link" size="sm" style={{'fontsize':'1.1rem','color':'black'}}>
                                    Брюки
                                </Button>
                                {" "} </NavItem>
                                </li>
                                <li>
                            <NavItem>
                                <Button value="dkofty" appearance="link"size="sm" style={{'fontsize':'1.1rem','color':'black'}}>
                                    Кофты
                                </Button>
                                {" "} </NavItem>
                                </li>
                                <li>
                            <NavItem>
                                <Button value="daccessories" appearance="link" size="sm" style={{'fontsize':'1.1rem','color':'black'}}>
                                    Аксессуары
                                </Button>
                                {" "} </NavItem>
                                </li>
                                <li>
                            <NavItem>
                                <Button value="dfootbolki" appearance="link"  size="sm" style={{'fontsize':'1.1rem','color':'black'}}>
                                    Футболки
                                </Button>
                                {" "} </NavItem>
                                </li>
                                <li>
                            <NavItem>
                                <Button value="dkurtki" appearance="link"  size="sm" style={{'fontsize':'1.1rem','color':'black'}}>
                                    Куртки
                                </Button>
                                {" "} </NavItem>
                                </li>
                                <li>
                            <NavItem>
                                <Button value="dshorty" appearance="link"  size="sm" style={{'fontsize':'1.1rem','color':'black'}}>
                                    Шорты
                                </Button>
                            </NavItem>
                            </li>
                            <li>
                            <NavItem>
                                <Button value="dsportkostymy" appearance="link" size="sm" style={{'fontsize':'1.1rem','color':'black'}}>
                                    Спортивные костюмы
                                </Button>

                            </NavItem>
                            </li>
                            <li>
                            <NavItem>
                                <Button value="diubki" appearance="link" size="sm" style={{'fontsize':'1.1rem','color':'black'}}>
                                    Юбки
                                </Button>

                            </NavItem>
                            </li>
                            </ul>
                        </Nav>
                        {/* </Collapse>
                        </Navbar> */}

<hr  />
<br id='hideOnMobile'/>
                        <h6>Размеры</h6>
                        <Nav onClick={
                            this.selectSize
                        }  >            

                        <ul id='displayOnMobile' style={{'display':'contents'}}>
                            <li>
                        <NavItem >
                                <Button value='all'  appearance="link" size="sm" style={{'fontsize':'1.1rem','color':'black'}}>
                                    All
                                </Button>
                                {" "} </NavItem>
                                </li>
                              

                        {this.state.passProduct.map((product) => (
                            <div id='displayOnMobile' key={product.id} style={{ backgroundColor: product.size === '125' ? 'yellow' : 'white' }}>
                              <ul id='displayOnMobile' style={{'display':'contents!important'}}>
                               <li>
                               <NavItem>
                                <Button value={product.sizes.value}  appearance="link" size="sm" >
                                {product.sizes.value} 
                                </Button>
                                {" "} </NavItem>
                                </li>
                                </ul>
                                </div> ))} 
                        </ul>
                        </Nav>
                        <h6>Пол</h6>
                        <br />

                        <Nav onClick={
                            this.selectSex
                        }  >            

                        <ul id='displayOnMobile' style={{'display':'contents'}}>
                            <li>
                        <NavItem >
                                <Button value='all'  appearance="link" size="sm" style={{'fontsize':'1.1rem','color':'black'}}>
                                    All
                                </Button>
                                {" "} </NavItem>
                                </li>
                              

                        {this.state.passProduct.map((product) => (
                            <div id='displayOnMobile' key={product.id} >
                              <ul id='displayOnMobile' style={{'display':'contents!important'}}>
                               <li>
                               <NavItem>
                                <Button value={product.sex.value}  appearance="link" size="sm" >
                                {product.sex.value} 
                                </Button>
                                {" "} </NavItem>
                                </li>
                                </ul>
                                </div> ))} 
                        </ul>
                        </Nav>
                        


                    </Container>
                    {" "}
                    <br/>   
                         
                         
                         </Col>

                            <Col 
                             md="9"
                              sm="12"
                              xs="12">
                                <Row>
                                     {/* {this.state.pageOfItems.map(product => (
            
                                            <Product product={product} key={product.id}  />

                                        ))} */}

                                    {/* <Pagination items={products} onChangePage={this.onChangePage} />*/}

                                    {
                                      this.state.pickedCategory === "dkurtki" ? (this.getFilteredProducts()) 
                                    : this.state.pickedCategory === "dkofty" ? (this.getFilteredProducts())
                                    : this.state.pickedCategory === "dplatya" ? (this.getFilteredProducts()) 
                                    : this.state.pickedCategory === "dbruki" ? (this.getFilteredProducts()) 
                                    : this.state.pickedCategory === "drubashki" ? (this.getFilteredProducts()) 
                                    : this.state.pickedCategory === "daccessories" ? (this.getFilteredProducts()) 
                                    : this.state.pickedCategory === "dfootbolki" ? (this.getFilteredProducts()) 
                                    : this.state.pickedCategory === "diubki" ? (this.getFilteredProducts()) 
                                    : this.state.pickedCategory === "dshorty" ? (this.getFilteredProducts()) 
                                    : this.state.pickedCategory === "dsportkostymy" ? (this.getFilteredProducts())
                                    
                                    : this.state.pickedSize === "all" ? (this.getFilteredProducts())
                                    
                                     : this.state.pickedSize === "86" ? (this.getFilteredProducts())
                                     : this.state.pickedSize === "92" ? (this.getFilteredProducts())
                                     : this.state.pickedSize === "98" ? (this.getFilteredProducts())
                                     : this.state.pickedSize === "104" ? (this.getFilteredProducts())
                                     : this.state.pickedSize === "110" ? (this.getFilteredProducts())
                                     : this.state.pickedSize === "116" ? (this.getFilteredProducts())
                                     : this.state.pickedSize === "122" ? (this.getFilteredProducts())
                                     : this.state.pickedSize === "128" ? (this.getFilteredProducts())
                                     : this.state.pickedSize === "134" ? (this.getFilteredProducts())
                                     : this.state.pickedSize === "140" ? (this.getFilteredProducts())
                                     : this.state.pickedSize === "146" ? (this.getFilteredProducts())
                                     : this.state.pickedSize === "152" ? (this.getFilteredProducts())
                                     : this.state.pickedSize === "158" ? (this.getFilteredProducts())
                                     : this.state.pickedSize === "164" ? (this.getFilteredProducts())

                                     : this.state.pickedSex === "any" ? (this.getFilteredProducts())
                                     : this.state.pickedSex === "male" ? (this.getFilteredProducts())
                                     : this.state.pickedSex === "female" ? (this.getFilteredProducts())
                                    : (
                                        <p>
                                            Выберите категорию
                                        </p>
                                    )
                                } </Row>
                            </Col>
                        </Row>
               

                    <br />
                    {/* <p>
                        current Page:
                        <strong>{
                            this.state.currentPage
                        }</strong>
                    </p> */}

                    </Container>

                    <Pagination 
                   
                      currentPage={this.state.currentPage}
                      totalPages={10}
                      changeCurrentPage={this.changeCurrentPage}
                      theme="square-fill"
                    />

                  {/* <ProductFilter products={this.state.products}/> */}

                 
                </>
            );
        } else {
            return <Spinner/>;
        }
    }
} Products.propTypes = {
    firestore: PropTypes.object.isRequired,
    products: PropTypes.array
};

const mapStateToProps = (state) => ({
    products: state.firestore.ordered.products});



export default compose(firestoreConnect((props) => [{
        collection: "products",
        orderBy: props.sort
    },]), connect(mapStateToProps))(Products);

