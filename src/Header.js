import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import HeaderOption from './HeaderOption';


function Header() {
  return (
    <div className="header">
        <div className="header__left">
            
            <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
            <div className="header__search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>

        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccount} title="My Network" />

            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption avatar="https://firebasestorage.googleapis.com/v0/b/linkedin-clone-726b4.appspot.com/o/img%2Fprofile%2FIMG20210620140237.jpg?alt=media&token=c53e30ff-7a47-4241-bfc7-25921e2a0377" title="Me" />
        </div>
    </div>
  );
}

export default Header;
