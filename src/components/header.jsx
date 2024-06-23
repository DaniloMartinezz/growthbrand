import React from 'react';
import logo from '../assets/logo.png';
import TalkButton from './talkButton.jsx';

const Header = () => {
    return (
        <div className="flex justify-between items-center pt-2 px-4 md:px-0">
            <img src={logo} alt="logo" className="w-24" />
            <ul className="hidden md:flex items-center space-x-3">
                <li className="px-3 ">HOME</li>
                <li className="px-3">SERVICES</li>
                <li className="px-3">WORK</li>
                <li className="px-3">INSIGHTS</li>
                <li className="px-3">ABOUT</li>
                <li className="px-3">HELP</li>
            </ul>
            <TalkButton />
        </div>
    );
}

export default Header;
