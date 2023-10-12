import { FC, ReactElement } from 'react';
import styles from './index.module.scss';
import MyPic from 'assets/my_pic.jpg';
import { useTranslation } from 'react-i18next';
import { SKILLS } from 'Constants';
import { Card } from 'react-bootstrap';

const AboutComponent: FC = () => {
    const { t } = useTranslation();

    const renderDivider = (type: 'lowerTriangle' | 'pentagon'): ReactElement => {
        const upperClass = type === 'lowerTriangle' ? 'triangleUp' : 'pentagonUp';
        const lowerClass = type === 'lowerTriangle' ? 'triangleDown': 'pentagonDown';

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

    const renderSkills = (): ReactElement => {
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
                                <span className={`${styles.skillTitle} mt-3`}>{skill.title}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }

    const renderExperienceSection = (): ReactElement => {
        return(
            <div className={`${styles.expContainer}`}>
                <div className={`mt-4 ml-3 mb-4 ${styles.title}`}> { t('about.experience.title') }</div>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    
            </div>
        )
    }

    return (
        <div className={`${styles.aboutContainer}`} id='about'>
            {renderAboutSection()}
            {renderDivider('lowerTriangle')}
            {renderSkills()}
            {renderDivider('pentagon')}
            {renderExperienceSection()}

        </div>
    )
}

export default AboutComponent;