import { FC, ReactElement } from 'react';
import styles from './index.module.scss';
import logo from 'assets/my_icon.png';
import { useTranslation } from 'react-i18next'
import { NAV_ITEMS, USER } from 'Constants';
import { Link, useLocation } from 'react-router-dom';

const SideNav: FC = () => {
    const { t } = useTranslation();
    const router = useLocation();

    const renderLogo = (): ReactElement => {
        return (
            <div className={styles.logo}>
                <img className={styles.logoImage} src={logo} alt="logo" />
                <div className={styles.about}>
                    <span>
                        {t(`homepage.${USER}`)}
                    </span>
                    <span className={styles.designation}>
                        {t('homepage.designation')}
                    </span>
                </div>
            </div>
        )
    }

    const renderNavItems = (): ReactElement => {
        const items: ReactElement[] = [];
        Object.entries(NAV_ITEMS).forEach(([name, link]) => {
            items.push(
                <Link className={`${styles.navItem} ${link===router.pathname ? styles.active : null}`} to={link}>{name}</Link>
            )
        })
        return (
            <div className={styles.navList}>
                {items.map((element: ReactElement) => element)}
            </div>
        );
    }

    return (
        <div className={`${styles.container} ${router.pathname !== NAV_ITEMS.home ? styles.dark : null}`}>
            {renderLogo()}
            {renderNavItems()}
        </div>
    )
}

export default SideNav