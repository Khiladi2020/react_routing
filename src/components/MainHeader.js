import { NavLink } from "react-router-dom";

import styles from "./MainHeader.module.css";

const MainHeader = () => {
    return (
        <header>
            <nav className={styles.navigation}>
                <ul>
                    <li className={styles.navigation_item}>
                        <NavLink activeClassName={styles.active_item} to="/welcome">Welcome</NavLink>
                    </li>
                    <li className={styles.navigation_item}>
                        <NavLink activeClassName={styles.active_item} to="/products">Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
