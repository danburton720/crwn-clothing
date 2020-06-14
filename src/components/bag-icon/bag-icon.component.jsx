import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleBagHidden } from '../../redux/bag/bag.actions';
import { selectBagItemsCount } from '../../redux/bag/bag.selectors';

import { BagIconContainer, ShoppingIconContainer, ItemCountContainer } from './bag-icon.styles';

const BagIcon = ({ toggleBagHidden, itemCount }) => (
    <BagIconContainer onClick={toggleBagHidden}>
        <ShoppingIconContainer />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </BagIconContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleBagHidden: () => dispatch(toggleBagHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectBagItemsCount
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(BagIcon);