import React from 'react'
import { useNavigate } from 'react-router'

type Props = {}

export default function LogoutForm({ }: Props) {
    const navigate = useNavigate()
    const handleClickLogout = () => {
        if (window.confirm('Are you sure to logout?')) {
            localStorage.clear()
            navigate('/login')
        }
        else return
    }
    return (
        <button className='btn btn-primary' onClick={() => handleClickLogout()}>Logout</button>
    )
}