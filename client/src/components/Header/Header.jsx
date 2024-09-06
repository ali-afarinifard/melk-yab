import React, { useCallback, useState } from 'react';

// ** Styles
import "./Header.scss";

// ** Hooks
import useHeaderColor from "../../hooks/useHeaderColor";

// ** getMenuStyles
import { getMenuStyles } from "../../utils/common";

// ** React Outside Click
import OutsideClickHandler from "react-outside-click-handler";

// ** React Icons
import { BiMenuAltRight } from "react-icons/bi";

// ** React Ruter
import { Link, NavLink } from "react-router-dom";

// ** Auth0
import { useAuth0 } from '@auth0/auth0-react';

// ** Components
import ProfileMenu from '../ProfileMenu/ProfileMenu';

// ** Mantine Provider 
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css'


const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const headerColor = useHeaderColor();

    // Auth0
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

    const toggleOpen = useCallback(() => {
        setMenuOpened(prev => !prev);
    }, []);



    return (
        <section className='h-wrapper' style={{ background: headerColor }}>

            <div className='flexCenter innerWidth paddings h-container'>
                {/* logo */}
                <Link to='/' style={{ fontFamily: 'Redressed', fontSize: '1.7rem', fontStyle: 'italic', position: 'relative', zIndex: '1' }}>
                    {/* <img src={Logo} alt="logo" width={100} /> */}
                    MelkYab
                    <div style={{ background: 'var(--blue-gradient)', width: '50px', height: '50px', borderRadius: '50%', position: 'absolute', top: '-1px', right: 0, zIndex: '-1' }}></div>
                </Link>

                {/* menu */}
                <OutsideClickHandler onOutsideClick={() => {
                    setMenuOpened(false);
                }}>
                    <div
                        className='flexCenter h-menu'
                        style={getMenuStyles(menuOpened)}
                    >

                        <NavLink to='/properties'>ملک</NavLink>

                        <a href="mailto:a.afarinifard10@gmail.com">تماس با ما</a>

                        {/* login button */}
                        {!isAuthenticated ? (
                            <button className="button" onClick={loginWithRedirect}>
                                ورود | ثبت نام
                            </button>
                        ) : (
                            <MantineProvider>
                                <ProfileMenu user={user} logout={logout} />
                            </MantineProvider>
                        )}

                    </div>
                </OutsideClickHandler>

                {/* for medium and small screens */}
                <div
                    className="menu-icon"
                    onClick={toggleOpen}
                >
                    <BiMenuAltRight size={30} />
                </div>
            </div >

        </section >
    );
};

export default Header;