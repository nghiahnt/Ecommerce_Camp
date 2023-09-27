import { LoginDashboard, SignupDashboard } from '../../../components/Modals';
import images from "../../../assets/images"
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <img src={images.logo} alt="Homepage" className={cx('header-logo')} />
                    <div className={cx('header-btn')}>
                        <LoginDashboard />
                        <SignupDashboard />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
