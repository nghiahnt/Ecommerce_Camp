import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import classNames from 'classnames/bind';
import styles from './SidebarDashboard.module.scss';

const cx = classNames.bind(styles);

function SidebarDashboard() {
    return (
        <aside className={cx('wrapper')}>
            <Sidebar className={cx('content')}>
                <Menu>
                    <SubMenu label="Charts">
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </aside>
    );
}

export default SidebarDashboard;
