import React from "react";
import CartIndexItem from "./cart_index_item";

class CartIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCartItems();
  }

  checkout() {
    return window.alert("Thanks for checking out my full stack project!");
  }

  calcTotal() {
    let total = 0;
    const items = this.props.items;
    const products = this.props.products;
    Object.values(items).forEach(item => {
      let product = products[item.product_id];
      if (!product) return null;
      total += item.quantity * product.price;
    });
    return total.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  render() {
    if (!this.props.items || !this.props.products || Object.values(this.props.sellers).length === 0)
      return null;

    const { products, sellers, buyer } = this.props;

    const cartItems = this.props.items.map(item => {
      const product = products[item.product_id];
      if (!product) return null;
      const seller = sellers[product.user_id];
      const updateCartItem = item => this.props.updateCartItem(item);
      const deleteCartItem = id => this.props.deleteCartItem(id);

      return (
        <CartIndexItem
          key={item.id}
          item={item}
          product={product}
          seller={seller}
          buyer={buyer}
          updateCartItem={updateCartItem}
          deleteCartItem={deleteCartItem}
        />
      );
    });

    return (
      <div className="cart-index-container">
        <h1 className="cart-index-title">Your Cart</h1>
        <div className="whole-cart-checkout-box">
          <div className="left-side-checkout">
            <ul className="cart-index-items">{cartItems}</ul>
          </div>
          <div className="right-side-checkout">
            <div className="right-side-inner-div">
              <div className="line-item">
                <p className="subtotal-text">Item(s) total</p>
                <p className="subtotal-text">${this.calcTotal()}</p>
              </div>
              <div className="line-item">
                <p className="subtotal-text">Shipping</p>
                <p className="subtotal-text">Free!</p>
              </div>
              <div className="total-line" />
              <div className="line-item total-div">
                <p className="total-text">Total</p>
                <p className="total-text">${this.calcTotal()}</p>
              </div>
              <div className="checkout-button-container">
                <button className="checkout-button" onClick={() => this.checkout()}>
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartIndex;
