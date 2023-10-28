import React from 'react'
import Banner from '../../../components/Banner'
import Header from '../../../components/Header'
import Images from '../../../constants/images'
import LoginForm from '../components/LoginForm'

type Props = {}

export default function LoginPage({ }: Props) {
    return (
        <div>
            <Header featureBtn={<LoginForm />} />
            <Banner title='Login now to see your albums' background_url={Images.Login_BG} />
        </div>
    )
}