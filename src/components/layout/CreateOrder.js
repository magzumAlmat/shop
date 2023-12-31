import React, { Component } from 'react'
import Cart from '../cart/Cart'
import TotalAmount from '../cart/TotalAmount'
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { showCart, addItem } from '../../store/actions/cartActions';
import CartItem from '../cart/CartItem';
import uuid from 'uuid';

import {Table} from 'reactstrap'
import {Media} from 'reactstrap'
import {Alert} from 'reactstrap'

import { firestoreConnect } from 'react-redux-firebase';

import { doc, setDoc,getDoc } from "firebase/firestore"; 
import firebase from 'firebase/app';
import 'firebase/firestore';
// import firebase  from '..//../config/fbConfig';
import { createOrderAction } from '../../store/actions/createOrderAction';
import { useState } from "react";
import CustomSelect from '../projects/SelectPayOption';
import { ContactSupportOutlined } from '@material-ui/icons';
import { CardImg } from 'reactstrap';




import {editProductAction} from '..//../store/actions/productActions';
import Product from '../projects/Product';
import { getFirestore } from 'redux-firestore';
class CreateOrder extends Component {

    
    state = {
        selectOptions: [],
        order: [{}],
        pay:'',
        name:'',
        phone:'',
        adress:'',
        comment:'',
        defaultQty:'',
        totalPr:this.props.location.params.totalPrice,
        id:''
    }
    
