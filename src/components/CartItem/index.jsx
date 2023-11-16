import React from 'react';
import "./cartItem.style.scss"

export default function CartItem({ cartItem }) {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={name} />
            <div className="item-detail">
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} X ${price}
                </span>
            </div>
        </div>
    )
}
