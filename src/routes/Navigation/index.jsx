import React from 'react';
import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import "./navigation.styles.scss";
import crownLogo from '../../photo/crown.jpg';
import { UserContext } from '../../components/Contexts';
import { CartContext } from '../../components/Contexts/card.context';
import { signOutUser } from "../../utils/Firebase/firebase.utils";
import CardIcon from '../../components/CardIcon';
import CardDropdown from '../../components/CardDropdown';





export default function Navigation() {

    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <img src={crownLogo} className='logo' alt='card' />
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (<span className='nav-link' onClick={signOutUser} > SIGN OUT</span>)
                            : <Link className='nav-link' to='/auth'>
                                SIGN IN
                            </Link>}
                    <CardIcon />
                </div>
                {isCartOpen && <CardDropdown />}
            </div>
            <Outlet />
        </Fragment>
    );
}
