import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const Register = Loadable(lazy(() => import('app/register/EventRegister')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const ReportPage = Loadable(lazy(() => import('views/reports/ReportPage')));
const Logout = Loadable(lazy(() => import('views/logout/logout')));

// ==============================|| MAIN ROUTING ||==============================  budgetPercentage: 4.81 budgetRate: 4.81
//

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'app',
            children: [
                {
                    path: 'register',
                    element: <Register />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-typography',
                    element: <UtilsTypography />
                }
            ]
        },
        {
            path: 'app',
            children: [
                {
                    path: 'images',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: 'app',
            children: [
                {
                    path: 'contact',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'app',
            children: [
                {
                    path: 'events',
                    element: <UtilsMaterialIcons />
                }
            ]
        },
        {
            path: 'app',
            children: [
                {
                    path: 'signIn',
                    element: <SamplePage />
                }
            ]
        },
        {
            path: 'app',
            children: [
                {
                    path: 'reports',
                    element: <ReportPage />
                }
            ]
        },
        {
            path: 'app',
            children: [
                {
                    path: 'logout',
                    element: <Logout />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
