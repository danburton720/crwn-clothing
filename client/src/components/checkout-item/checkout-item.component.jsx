import React from 'react';
import { connect } from 'react-redux';

import {
    clearItemFromBag,
    addItem,
    removeItem
} from '../../redux/bag/bag.actions';

import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({ bagItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = bagItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(bagItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(bagItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>£{price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(bagItem)}>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromBag(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);