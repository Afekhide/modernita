import Logo from './Logo';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/NavBar.module.scss';

export default function NavBar(){
    return (
        <nav className={styles.nav}>
            <section className={styles.menuSection}>
                <section>
                    <Image className={styles.menuIcon} src='/icons/menu.svg' width={24} height={24} alt='menu icon'/>
                </section>

                <section className={styles.links}>
                    <Link href='/'>Shop</Link>
                    <Link href='/'>Services</Link>
                    <Link href='/'>Sales</Link>
                    <Link href='/'>Contacts</Link>
                </section>
            </section>
            <section>
                <Logo/>
            </section>
        </nav>
    )
}