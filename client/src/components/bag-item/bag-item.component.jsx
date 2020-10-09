import React from 'react';

import {
    BagItemContainer,
    ItemDetailsContainer,
    BagItemImage
} from './bag-item.styles';

const BagItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <BagItemContainer>
        <BagItemImage src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <span>{name}</span>
            <span>
                {quantity} x £{price}
            </span>
        </ItemDetailsContainer>
    </BagItemContainer>
);

export default React.memo(BagItem);