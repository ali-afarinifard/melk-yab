import React from 'react'
import ReactDOM from 'react-dom/client'

// ** Main Component
import App from './App.jsx'

// ** Styles
import './index.css'

// ** Auth0
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain='dev-1bcnnbqqa6te5mok.us.auth0.com'
        clientId='XIy6JGCKc6U1tqL90TgaquBW5bo9PWFW'
        authorizationParams={{
            redirect_uri: "https://melkyab-ejareh.vercel.app"
        }}
        audience='http://localhost:8000'
        scope='openId profile email'
    >
        <App />
    </Auth0Provider>
)
