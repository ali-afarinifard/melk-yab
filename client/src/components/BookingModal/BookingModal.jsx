import React, { useContext, useState } from 'react'

// ** Context
import UserDetailContext from '../../context/UserDetailContext'

// ** Mantine
import { Button, Modal } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import '@mantine/dates/styles.css';

// ** React-Query
import { useMutation } from 'react-query'

// ** Book Visit api
import { bookVisit } from '../../utils/api'

// ** Toast
import { toast } from 'react-toastify'

// ** dayjs
import dayjs from 'dayjs'

const BookingModal = ({ opened, setOpened, email, propertyId }) => {

    // Book Visit Button Value
    const [value, setValue] = useState(null)

    // User Detail Context
    const { userDetails: { token }, setUserDetails } = useContext(UserDetailContext)


    // Handler Booking Success
    const handleBookingSuccess = () => {

        toast.success("رزرو با موفقیت انجام شد", {
            position: "bottom-right"
        });

        setUserDetails((prev) => ({
            ...prev,
            bookings: [
                ...prev.bookings,
                {
                    id: propertyId,
                    date: dayjs(value).format('DD/MM/YYYY')
                }
            ]
        }))

    }

    // Mutate
    const { mutate, isLoading } = useMutation({
        mutationFn: () => bookVisit(value, propertyId, email, token),
        onSuccess: () => handleBookingSuccess(),
        onError: ({ response }) => toast.error(response.data.message),
        onSettled: () => setOpened(false)
    })

    return (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="تاریخ رزرو را انتخاب کنید"
            centered
        >

            <div className='flexColCenter' style={{ gap: "1rem", direction: 'ltr' }}>
                <DatePicker value={value} onChange={setValue} minDate={new Date()} />
                <Button disabled={!value || isLoading} onClick={() => mutate()}>
                    ثبت رزرو
                </Button>
            </div>

        </Modal>
    )
}

export default BookingModal