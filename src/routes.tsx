import { RouteObject } from 'react-router-dom';
import { SiteWrapper } from './components/site-wrapper/site-wrapper';
import { HomePage } from './components/home-page/home-page';
import { About } from './components/about/about';
import {Login} from './components/login/login';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <SiteWrapper />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'about', element: <About /> },
            { path: 'login',element: <Login />},
        ],
    },
];
