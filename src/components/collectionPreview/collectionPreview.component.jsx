import React from 'react'

import './collectionPreview.style.scss';
import CollectionItem from '../collectionItem/collectionItem.component';

const CollectionPreview = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {
                items
                .filter((item, idx) => idx < 4)
                .map((item, id) => <CollectionItem key={id} {...item}/>)
            }
            </div>
        </div>
    )
}

export default CollectionPreview
