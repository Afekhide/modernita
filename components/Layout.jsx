import NavBar from './NavBar';
import styles from '../styles/Layout.module.scss';

export default function Layout({children}){
    return (
        <>
        <NavBar/>
        <section className={styles.layout}>
            {children}
        </section>
        </>
    
    )
}