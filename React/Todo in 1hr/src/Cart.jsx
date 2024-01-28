import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal, removeItem } from './features/CartSlice';

const Cart = () => {

  const { cart, totalQuantity, totalAmount } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart])

  console.log(cart)

  return (
    <>
      <div>Cart {totalQuantity}</div>
      <div>{totalAmount}</div>
      <div className="products">
        {cart.map((item, index) => (
          <div className="product" key={index}>
            <div className="prod-img">
              <img src={item.img} />
            </div>
            <div className="prod-details">
              <h5 className="item title">{item.title}</h5>
              <p className="item title">{item.price}</p>
              <p className="item title">{item.quantity}</p>
              <button className='add' onClick={() => dispatch(addToCart(item))}>Add to cart</button>
              <button className='remove' onClick={() => dispatch(removeItem(item.id))}>remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cart