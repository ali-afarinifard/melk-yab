// ** Auth0
import { useAuth0 } from '@auth0/auth0-react'

// ** Toast
import { toast } from 'react-toastify'

const useAuthCheck = () => {
    
    const { isAuthenticated } = useAuth0()
    
    const validateLogin = () => {
        if (!isAuthenticated) {
            toast.error("ابتدا در سایت ثبت نام کنید", {position: "bottom-right"})
            return false;
        } else return true;
    }

    return (
        {
            validateLogin
        }
    )
}

export default useAuthCheck