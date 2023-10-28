import { NavLink } from 'react-router-dom'
import Styles from './Header.module.scss'
import LoginForm from '../../features/Login/components/LoginForm';
import { ReactElement } from 'react';

type Props = {
    featureBtn?: ReactElement;
    toUrl?: string;
}

export default function Header({ featureBtn, toUrl = '' }: Props) {
    return (
        <div className={Styles.header}>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col-auto'>
                        <a href='' className={Styles.title} target='blank'>
                            9DeanDev
                        </a>
                    </div>
                    <div className='col-auto'>
                        {featureBtn}
                    </div>
                </div>
            </div>
        </div>
    )
}