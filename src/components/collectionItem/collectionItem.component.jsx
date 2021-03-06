import React from 'react'
import './collectionItem.style.scss';
const CollectionItem = ({id, imageUrl, name, price}) => {
    return (
        <div className="collection-item">
           <div className="image" 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
           />
           <div className="collection-footer">
            <div className="name">{name}</div>
            <div className="price">{price}</div>
           </div>
        </div>
    )
}

export default CollectionItem;
