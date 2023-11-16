import { useContext } from 'react';
import { ProductsContext } from '../../components/Contexts/products.context';
import ProductCard from '../../components/ProcuctCard';
import "./shop.style.scss"

export default function Shops() {
    const { products } = useContext(ProductsContext)
    return (
        <div className='products-container'>
            {
                products.map((product) =>
                (<ProductCard key={product.id} product={product} />
                ))}
        </div>
    )
}
