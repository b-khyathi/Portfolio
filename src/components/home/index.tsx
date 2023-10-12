import React from 'react'
import styles from './index.module.scss'
import { useTranslation } from 'react-i18next'

const HomeComponent: React.FC = () => {
    const {t} = useTranslation();
    return (
        <div>
            <div className={styles.quoteContainer}>
                    <div className={styles.quote}>
                        { t('homepage.quote') }
                    </div>
            </div>
        </div>
    )
}

export default HomeComponent;