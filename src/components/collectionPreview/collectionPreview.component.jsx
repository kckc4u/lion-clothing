import React from 'react'

const CollectionPreview = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {
                items
                .filter((item, idx) => idx < 4)
                .map((item, id) => <div key={id}>{item.name}</div>)
            }
            </div>
        </div>
    )
}

export default CollectionPreview
