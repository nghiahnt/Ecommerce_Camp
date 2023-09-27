import classNames from 'classnames/bind';
import styles from './HeaderDashboard.module.scss';
import images from '../../../../assets/images';
import { SignupDashboard, LoginDashboard } from '../../../../components/Modals';

const cx = classNames.bind(styles);

function HeaderDashboard() {
    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <img src={images.logo} alt="Dashboard" className={cx('header-logo')} />
                    <div className={cx('header-btn')}>
                        <LoginDashboard />
                        <SignupDashboard />
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderDashboard;
