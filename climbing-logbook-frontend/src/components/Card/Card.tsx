import type { ReactNode } from 'react';
import styles from './Card.module.scss'

interface Card{
    children: ReactNode
}

function Card(props: Card) {
    return (
        <div className={styles.card}>{props.children}</div>
    );
}

export default Card;