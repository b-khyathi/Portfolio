import { SKILLS } from 'Constants';
import styles from './index.module.scss';
import { FC } from 'react'
import { useTranslation } from 'react-i18next';

const SkillsComponent: FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.skillsContainer}>
            <div className={`mt-4 mb-4 ml-3 ${styles.title}`}>
                {t('about.skills.title')}
            </div>
            <div className={`mb-4 ml-3 ${styles.subTitle}`}>
                {t('about.skills.subtitle')}
            </div>
            <div className={styles.skillList}>
                {
                    SKILLS.map(skill => (
                        <div className={styles.skill}>
                            <i className={`${skill.className} ${styles.icon}`}></i>
                            <span className={`${styles.skillTitle} mt-3`}>{t(skill.title)}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SkillsComponent;