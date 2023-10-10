import { FC, ReactElement } from 'react';
import styles from './index.module.scss';
import logo from 'assets/my_icon.png';
import { useTranslation } from 'react-i18next'
import { NAV_ITEMS, USER } from 'Constants';
import { Link, useLocation } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const SideNav: FC = () => {
    const { t, i18n } = useTranslation();
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
                <Nav.Link as={Link} className={`${styles.navItem} ${link === router.pathname ? styles.active : null}`}  to={link}>{t(`navItems.${name}`)}</Nav.Link>
            )
        })
        return (
            <Navbar collapseOnSelect expand="lg" bg="transparent" sticky='top' variant="dark" className={styles.container}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ml-4 mt-4'/>
                <Navbar.Brand  href="#home" className='ml-4 mt-2'>{renderLogo()}</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={`ml-auto ${styles.navItemsContainer}`}>
                        {items.map((element: ReactElement) => element)  }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    const langChan = (event: any) => {
        console.warn(event.target.value)
        i18n.changeLanguage(event.target.value);
    }

    const renderChangeLngButton = () => {
        return (
            <div className={styles.langBtn}>
                <select name="lang" onChange={langChan} value={i18n.language} >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                </select>
            </div>
        )
    }

    return (
        <>
        {renderNavItems()}
        {renderChangeLngButton()}
        </>
    )
    }
    
export default SideNav