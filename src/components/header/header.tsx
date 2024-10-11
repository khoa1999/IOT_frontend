import classNames from 'classnames';
import styles from './header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import {useState} from 'react';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    const [isHover,setHover] = useState(false);
    return (
        <div className={classNames(styles.root, className)}>
            <a href="/">Logo</a>
            <div className={styles.menu}>
                <NavLink
                    to="/"
                    className={({ isActive }) => classNames({ [styles.active]: isActive ,[styles.inactive]: !isActive})}})}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => classNames({ [styles.active]: isActive ,
                    [styles.inactive]: !isActive})}
                >
                    About
                </NavLink>
                <NavLink
                    to="/login"
                    className={({ isActive }) => classNames({ [styles.active]: isActive ,[styles.inactive]: !isActive})}})}
                >
                    Login
                </NavLink>
            </div>
        </div>
    );
};
