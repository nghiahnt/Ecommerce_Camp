// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss"

const cx = classNames.bind(styles)

function DefaultSidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h1>The Sidebar</h1>
        </aside>
    );
}

export default DefaultSidebar;
