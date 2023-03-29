import Drag from '../../../assets/icons/Edit_drag_white.svg';
import DragW from '../../../assets/icons/Edit_drag.svg';
import '../Dashboard.css';
// import ReactTooltip from 'react-tooltip';
import { useEffect, useState } from 'react';

import nodata from '../../../assets/icons/nodata.png';
import { useNavigate } from 'react-router-dom';
import { DashboardCard } from './applicationsProvider';
const ApplicationsCard = () => {
    const navigate = useNavigate();
    const handlenavigate = () => {
        navigate('/home');
    };

    const userRole = localStorage.getItem("rolename")
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);


    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <DashboardCard >

        </DashboardCard>
    );
};

export default ApplicationsCard;
