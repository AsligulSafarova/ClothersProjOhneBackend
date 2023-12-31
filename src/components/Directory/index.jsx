import React from 'react';
import DirectoryItem from '../DirectoryItem';
import "./directory.styles.scss"

export default function Directory({ categories }) {
    return (
        <div className='directory-container'>
            {categories.map((category) => (
                <DirectoryItem key={category.id} {...category} />
            ))}
        </div>
    );

}
