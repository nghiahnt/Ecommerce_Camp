import Modal from 'react-modal';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SignupDashboard.module.scss';
import { FormAccount } from '..';
import isEmail from 'validator/lib/isemail';

const cx = classNames.bind(styles);

function SignupDashboard() {
    const [showEmailCompo, setShowEmailCompo] = useState(true);
    const [showCaptcha, setShowCaptcha] = useState(false);
    const [showEmailCode, setShowEmailCode] = useState(false);
    const [open, setIsOpen] = useState(false);
    const [showPassWord, setShowPassWord] = useState(false)
    const [passWord, setPassWord] = useState('root_password');
    const [emailValue, setEmailValue] = useState('');

    const closeModal = () => {
        setIsOpen(false);
        setShowEmailCode(false);
        setShowCaptcha(false);
        setShowEmailCompo(true);
        setShowPassWord(false)
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const 

    const handleClick = (e) => {
        e.preventDefault();
        console.log('Clicked');
        setShowEmailCompo(false);
        setShowCaptcha(true);
    };

    const handleCaptcha = (e) => {
        e.preventDefault();
        console.log('Entered Captcha');
        setShowCaptcha(false);
        setShowEmailCode(true);
    };

    const handleCodeEmail = (e) => {
        e.preventDefault();
        console.log('Entered Email code');
        // Show PW
        setShowEmailCode(false)
        setShowPassWord(true)

        alert('redirect to Login page')

    };

    function PW () {
        return (
            <div className={cx('wrapper-pw')}>
                <label htmlFor="" className={cx('label-pw')}>Your Password:</label>
                <p className={cx("password")}>{passWord}</p>
            </div>
        )
    }

    function validateEmail(email) {
        return isEmail(email);
    }

    return (
        <div className={cx('wrapper')}>
            <Modal isOpen={open} onRequestClose={closeModal} className={cx('signup-form-wrapper')}>
                <div className={cx('container')}>

                    {/* maybe change form tag to div tag  */}
                    <form action="" method="POST" className={cx('form')} id="form-1">
                        <h3 className={cx('heading')}>Register Member</h3>
                        <div className={cx('spacer')}></div>

                        {showEmailCompo && <FormAccount name="Email" onClick={handleClick} />}

                        {showCaptcha && <FormAccount name="Captcha" onClick={handleCaptcha} />}

                        {showEmailCode && (
                            <FormAccount
                                name="We will send code to your Email, enter here..."
                                onClick={handleCodeEmail}
                            />
                        )}

                        {showPassWord && <PW />}
                    </form>
                </div>
            </Modal>

            <a className={cx('signup-header-a')} onClick={openModal}>
                Sign up
            </a>
        </div>
    );
}

export default SignupDashboard;
