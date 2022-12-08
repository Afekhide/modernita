import Button from '../components/Button';
import styles from '../styles/404.module.scss';

export default function NotFound(){

    let _handler = (args) => console.log(args)
    return (
        <section className={styles.wrapper}>
            <section className={styles.main}>
                <p>Hello Guys how're you doing today?</p>
                <p>$Nobunaga Bakari</p>
                <Button args='Hello Karen' handler={_handler}>Hello Guys</Button>
            </section>
        </section>
    )
}