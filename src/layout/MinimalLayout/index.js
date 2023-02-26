// project imports
import Customization from '../Customization';
import { Outlet } from 'react-router-dom';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
    <>
        <Outlet />
        <Customization />
    </>
);

export default MinimalLayout;
