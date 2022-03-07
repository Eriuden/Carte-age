import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteToCart } from '../redux/actions/cartAction';





function Cart() {

  const dispatch = useDispatch();
  const {cart} = useSelector((state) => ({
      ...state.cartReducer,
  }))  

        return (                      
          
                    <main>

                    <h2>Votre panier</h2>
                    {cart.length > 0 ? (
                        <div>

                            {cart.map((article) => {
                                return (
                                    <div key={article.id} className='cart-article'>
                                        <h3> Nom : {article.name}</h3>
                                        <div className='delete-item'
                                        onClick={() => {
                                            dispatch(deleteToCart(cart, article));
                                        }}
                                        > Suppression
                                        </div>
                                    </div>
                                    
                                )
                            })}

                        </div>
                    ) : (
                        <p>Panier vide</p>
                    )}

                    </main>
                                   
    )
}

export default Cart