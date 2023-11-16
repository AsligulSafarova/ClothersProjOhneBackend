import React from 'react';
import CategoryItems from '../CategoryItems';
import "./directory.styles.scss"

export default function Directory({ categories }) {
    return (
        <div className='directory-container'>
            {categories.map((category) => (
                <CategoryItems key={category.id} {...category} />
            ))}
        </div>
    );

}
