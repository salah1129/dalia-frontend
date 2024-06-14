
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput ';
import UserProfile from './UserProfile ';

const Header = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartLength = cartItems.length;

    return (
        <div className='flex px-20 bg-gray-900 text-white justify-between items-center py-5 w-full '>
            <Link to={`/`}>
                <div className='text-[20px] font-bold ' style={{fontFamily: "Fantasy"}}>PIECES AUTO DALIA</div>
            </Link>
            <SearchInput />
            <div class="flex">
            <UserProfile />
            <Link to={"/cart"} className='flex flex-col justify-center  items-center hover:opacity-[0.9] ml-[16px] text-[14px]'>
                <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '25px' }} />
                <p>Cart 
                    {/* <span className=' w-5 h-5 ml-[2px] rounded-full inline-flex items-center justify-center bg-white text-black'>  {cartLength} </span> */}
                </p>
            </Link>
            </div>
        </div>
    ); 
}
export default Header;
