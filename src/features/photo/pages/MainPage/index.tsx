import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../../../components/Banner'
import Header from '../../../../components/Header'
import LogoutForm from '../../../Login/components/LogoutForm'
type Props = {}

const MainPage = ({ }: Props) => {
    return (
        <div>
            <Header featureBtn={<LogoutForm />} />
            <Banner title='Your awesome photos' />
            <div>
                <div>
                    Your albums
                </div>
                <Link to='/user/photos/add'>
                    Add new photo
                </Link>
            </div>
        </div>
    )
}
export default MainPage;