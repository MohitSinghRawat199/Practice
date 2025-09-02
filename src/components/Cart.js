import React from 'react'
import {useSelector} from "react-redux";
const Cart = () => {

  const cart = useSelector((store)=>store.cart.count);

  return (
    <div>
      <h1>Store {cart}</h1>
    </div>
  )
}

export default Cart
