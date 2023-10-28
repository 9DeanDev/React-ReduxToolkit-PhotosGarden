import { NavLink, useNavigate } from 'react-router-dom'
import Styles from './LoginForm.module.scss'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axiosClient from '../../../../configs/axiosClient';
import { useState } from 'react';

const schema = yup
    .object()
    .shape({
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required'),
    })
    .required();

type Props = {}

export default function LoginForm({ }: Props) {
    const [status, setStatus] = useState<'on' | 'off'>('off')
    const handleClickLogin = () => {
        setStatus(status === 'off' ? 'on' : 'off')
    }
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = async (data: any) => {
        try {
            const response = await axiosClient.post('/auth/login', data)
            console.log(response.data)
            if (response.data.loggedInUser) {
                alert('LOGIN SUCCESS')
                localStorage.setItem('access_token', response.data.access_token)
                navigate('/user/photos')
            }
            else {
                alert('LOGIN FAILED')
            }
        }
        catch (error: any) {
            console.log(error)
            if (error.response.status === 401) {
                alert('LOGIN FAILED')
            }
        }
    }
    return (
        <>
            <button id="myBtn" className='btn btn-primary' onClick={() => handleClickLogin()}>Login</button>

            <div id="myModal" className={Styles.modal} style={{ display: status === 'off' ? 'none' : 'block' }}>
                <div className={Styles.modal_content}>
                    <span className={Styles.close} onClick={() => handleClickLogin()}>&times;</span>
                    <form className={`${Styles.login_Form} d-flex flex-column gap-3 px-3 py-4`} onSubmit={handleSubmit(onSubmit)}>
                        <label>Username:</label>
                        <input className='form-control' {...register('username')} />
                        {errors.username?.message}
                        <label>Password:</label>
                        <input className='form-control' type='password' {...register('password')} />
                        {errors.password?.message}
                        {/* <NavLink to='/user/photos'> */}
                        <button className='btn btn-primary w-100' type='submit' >
                            Login
                        </button>
                        {/* </NavLink> */}
                    </form>
                </div>
            </div>
        </>
    )
}