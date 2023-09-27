import HeaderDashboard from '../components/Dashboard/Header';
import SidebarDashboard from '../components/Dashboard/Sidebar';

import classNames from 'classnames/bind';
import styles from './DashboardLayout.module.scss';

const cx = classNames.bind(styles);

function DashboardLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderDashboard />
            <div className={cx('container')}>
                <SidebarDashboard />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DashboardLayout;

DashboardLayout.propTypes 
