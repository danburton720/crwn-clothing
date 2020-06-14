import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import BagIcon from '../bag-icon/bag-icon.component';
import BagDropdown from '../bag-dropdown/bag-dropdown.component';
import { selectBagHidden } from '../../redux/bag/bag.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors'

import {ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
        <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
        <OptionLink to='/shop'>
        SHOP
        </OptionLink>
        <OptionLink to='/contact'>
          CONTACT
        </OptionLink>
        {currentUser ? (
              <OptionLink as='div' onClick={() => auth.signOut()}>
                  SIGN OUT
              </OptionLink>
          ) : (
              <OptionLink to='/signin'>
                  SIGN IN
              </OptionLink>
          )}
        <BagIcon />
    </OptionsContainer>
      { hidden ? null : <BagDropdown /> }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectBagHidden
});

export default connect(mapStateToProps)(Header);

