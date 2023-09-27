import Modal from 'react-modal';
import classNames from 'classnames/bind';
import styles from './LoginDashboard.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function LoginDashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPassWordValue] = useState('');

    const handleChangeEmail = (e) => {
        const emailValue = e.target.value;
        setEmailValue(emailValue);
    };

    const handleChangePw = (e) => {
        const passwordValue = e.target.value;
        setPassWordValue(passwordValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailValue, passwordValue);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <div>
            <Modal isOpen={isOpen} onRequestClose={closeModal} className={cx('login-form-modal')}>
                <div className={cx('container')}>
                    {/* Login form */}
                    <form action="" className={cx('form')} id="form-1">
                        <h3 className={cx('heading')}>Login</h3>
                        <div className={cx('spacer')}></div>
                        <div className={cx('form-group')}>
                            <label htmlFor="email" className={cx('form-label')}>
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="VD: email@domain.com"
                                className={cx('form-control')}
                                value={emailValue}
                                onChange={handleChangeEmail}
                            />
                            <span className={cx('form-message')}></span>
                        </div>
                        <div className={cx('form-group')}>
                            <label htmlFor="password" className={cx('form-label')}>
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className={cx('form-control')}
                                value={passwordValue}
                                onChange={handleChangePw    }
                            />
                            <span className={cx('form-message')}></span>
                        </div>
                        <a href="#" className={cx('forgetpw')}>
                            Forget Password?
                        </a>
                        <button className={cx('form-submit')} onClick={handleSubmit}>
                            {'Login'}
                        </button>
                    </form>
                </div>
            </Modal>
            <a className={cx('login-header-a')} onClick={openModal}>
                Login
            </a>
        </div>
    );
}

export default LoginDashboard;

LoginDashboard.propTypes;
