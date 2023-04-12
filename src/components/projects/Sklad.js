import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom'; 
import Pagination from './Pagination';
import Spinner from '../layout/Spinner';
import moment from 'moment';
import {Table} from 'reactstrap'


class Sklad extends React.Component {
    state = {
      products: [],
      pageOfItems: []
    };
  
    componentWillReceiveProps(nextProps) {
        this.setState({products: nextProps.products});}
  
    onChangePage = pageOfItems => this.setState({ pageOfItems: pageOfItems });
  
    render() {
      const { products } = this.state;
      console.log('products',products)
      const { auth } = this.props;
      if (!auth.uid) return <Redirect to='/products' />
      if (products.length > 0) {
        return (
            <div className="project-list section">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                                <th>Изображение</th> 
                                <th>Наименование</th>
                                <th>Цена - </th>
                                <th>Размер - </th>
                                <th>Кол-во - </th>
                                <th>TOTAL PRICE</th>
                </tr>
              </thead>
              <tbody>
               
                 
             
                {this.state.pageOfItems.map((product, index) => (
                     
                     <tr>
                        
                             {products.map(item=>(
                           <>
                                <td>  <img src={item.url} width='400' height='400' /> </td>
                                <td>{item.name } </td>
                                <td>{item.price} </td>
                                <td>{item.sizes.label}</td>
                                <td>{item.defaultQty}</td>
                                <td>{Number(item.defaultQty*item.price)} </td>
                            </>

                                 ))}
                        
                        {/* <img src={product.order.cartItems.picture} key={picture}/>
                        
                        <p key={name} >{product.order.cartItems }</p>
                        <p key={price} >{product.order.cartItems}</p>
                        <span key={index} >{product.order.cartItems.qty}</span> */}
                         {/* <td>{product.name}</td>
                         <td>{product.phone}</td>
                         <td>{product.adress}</td>
                         <td>{product.comment}</td>
                         <td>{product.totalPr}</td> */}
                     

                         
                         
                       
                         <td >{ moment(product.createdAt.toDate()).calendar() }</td>
                     
                     
                    
                
                 </tr>
                ))}
             
         
              
               
             
              </tbody>
              <Pagination items={products} onChangePage={this.onChangePage} />
            </Table>
        
          </div>
        );
      } else {
        return <Spinner />;
      }
    }
  }Sklad.propTypes = {
    firestore: PropTypes.object.isRequired,
    products: PropTypes.array
};

const mapStateToProps = (state) => ({
    products: state.firestore.ordered.products,
    auth:state.firebase.auth})

  
  // console.log('this is map state to props',mapStateToProps)
  
  
  export default compose(
    firestoreConnect(props => [
      {
        collection: 'products',
        orderBy: props.sort
      }
    ]),
    connect(mapStateToProps)
  )(Sklad);