    render() {
        console.log('THIS PROPS ',this.props)
        
        const options = [
            { label: 'Перевести Курьеру', value: 'transfer' },
            { label: 'Оплатить Курьеру наличными', value: 'cash' },
        ]

          
          const {cartItems}=this.props.location.params;
          console.log('cartItems Смотри сюда',cartItems)
         
          const  handleChange = (e) => {
                
                this.setState({
                    [e.target.id]: e.target.value
                })
            }

            const handleSubmit = async (e) => {
                
                e.preventDefault()
                this.state.order=cartItems
                console.log('cartItems from createORDER',cartItems)
                console.log(typeof cartItems.qty, typeof cartItems.price)
                console.log(this.props.location.params,'---this is cartItems qty')
                console.log('this.state.order.ord',this.state.order)
               
                this.state.order.total=this.props.location.params.totalPrice
                this.state.order.payOption=this.state.pay
                this.state.order.clientName=this.state.name
                this.state.order.clientPhone=this.state.phone
                this.state.order.clientAddress=this.state.adress
                this.state.order.clientComment=this.state.comment
                
                //достать продукты из базы продуктов и заполнить поле defaultQty - this,state qty
               
                
                this.props.createOrderAction(this.state)
                

                for (let i = 0; i < this.state.order.length; i++) {
                    console.log('cartItems=     ',this.props.location.params.cartItems[i].defaultQty)
                    this.state.defaultQty=Number(this.props.location.params.cartItems[i].defaultQty)-Number(this.props.location.params.cartItems[i].qty)
                    console.log('this state defQuantity',this.state.defaultQty)
                    // let editedProd={
                    //     defaultQty:Number(this.state.defaultQty)
                    // }

                    // console.log('editedPrid ' ,typeof(editedProd),editedProd)
                    // this.props.editProductAction(String(cartItems[i].id),editedProd)
                   
                   
                    // const editProductAction = (productId, product) => {
                    //     console.log('productId= ',productId,'product=  ',product)
                    // return (dispatch, getState, {getFirebase, getFirestore}) => {

                    const firestore = getFirestore();
                    firestore.collection('products').doc(String(cartItems[i].id)).update({
                        // content: project.content,
                        // title: project.title,
                        defaultQty:this.state.defaultQty
                    })
                }
                // this.props.location.params.cartItems[0].defaultQty
                




               
                
                


                // try {
                //     const cityRef = doc(db, 'products', cartItems.id);
                //     await setDoc(cityRef, { defaultQty: this.state.defaultQty }, { merge: true });
                //     // await addDoc(collection(db, 'products'), {
                //     //   title: title,
                //     //   description: description,
                //     //   completed: false,
                //     //   created: Timestamp.now()
                //     // })
              
                //   } catch (err) {
                //     alert(err)
                //   }


                alert('Ваш заказ успешно добавлен! Скоро с вами свяжется оператор.')
                    //console.log('totalAmount',this.props.location.params.totalPrice)
                this.props.history.push('/');
                 
                console.log(this.props,'---PROPS')
                this.props.location.params.cartItems=[]//обнулил корзину
                this.render()

                 
                
            }
    
           const onChangeInput=(value,e)=> {
            // console.log(e.target.Category)
            // const setCategory=e.target.value.toString()
            this.state.pay=value
            // console.log('Value of Category',typeof(valueString))
            // console.log('Category=',this.props.Category)
            this.state.selectOptions=this.state.pay.value
    
            console.log('PAY OPTION',this.state.selectOptions)
            // this.setState({selectOptions: options})
            // console.log('this is selected options',this.state.selectOptions)
            // this.setState({
            //     [e.target.id]: e.target.valueString
            // })
            
            
         }
        //  const orderNow=(e)=>{
                
        //     e.preventDefault()
            
        //     this.state.order.ord=cartItems
        //     this.state.order.total=this.props.location.params.totalPrice
        //     this.state.order.payOptions=this.state.pay
        //     this.state.order.clientName=this.state.name
        //     this.state.order.clientPhone=this.state.phone
        //     this.state.order.clientAddress=this.state.adress
        //     this.state.order.clientComment=this.state.comment
        //     createOrderAction(this.state)
        //     alert('Ваш заказ успешно добавлен! Скоро с вами свяжется оператор.',)
        //     console.log('state from create ORDER',this.state)
        //         //console.log('totalAmount',this.props.location.params.totalPrice)
        //     this.props.history.push('/products');

        //         // console.log('Create oRDER присваение ордера',this.state.ord)

             
        //         //this.props.createOrderAction(this.state.ord)
                
        //         }
       

        return (
            <div className='container'>
             <div className="items">
              {cartItems.length === 0 ? (
                <h3>
                 Нечего отображать <i className="far fa-frown" />
                </h3>
              ) : (
                <div>
                    <Table striped  hover>
                            <thead>
                                <tr>
                                
                                <th>Продукт</th>
                              
                                <th>Количество | Всего на складе</th>
                                <th>Цена</th>
                               
                                </tr>
                            </thead>
                        {cartItems.map(item => (
                            console.log('item = ', cartItems),
                        //    { totalPr=(Number(item.price)*Number(item.qty))},
                            <tbody>
                                <tr key={uuid()}>
                                
                                <td><div>
                                <CardImg top
                                            style={{'width':'2rem','margin-top':'1rem'}}
                                                className="mr-3 "
                                                src={item.url}
                                                alt="Generic placeholder"
                                            
                                            />
                                        {/* <img
                                            width={64}
                                            height={64}
                                            className="mr-3"
                                            src={item.url}
                                            alt="Generic placeholder"
                                        /> */}
                                        <div>
                                            <h5>{item.name}</h5>
                                           
                                        </div>
                                    </div>
                                </td>
                                
                               
                                <td>{item.qty} |  {item.defaultQty}  </td>
                                <td>{(item.price * Number(item.qty)).toFixed(2)} T</td>
                                </tr>

                            </tbody>
                           
                          
                         
                  ))} 
                 
                </Table>
                <div>
                        <Alert  variant={'dark'} className="price">
                        ИТОГО :	  {this.props.location.params.totalPrice} T
                        </Alert>
                </div>
                <div >
                    
                 

                </div> 
                </div>
              )}
          
            </div>
            
            <form className="white" onSubmit={handleSubmit}>

            <div className="input-field">
                <label htmlFor="name">Как мы можем к вам обращаться?</label>
                <input type="text" id="name" onChange={handleChange} required={true} />
            </div>
            <div className="input-field">
                <label htmlFor="phone">Ваш телефон</label>
                <input type="text" id="phone" onChange={handleChange} required={true}/>
            </div>
            <div className="input-field">
                <label htmlFor="adress">Адрес доставки</label>
                <input type="text" id="adress" onChange={handleChange} required={true}/>
            </div>
            <div className="input-field">
                <label htmlFor="comment">Комментарий к заказу</label>
                <input type="text" id="comment" onChange={handleChange} />
            </div>
            
            <label htmlFor="pay" >Выберите тип оплаты</label>
            <CustomSelect options={options}  onChange={onChangeInput} required={true}/> 

            <div className="input-field">
                        <button className="btn btn-primary lighten-1 z-depth-0">Создать заказ</button>
                    </div> 
            </form>





            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createOrderAction: (Order) => dispatch(createOrderAction(Order))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder);



