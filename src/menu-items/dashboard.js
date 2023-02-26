// assets
import { IconDashboard, IconRegistered, IconPhoto, IconPhone, IconCalendarEvent, IconLogin, IconLogout } from '@tabler/icons';
import jwtService from 'app/services';
import { useDispatch } from 'react-redux';

// constant
const icons = { IconDashboard, IconRegistered, IconPhoto, IconPhone, IconCalendarEvent, IconLogin, IconLogout };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Menu',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'register',
            title: 'Register',
            type: 'item',
            url: '/app/register',
            icon: icons.IconRegistered,
            breadcrumbs: false
        },
        {
            id: 'util-events',
            title: 'Event List',
            type: 'item',
            url: '/app/events',
            icon: icons.IconCalendarEvent,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Images',
            type: 'item',
            url: '/app/images',
            icon: icons.IconPhoto,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Contact Us',
            type: 'item',
            url: '/app/contact',
            icon: icons.IconPhone,
            breadcrumbs: false
        },
        {
            id: 'util-contact',
            title: 'Sign In',
            type: 'item',
            url: '/app/signIn',
            icon: icons.IconLogin,
            breadcrumbs: false,
            LoggedIn: true
        },
        {
            id: 'util-report',
            title: 'Reports',
            type: 'item',
            url: '/app/reports',
            icon: icons.IconLogin,
            breadcrumbs: true,
            auth: true
        },
        {
            id: 'util-logout',
            title: 'Logout',
            type: 'item',
            url: '/app/logout',
            icon: icons.IconLogout,
            breadcrumbs: true,
            auth: true,
            logout: true
        }
    ]
};

export default dashboard;
