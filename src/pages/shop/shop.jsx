import React from "react";
import CollectionPreview from '../../components/previewCollection/previewCollecction'

import Data from "./shopData";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        collections: Data,
    };  
  }

  render() {
      const { collections } = this.state  
    return (
        <div>
{ 
    collections.map(({id, ...otherCollectionProps}) =>  (
        <CollectionPreview key={id} {...otherCollectionProps} ></CollectionPreview>
    ))
} 

        </div>
    )
  }
}

export default ShopPage;
