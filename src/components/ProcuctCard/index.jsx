import { useContext } from 'react';
import './productCard.style.scss';
import Button from '../Button';
import { CartContext } from '../Contexts/card.context';


export default function ProductCard({ product }) {
    const { name, price, imageUrl } = product
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
                <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
            </div>

        </div>
    )
}
