
// ** Axios
import axios from 'axios';

// ** Day JS
import dayjs from 'dayjs';

// ** Toast
import { toast } from 'react-toastify';


// Create BASE_URL
export const api = axios.create({
    baseURL: "https://melkyab-server.vercel.app/api"
});

// Get All Properties
export const getAllProperties = async () => {
    try {

        const response = await api.get("/residency/allresd", {
            timeout: 10 * 1000,
        })

        if (response.status === 400 || response.status === 500) {
            throw response.data;
        }

        return response.data;

    } catch (error) {
        toast.error("ناموفق، خطایی رخ داده!");
        throw error;
    }
}



// Get Property ID
export const getProperty = async (id) => {
    try {

        const response = await api.get(`/residency/${id}`, {
            timeout: 10 * 1000,
        })

        if (response.status === 400 || response.status === 500) {
            throw response.data;
        }

        return response.data;

    } catch (error) {
        toast.error("ناموفق، خطایی رخ داده!");
        throw error;
    }
}



// User Details
export const createUser = async (email, token) => {
    try {

        await api.post(`/user/register`, { email },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

    } catch (error) {
        toast.error("ناموفق، خطایی رخ داده!");
        throw error;
    }
};



// Book Visit
export const bookVisit = async (date, propertyId, email, token) => {

    try {

        await api.post(
            `/user/bookVisit/${propertyId}`,
            {
                email,
                id: propertyId,
                date: dayjs(date).format("DD/MM/YYYY")
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

    } catch (error) {
        toast.error("ناموفق، خطایی رخ داده!");
        throw error;
    }

}



// Remove Booking
export const removeBooking = async (id, email, token) => {

    try {

        await api.post(
            `/user/removeBooking/${id}`,
            {
                email
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

    } catch (error) {
        toast.error("ناموفق، خطایی رخ داده!");
        throw error;
    }

}



// To Favourites Properties (Like)
export const toFav = async (id, email, token) => {

    try {

        await api.post(
            `/user/toFav/${id}`,
            {
                email
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

    } catch (error) {
        throw error;
    }

}



// Get All Favourites
export const getAllFav = async (email, token) => {

    if (!token) return;

    try {

        const res = await api.post(
            `/user/allFav`,
            {
                email,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return res.data["favResidenciesID"]

    } catch (error) {
        toast.error("ناموفق، خطایی رخ داده!");
        throw error;
    }

}



// Get All Bookings
export const getAllBookings = async (email, token) => {

    if (!token) return;

    try {

        const res = await api.post(
            `/user/allBookings`,
            {
                email,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return res.data["bookedVisits"];

    } catch (error) {
        toast.error("ناموفق، خطایی رخ داده!");
        throw error;
    }

}



// Create Residency
export const createResidency = async (data, token) => {
    try {
        const res = await api.post(
            `/residency/create`,
            {
                data
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
    } catch (error) {
        throw error
    }
};