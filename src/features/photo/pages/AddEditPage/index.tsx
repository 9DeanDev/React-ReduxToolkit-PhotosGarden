import Styles from './AddEditPage.module.scss'
import Header from '../../../../components/Header'
import Banner from '../../../../components/Banner'
import Images from '../../../../constants/images'
import PhotoForm from '../../components/PhotoForm'
import LogoutForm from '../../../Login/components/LogoutForm'
type Props = {}

const AddEditPage = ({ }: Props) => {
    return (
        <div className={Styles.AddEditPage}>
            <Header featureBtn={<LogoutForm />} />
            <Banner title='Pick your amazing photos' background_url={Images.AddPhoto_BG} />
            <div className={`{Styles.photo_Edit_Form} container mt-3`}>
                <PhotoForm />
            </div>
        </div>
    )
}
export default AddEditPage;