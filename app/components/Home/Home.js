import React from 'react';
import { container, title, slogan } from './styles.css';

export default function Home (props) {
    return (
        <div className={container}>
            <p className={title}>{'Budget Alive'}</p>
            <p className={slogan}>{`The simple, efficient, and fun way to enjoy making a Budget!`}</p>
        </div>
    );
}
