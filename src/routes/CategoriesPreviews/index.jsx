import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../components/Contexts/Categories.context';
import "./style.scss";
import CategoryPreview from '../../components/CategoryPreview';

export default function CategoriesPreviews() {
    const { categoriesMap } = useContext(CategoriesContext);
    console.log("shop", categoriesMap);
    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                );
            })}
        </Fragment>


    )
}
