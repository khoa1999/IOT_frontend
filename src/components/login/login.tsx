import classNames from 'classnames';
import styles from './login.module.scss';
import React from 'react'
import FireFighterSvg from '../../assets/firefighter.svg?react';

export interface LoginProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Login = ({ className }: LoginProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles.mainContainer, className)}>
                <div className={classNames(styles.mainHeader, className)} >
                    <FireFighterSvg style={{ width: '8em', height: '8em'}}/>
                    <h1>First Responder Service</h1>
                    <div className={classNames(styles.input, className)}>
                        <label htmlFor="email">Username:</label>
                        <input id="email" name="email"/>
                    </div>
                    <div className={classNames(styles.input, className)}>
                        <label htmlFor="email">Password:</label>
                        <input id="password" name="password" type="password"/>
                    </div>
                    <div className={classNames(styles.loginbutton, className)}>
                        <button>{'Log in'}</button>
                    </div>
                </div>
            </div>
        <