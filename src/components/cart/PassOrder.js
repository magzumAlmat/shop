import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

export default class PassOrder extends Component {
   
    render() {
        const Greeting = this.props.prod;
        return (
            
            <div>
               
               
             {console.log('вывод с PASS ORDER-----',this.props.prod)}
             <Link to={{pathname:"/createorder",params:Greeting}} className='button' >
                
             <button className='btn btn-primary' 
            //  onClick={
            //  this.props.location.params.cartItems=[]//обнулил корзину  
            // }
            >Оформить заказ</button> 
             
             </Link>

           

            </div>
        )
    }
}

