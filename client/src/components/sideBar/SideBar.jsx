import React from "react";
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PeopleIcon from '@mui/icons-material/People';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeedIcon from '@mui/icons-material/Feed';
import CreditCardIcon from '@mui/icons-material/CreditCard';

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span>Kevin Admin</span>
       </div> 
      <hr></hr>
      <div className="center">
        <ul>
        <p className="title" >Main</p>
        <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <p className="title">List</p>
          <li>
            <PeopleIcon />
            <span>Users</span>
          </li>
          <li>
            <LocalShippingIcon />
            <span>Orders</span>
          </li>
          <li>
           <CreditCardIcon />
            <span>Products</span>
          </li>
          <li>
            <PeopleIcon />
            <span>Delivery</span>
          </li>
          <p className="title">Lings</p>
          <li>
            <QueryStatsIcon />
            <span>Stats</span>
          </li>
          <li>
            <HealthAndSafetyIcon />
            <span>System Health</span>
          </li>
          <li>
            <FeedIcon/>
            <span>Logs</span>
          </li>
          <li>
          <SettingsIcon />
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <AccountCircleIcon />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon />
            <span>LogOut</span>
          </li>

        </ul>
      </div>
      <div className="bottom">color</div>
    </div>
    
  );
};
