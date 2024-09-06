import React, { useContext, useState } from 'react'

// Styles
import "./Property.scss"

// FaShower
import { FaShower } from 'react-icons/fa'

// AiTwotoneCar
import { AiTwotoneCar } from 'react-icons/ai'

// MdLocationPin
import { MdMeetingRoom, MdLocationPin } from 'react-icons/md'

// useLocation Router
import { useLocation } from 'react-router-dom'

// useQuery Hook
import { useMutation, useQuery } from 'react-query'

// getProperty api
import { getProperty, removeBooking } from '../../utils/api'

// Spinners
import { PuffLoader } from 'react-spinners'

// Components
import Map from '../../components/Map/Map'
import Heart from '../../components/Heart/Heart.jsx'
import BookingModal from '../../components/BookingModal/BookingModal'

// ** Hooks
import useAuthCheck from '../../hooks/useAuthCheck'

// ** Auth0
import { useAuth0 } from '@auth0/auth0-react'

// ** Mantine Provider 
import { Button, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css'

// ** Context
import UserDetailContext from '../../context/UserDetailContext'

// ** Toast
import { toast } from 'react-toastify'

const Property = () => {
    const { pathname } = useLocation()
    const id = pathname.split("/").slice(-1)[0]

    const { data, isLoading, isError } = useQuery(["resd", id], () => getProperty(id))

    const [modalOpened, setModelOpened] = useState(false)

    const { validateLogin } = useAuthCheck()

    const { user } = useAuth0()


    // User Detail Context
    const { userDetails: { token, bookings }, setUserDetails } = useContext(UserDetailContext)


    // For Canceling Booking Visit
    const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
        mutationFn: () => removeBooking(id, user?.email, token),
        onSuccess: () => {
            setUserDetails((prev) => ({
                ...prev,
                bookings: prev.bookings.filter((booking) => booking?.id !== id)
            }))

            toast.success("رزرو لغو شد", { position: "bottom-right" })

        }
    })


    if (isLoading) {
        return (
            <div className='wrapper'>
                <div className='flexCenter paddings'>
                    <PuffLoader />
                </div>
            </div>
        )
    }


    if (isError) {
        return (
            <div className='wrapper'>
                <div className='flexCenter paddings'>
                    <span>Error while fetching the property details</span>
                </div>
            </div>
        )
    }


    return (
        <div className='wrapper'>
            <div className="flexColStart paddings innerWidth property-container">

                {/* like button */}
                <div className="like">
                    <Heart id={id} />
                </div>


                {/* Image */}
                <img src={data?.image} alt="home image" />


                <div className="flexCenter property-details">

                    {/* left */}
                    <div className="flexColStart left">

                        {/* head */}
                        <div className='flexStart head'>
                            <span className='primaryText'>{data?.title}</span>
                            <span className='orangeText' style={{ fontSize: '1.5rem' }}>${data?.price}</span>
                        </div>


                        {/* facilities */}
                        <div className="flexStart facilities" style={{ flexWrap: 'wrap' }}>

                            {/* Bathrooms */}
                            <div className="flexStart facility">
                                <FaShower size={20} color="#1F3E72" />
                                <span style={{ fontWeight: '500' }}>{data?.facilities?.bathrooms} حمام</span>
                            </div>

                            {/* Parkings */}
                            <div className="flexStart facility">
                                <AiTwotoneCar size={20} color="#1F3E72" />
                                <span style={{ fontWeight: '500' }}>{data?.facilities?.parkings} پارکینگ</span>
                            </div>

                            {/* Rooms */}
                            <div className="flexStart facility">
                                <MdMeetingRoom size={20} color="#1F3E72" />
                                <span style={{ fontWeight: '500' }}>{data?.facilities?.bedrooms} اتاق</span>
                            </div>


                        </div>


                        {/* description */}
                        <span className='secondaryText' style={{ textAlign: "justify" }}>
                            {data?.description}
                        </span>


                        {/* address */}
                        <div className='flexStart' style={{ gap: "1rem" }}>
                            <MdLocationPin size={25} />
                            <span className='secondaryText'>
                                {data?.address} {", "}
                                {data?.city} {" "}
                                {data?.country}
                            </span>
                        </div>


                        {/* booking button */}
                        <MantineProvider>

                            {bookings?.map((booking) => booking.id).includes(id) ? (
                                <>
                                    <Button variant='outline' w={"100%"} color='red' onClick={() => cancelBooking()} disabled={cancelling}>
                                        <span className='cancelling-text'>انصراف</span>
                                    </Button>

                                    <span>
                                        شما این ملک را در تایخ <span style={{ fontWeight: '500' }}>{bookings?.filter((booking) => booking?.id === id)[0].date}</span> رزرو کرده اید.
                                    </span>
                                </>
                            ) : (
                                <button
                                    className='button'
                                    onClick={() => {
                                        validateLogin() && setModelOpened(true)
                                    }}
                                >
                                    همین حالا رزرو کنید
                                </button>
                            )}



                            <BookingModal
                                opened={modalOpened}
                                setOpened={setModelOpened}
                                propertyId={id}
                                email={user?.email}
                            />

                        </MantineProvider>


                    </div>


                    {/* right */}
                    <div className='map'>
                        <Map address={data?.address} city={data?.city} country={data?.country} />
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Property