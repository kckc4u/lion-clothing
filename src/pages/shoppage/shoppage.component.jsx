import React, { Component } from 'react'
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collectionPreview/collectionPreview.component';

export class Shoppage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: SHOP_DATA
        }
    }

    render() {
        const {collection} = this.state;
        return (
            <div>
                {collection.map(({id, title, items}) => 
                    <CollectionPreview key={id} title={title} items={items} />
                )}
            </div>
        )
    }
}

export default Shoppage
