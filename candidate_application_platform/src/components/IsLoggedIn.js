import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { KEY_ACCESS_TOKEN, getItem } from '../utils/localStorageManager'


const IsLoggedIn = () =>{

    const user = getItem(KEY_ACCESS_TOKEN)
    console.log('user kya rtha ',user);

    return (

        <>
            {user ? <Outlet/>: <Navigate to='/login'/>}
        </>
    )
}

export default IsLoggedIn