import { FC, ReactElement } from 'react';
import styles from './index.module.scss';

const ContactComponent: FC = () => {
return(
    <div className={`mt-4 ${styles.contactContainer}`}>
        <div className={styles.title}>CONTACT</div>
        <div className={styles.subTitle}> Get In Touch </div>
        <div className={styles.container}>
            <div className={styles.description}>desc</div>
            <div className={styles.formTitle}>title</div>
        </div>
    </div>
)
}

export default ContactComponent;