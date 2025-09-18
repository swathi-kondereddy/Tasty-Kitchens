import {Link} from 'react-router-dom'

import './index.css';

import CartContext from '../context/CartContext'

const CartSummary = () => (
   <CartContext.Consumer>
    {value => {
      const {cartData} = value

      let total = 0
      cartData.forEach(eachCartItem => {
        total += eachCartItem.cost * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <div className="order-total-value">
              <h1 className="order-total-label">Order Total:</h1>
              <div className='payment-order'>
                 <p className="order-total-label">Rs {total} /-</p>
                <Link to="/payment-success">
              <button type="button" className="checkout-button">
                Place Order
              </button>
            </Link>

              </div>
             
            </div>
            {/* <p className="total-items">{cartData.length} Items in cart</p> */}
            
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
