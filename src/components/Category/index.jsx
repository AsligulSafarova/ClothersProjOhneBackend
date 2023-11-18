
import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../Contexts/Categories.context';
import ProductCard from '../ProcuctCard';
import "./style.scss"

export default function Category() {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    const [products, setProducts] = useState(categoriesMap[category]);
    console.log("products", products);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    return (
        <Fragment> <h1 className='category-title'>{category.toUpperCase()}</h1>
            <div className='category-container'>

                {
                    products &&
                    products.map((product) => (<ProductCard key={product.id} product={product} />))
                }

            </div>
        </Fragment>
    )
}


function keysAndValues(obj) {
    let c = [];
    c.push(Object.keys(obj))

}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }))