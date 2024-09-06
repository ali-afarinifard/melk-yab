import React, { useContext, useEffect } from 'react'

// ** Components
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet, createHashRouter } from 'react-router-dom'

// ** Auth0
import { useAuth0 } from '@auth0/auth0-react'

// ** Context
import UserDetailContext from '../../context/UserDetailContext'

// ** React-Query
import { useMutation } from 'react-query'

// ** Utils
import { createUser } from '../../utils/api'

// ** Hooks
import useFavourites from '../../hooks/useFavourites'

// ** Hooks
import useBookings from '../../hooks/useBookings'

const Layout = () => {

    useFavourites()
    useBookings()


    const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0()
    const { setUserDetails } = useContext(UserDetailContext)

    const { mutate } = useMutation({
        mutationKey: [user?.email],
        mutationFn: (token) => createUser(user?.email, token)
    })


    useEffect(() => {

        const getTokenAndRegister = async () => {
            const res = await getAccessTokenWithPopup({
                authorizationParams: {
                    audience: "http://localhost:8000",
                    scope: "openid profile email"
                }
            });
            localStorage.setItem("access_token", res);
            setUserDetails((prev) => ({ ...prev, token: res }));
            mutate(res);
        };
        isAuthenticated && getTokenAndRegister();
    }, [isAuthenticated]);


    return (
        <>
            <div style={{ background: "var(--black)", overflow: "hidden" }}>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </>

    )
}

export default Layout