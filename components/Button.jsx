import styles from '../styles/Button.module.scss';

export default function Button({handler, children, args, inverted}){
    return (
    <button 
        onClick={_ => handler(args)} 
        className={`${styles.button} ${inverted ? styles.inverted: ''}`}>
        {children}
    </button>
    )
}