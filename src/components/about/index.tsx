import { FC, ReactElement } from 'react';
import styles from './index.module.scss';
import MyPic from 'assets/my_pic.jpg';
import { useTranslation } from 'react-i18next';
import { EXPERIENCES, SKILLS } from 'Constants';
import { Card } from 'react-bootstrap';
import SkillsComponent from './skills';

const AboutComponent: FC = () => {
    const { t } = useTranslation();

    const renderDivider = (type: 'lowerTriangle' | 'pentagon'): ReactElement => {
        const upperClass = type === 'lowerTriangle' ? 'triangleUp' : 'pentagonUp';
        const lowerClass = type === 'lowerTriangle' ? 'triangleDown' : 'pentagonDown';

        return (
            <div className={styles.divider}>
                <div className={styles[upperClass]}></div>
                <div className={styles[lowerClass]}></div>
            </div>
        )
    }

    const renderAboutSection = (): ReactElement => {
        return (
            <div className={styles.detailsContainer}>
                <div className={`ml-4 mb-4 ${styles.title}`}>
                    {t('about.title')}
                </div>
                <div className={styles.bio}>
                    <img src={MyPic} alt="My pic" className={styles.profilePic} />
                    <div className={`ml-4 ${styles.aboutMe}`}>
                        <div className={styles.subtitle}>
                            {t('about.subtitle')}
                        </div>
                        {t('about.bio-1')}<br />
                        {t('about.bio-2')}<br />
                        {t('about.bio-3')}
                    </div>
                </div>
            </div>
        );
    }
    
    const renderExperienceSection = (): ReactElement => {
        return (
            <div className={`${styles.expContainer}`}>
                <div className={`mt-4 ml-4 mb-4 ${styles.title}`}> {t('about.experience.title')}</div>
                <div className={`ml-4 mr-4 ${styles.experiences}`}>
                    {
                        EXPERIENCES.map(exp => (
                            <Card className={styles.expCard}>
                                <Card.Img variant="top" src={require("../../assets/company/"+ exp.image)} />
                                <Card.Body>
                                    <Card.Title>{t(exp.title)} {exp.time}</Card.Title>
                                    <Card.Text>
                                        { t(exp.description) }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>

            </div>
        )
    }

    return (
        <div className={`${styles.aboutContainer}`} id='about'>
            {renderAboutSection()}
            {renderDivider('lowerTriangle')}
            <SkillsComponent />
            {renderDivider('pentagon')}
            {renderExperienceSection()}

        </div>
    )
}

export default AboutComponent;