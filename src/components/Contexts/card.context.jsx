import { createContext, useState, useEffect } from 'react';

const addCardItem = (cartItems, productToAdd) => {
    const existingCardItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if (existingCardItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCardItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
    if (existingCardItem.quantit === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    )
};

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)

}


export const CartContext = createContext({
    isCartOpen: false,
    setIscartOpen: () => { },
    cartItems: [],
    additemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cardCount: 0,
    cartTotal: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount)

    }, [cartItems]);
    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal)

    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCardItem(cartItems, productToAdd))
    };
    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    };
    const clearItemToCart = (clearItemToRemove) => {
        setCartItems(clearCartItem(cartItems, clearItemToRemove))
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemToCart, clearItemToCart, cartTotal }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};


