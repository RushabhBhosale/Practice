import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Home.css'
import { addToCart } from './features/CartSlice';
import { Link } from 'react-router-dom';

const Home = () => {

   const items = useSelector((state) => state.allCart.items);
   const dispatch = useDispatch();

   return (
      <>
         <h4>Cart Quantity:</h4>
         <Link to='/cart'>Cart</Link>
         <div className='products'>
            {items.map((item, index) => (
               <div className="product" key={index}>
                  <div className="prod-img">
                     <img src={item.img} />
                  </div>
                  <div className="prod-details">
                     <h5 className="item title">{item.title}</h5>
                     <p className="item title">{item.price}</p>
                     <button className='add' onClick={() => dispatch(addToCart(item))}>Add to cart</button>
                  </div>
               </div>
            ))}
         </div>
      </>
   )
}

export default Home