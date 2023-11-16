import { useContext } from 'react';
import "./checkoutItem.style.scss";
import { CartContext } from '../Contexts/card.context';

export default function CheckoutItem({ cartItem }) {
    const { clearItemToCart, addItemToCart, removeItemToCart } = useContext(CartContext)
    const { name, imageUrl, price, quantity } = cartItem;
    const clearItemHandler = () => clearItemToCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={addItemHandler}>&#10094;</div>
                <span className='value'> {quantity}</span>
                <div className="arrow" onClick={removeItemHandler}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}
