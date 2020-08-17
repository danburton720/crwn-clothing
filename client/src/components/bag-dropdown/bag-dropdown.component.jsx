import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom';

import BagItem from '../bag-item/bag-item.component';

import { selectBagItems } from '../../redux/bag/bag.selectors';
import {toggleBagHidden } from '../../redux/bag/bag.actions';

import { BagDropdownContainer, BagItemsContainer, EmptyMessageContainer, BagDropDownButton } from './bag-dropdown.styles';

const BagDropdown = ({ bagItems, history, dispatch }) => (
    <BagDropdownContainer>
        <BagItemsContainer>
            {bagItems.length ? (
                bagItems.map(bagItem => (
                    <BagItem key={bagItem.id} item={bagItem}/>
                ))
                ) : (
                <EmptyMessageContainer>Your bag is empty</EmptyMessageContainer>
            )
            }
        </BagItemsContainer>
        <BagDropDownButton
            onClick={() => {
            history.push('/checkout');
            dispatch(toggleBagHidden())
        }}>
            GO TO CHECKOUT
        </BagDropDownButton>
    </BagDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    bagItems: selectBagItems
});

export default withRouter(connect(mapStateToProps)(BagDropdown));