import { useContext } from 'react';
import './cardIcon.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from '../Contexts/card.context';


export default function CardIcon() {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);


    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <FontAwesomeIcon icon={faCartShopping} className='shopping-icon ' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}
