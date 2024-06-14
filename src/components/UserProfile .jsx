import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import Button from './Button';

const UserProfile = () => {
    const auth = useAuth();
    const [showLogoutButton, setShowLogoutButton] = useState(false);

    const handleMouseEnter = () => {
        setShowLogoutButton(true);
    };

    const handleMouseLeave = () => {
        setShowLogoutButton(false);
    };

    const handleLogout = () => {
        auth.logout();
    };

    return (
        <div>
            {auth.isAuthenticated() ? (
                <div 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className='w-[120px] flex flex-col items-center'
                >
                    <FontAwesomeIcon icon={faUser} style={{ fontSize: "25px", marginRight: "8px" }} />
                    {auth.fullName} 
                    {showLogoutButton && (
                        <Button onClick={handleLogout} style={{ backgroundColor: "gray", padding: "2px 12px", borderRadius: "3px", fontSize: "14px", marginTop: "5px" }}>
                            Logout
                        </Button>
                    )}
                </div>
            ) : (
                <Link to={"/login"} className='flex flex-col items-center justify:center w-[100px] hover:opacity-[0.9] text-[14px]'>
                    <FontAwesomeIcon icon={faUser} style={{ fontSize: '25px' }} />
                    <p>Login / register</p>
                </Link>
            )}
        </div>
    );
};

export default UserProfile;
