import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions/cartActions';
// import uuid from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { showCart } from '../../store/actions/cartActions';
import PropTypes from 'prop-types';
import info from '../images/info.png'
import {Col} from 'reactstrap'
import { Card, CardImg, CardText, CardBody,CardLink,
  CardTitle, CardSubtitle, Row ,ButtonGroup} from 'reactstrap';
  import { Carousel ,Button} from 'rsuite';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  // import {faCartPlus} from '@fortawesome/free-brands-svg-icons'
  import { faCartPlus,faStar, faThermometerHigh,faCircleInfo} from '@fortawesome/free-solid-svg-icons'
  const styles = theme => ({
    // close: {
    //   width: theme.spacing.unit * 4,
    //   height: theme.spacing.unit * 4
    // }
  });


class Product extends Component {
  state = {
    open: false
  };
  
  addClick = product => {
    this.setState({ open: true });
    const { addItem } = this.props;
    addItem(product);
    // console.log('product from addClick 111111111111111111',product)
    // console.log('item from addClick 111111111111111111',addItem)
    const { showCart } = this.props;
    console.log('after button clicked to that ------',showCart)
    // showCart(product);
    
 
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  handleRedirect = product => {
    console.log('id of product',product.id)
    const {addID}=this.props
    // addID(product)
    // console.log('id from props',addID)

    //this.props.history.push(`/product/${id}`)
    
    // console.log('product from addClick 111111111111111111',product)
    // console.log('item from addClick 111111111111111111',addItem)
  };

  

  render() {
    const { product } = this.props;
    const { classes } = this.props;
    // console.log('categorys',product.Category.value)
    
 
    return (
   
      <>
           
        
{/*      
        <div className="card">
          <img
            className="card-img-top img-fluid "
            src={product.url}
            alt={product.name}
           
          />
          <div className="card-body">
            <p>{product.Category.value}</p>
            <h6 className="card-title">{product.name}</h6>
            <p className="price">{product.price} T</p>
            
            <div className="text-center">
              <button
                className="btn-custom"
                onClick={this.addClick.bind(this, product)}>
                Add to cart
              </button>
             
           
              <Link to={
                { 
                    pathname: "/product/" + this.props.product.Id,
                    myCustomProps: product
                }
            }>
                   <button>  Подробнее </button>
            </Link>
            </div>
          </div>
        </div>
 */}


         
          <Col 
          sm='4'
          md='4'
          xs="6"
          lg='4' >



            
        <Card
          id='anyWidth'
          style={{
          // width: '12rem'
          // height:'85%',
          width:'90%'
          
        }}>
  <Link to={
                { 
                    pathname: "/product/" + this.props.product.Id,
                    myCustomProps: product
                }
            }>  
        {/* {product} */}
          {/* <CardImg top
          style={{
            // 'width':'12rem',
            'margin-top':'0.2rem'
          }}
            className="card-img-top img-fluid "
            src={product.url}
            alt={product.name}
           
          /> */}
          </Link>
         
            <Carousel className="custom-slider" style={{'height': '40%'}}>
                <img src={product.url} height="20%" />
                <img src={product.url2} height="20%" />
                <img src={product.url3} height="20%" />
                <img src={product.url4} height="20%" />
                <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3" height="20%"  />
               
               
               
              </Carousel>
           
              <div>
              <a class="btn-floating halfway-fab waves-effect waves-light red right" 
              style={{'position': 'sticky','margin':' -7% 3% 0 0'}} 
               onClick={this.addClick.bind(this, product)}><i class="material-icons">
            add
             </i></a>
              </div>
         
            

          <CardBody>
          <span class="badge blue" style={{'color': '#ffffff'}}>{product.sizes.label}</span>
            <Link to={
                { 
                    pathname: "/product/" + this.props.product.Id,
                    myCustomProps: product
                }
            }>  
            
          <CardTitle style={{'color':'black'}}><h5 style={{'color':'black'}}>{product.name}</h5>
          
          </CardTitle>
          {/* <CardSubtitle >{product.name}</CardSubtitle> */}
          {/* <CardSubtitle>{product.content}</CardSubtitle> */}
          <i class="material-icons right">more_vert</i>
          <CardText className="price"><h6 style={{'color':'black'}}>{product.price} ₸</h6></CardText>

         </Link>
<br />
  
       
          </CardBody>
         
        </Card>








      </Col>


      <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={this.state.open}
          autoHideDuration={2000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">Item added!</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </>

    );
  }
}


Product.propTypes = {
  showCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart
});



export default connect(
  mapStateToProps,
  { addItem,showCart }
)(withStyles(styles)(Product));