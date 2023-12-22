import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashboardNav from '../Pages/Dashboard/DashboardNav';

const Dashboard = () => {
    return (
        <>
        <DashboardNav></DashboardNav>
            <div className='flex'>
                <div className='w-64 h-full bg-orange-400'>
                    <ul className='menu'>
                        <li><Link>Home</Link></li>
                        <li><Link to="/dashboard/addTask">Add Task</Link></li>
                        <li><Link>Previous Task</Link></li>
                    </ul>
                </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;