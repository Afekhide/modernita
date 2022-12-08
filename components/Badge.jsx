import styles from '../styles/Badge.module.scss';
import Image from 'next/image';

export default function Badge({icon, value, handler}){
    return (
        <section onClick={handler} className={styles.badge}>
            <Image src={icon} alt='badge' width={24} height={24}/>
            {((value > 0)) ? <span className={styles.value}>{value}</span> : null}
        </section>
    )
}