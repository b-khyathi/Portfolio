import React from 'react'
import styles from './index.module.scss'
import SideNav from '../sidenav';

const HomeComponent: React.FC = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.detailsContainer}>
                <SideNav />
            </div>
        </div>
    )
}

export default HomeComponent;