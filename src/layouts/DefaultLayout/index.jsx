import { DefaultHeader, DefaultSidebar } from '../components';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <DefaultHeader />
            <div className={cx('container')}>
                <DefaultSidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

DefaultLayout.propTypes;
