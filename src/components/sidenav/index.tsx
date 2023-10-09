import { FC } from 'react';
import styles from './index.module.scss';
import logo from 'assets/my_icon.png';
import { useTranslation } from 'react-i18next'
import { USER } from 'Constants';

const SideNav: FC = () => {
    const { t }  = useTranslation();
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
                <div className={styles.about}>
                    <span>
                    {t(`homepage.${USER}`)}
                    </span>
                    <span className={styles.designation}>
                        {t('homepage.designation')}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SideNav