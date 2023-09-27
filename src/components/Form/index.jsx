/* eslint-disable react/prop-types */
import classNames from 'classnames/bind';
import styles from './Form.module.scss';

const cx = classNames.bind(styles);

function Form(options) {

    return (
        <>
            <div className={cx('form-group')}>
                <label htmlFor="text" className={cx('form-label')}>
                    {options.name}
                </label>
                <input type="text" className={cx('form-control')} />
                <span className={cx('form-message')}></span>
            </div>

            <button className={cx('form-submit')} onClick={options.onClick}>
                Submit
            </button>
        </>
    );
}

Form.propTypes = {
};

export default Form;
