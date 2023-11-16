import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "./cardDropdown.style.scss";
import Button from '../Button';
import CartItem from '../CartItem';
import { CartContext } from '../Contexts/card.context';

export default function CardDropdown() {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        return navigate("/checkout")
    }
    return (
        <div className='cart-dropdown-container'>
            <div className="cart-items">
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
                <Button onClick={goToCheckoutHandler}> GO TO CHECKOUT </Button>
            </div>
        </div>
    )
}
