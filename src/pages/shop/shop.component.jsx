import React, { Component } from 'react';
import SHOP_DATA from './shop.data.js';
import '../../components/collection-preview/collection-preview.component'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
    constructor(){
        super()
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectionPros }) => (
                        <CollectionPreview key={id} {...otherCollectionPros} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;