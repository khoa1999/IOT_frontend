import { createBoard } from '@wixc3/react-board';
import { Login } from '../../../components/login/login';
import styles from './login.board.module.scss';
import classNames from 'classnames';
import loginStyles from '../../../components/login/login.module.scss';

export default createBoard({
    name: 'Login',
    Board: () => (
        <Login className={classNames(styles.login, styles.mainContainer, loginStyles.mainHeader)} />
    ),
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#b82c2c',
    },
});
