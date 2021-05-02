import React from 'react';
import { Redirect } from 'react-router-dom';
import Dasbhoard from '../app/modules/dashboard/Dashboard';

const routes =[
    {
        path: '/dashboard/:id',
        exact: true,
        component: Dasbhoard
    },
    {
        path: '/error-404',
        component: React.lazy(() => import('../app/pages/Error404Page'))
    },
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/dashboard/1" />
    },
    {
        component: () => <Redirect to="/error-404" />
    }
];

export default routes;
