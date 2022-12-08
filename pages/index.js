import Badge from '../components/Badge';
import {useState} from 'react';
import styles from '../styles/Index.module.scss';

export default function Home(){

    const [active, setActive] = useState(false);
    const handler = (args) => setActive(!active);
    
    return (
    <section>
        <p>Hello Guys $</p>
        <Badge icon={'/icons/twitter.svg'} handler={handler}/>
        <Badge icon={'/icons/search.svg'} handler={handler}/>
        <Badge icon={'/icons/person.svg'} handler={handler} value={3}/>
        <p>{active ? 'Active' : 'Inactive'}</p>
    </section>
    )
}