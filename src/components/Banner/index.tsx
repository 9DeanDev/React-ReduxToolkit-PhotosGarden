import Styles from './Banner.module.scss'

type Props = {
    title?: string;
    background_url?: string;
}

export default function Banner({ title, background_url }: Props) {
    const bannerStyle = background_url ? { backgroundImage: `url(${background_url})` } : {}
    return (
        <div className={`${Styles.Banner} container-fluid`} style={bannerStyle}>
            <div className={Styles.title}>
                {title}
            </div>
        </div>
    )
}