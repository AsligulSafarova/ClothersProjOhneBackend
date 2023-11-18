import { Routes, Route } from 'react-router-dom'
import "./shop.style.scss";
import CategoriesPreviews from '../CategoriesPreviews';
import Category from '../../components/Category';


export default function Shops() {

    return (
        <Routes>
            <Route index element={<CategoriesPreviews />} />
            <Route path=":category" element={<Category />} />
        </Routes>



    )
}
