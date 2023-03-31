import '../Dashboard.css';
// import ReactTooltip from 'react-tooltip';
import { useEffect } from 'react';
import { DashboardCard } from './applicationsProvider';
const ApplicationsCard = () => {


    useEffect(() => {
        const handleResize = () => {
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
