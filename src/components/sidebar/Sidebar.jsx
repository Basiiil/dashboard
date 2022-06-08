import React, { useContext } from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddchartIcon from '@mui/icons-material/Addchart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">lamadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineOutlinedIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <li>
              <AddBusinessOutlinedIcon className='icon' />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardOutlinedIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <AddchartIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className='icon' />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className='icon' />
            <span>Setting</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
      </div>
    </div>
  );
}

export default Sidebar