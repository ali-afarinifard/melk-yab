import React, { useContext, useEffect, useState } from 'react'

// ** React Icons
import { AiFillHeart } from 'react-icons/ai'

// ** useAuthCheck Hook
import useAuthCheck from '../../hooks/useAuthCheck'

// ** React-Query
import { useMutation } from 'react-query'

// ** Auth0
import { useAuth0 } from '@auth0/auth0-react'

// ** Context
import UserDetailContext from '../../context/UserDetailContext'

// Utils
import { checkFavourites, updateFavourites } from '../../utils/common'
import { toFav } from '../../utils/api'

const Heart = ({ id }) => {

    const [heartColor, setHeartColor] = useState("white")
    const { validateLogin } = useAuthCheck()
    const { user } = useAuth0()


    const {
        userDetails: { favourites, token },
        setUserDetails,
    } = useContext(UserDetailContext);


    useEffect(() => {
        setHeartColor(() => checkFavourites(id, favourites))
    }, [favourites])


    const { mutate } = useMutation({
        mutationFn: () => toFav(id, user?.email, token),
        onSuccess: () => {
            setUserDetails((prev) => (
                {
                    ...prev,
                    favourites: updateFavourites(id, prev.favourites)
                }
            ))
        }
    })



    const handleLike = () => {

        if (validateLogin()) {
            mutate()
            setHeartColor((prev) => prev === "#fa3e5f" ? "white" : "#fa3e5f")
        }

    }


    return (
        <AiFillHeart size={24} color={heartColor} onClick={(e) => {
            e.stopPropagation()
            handleLike()
        }} />
    )
}

export default Heart