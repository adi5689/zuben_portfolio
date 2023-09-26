/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useRef } from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Header = () => {
    const navbarRef = useRef();
    const navbarHandler = () => {
        navbarRef.current.classList.toggle('active');
    }

  return (
    <div className='header-container'>
        <div className='logo'>Zuben</div>
        <nav className='navbar' ref={navbarRef}>
            <a href='#about'>About Me</a>
            <a href='#qualification'>Qualification</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
            <a href='https://www.linkedin.com/company/tatolicenergysystems/'>Tatolic</a>
            <a href='https://drive.google.com/file/d/1vwxpo42aS6KT0ZN5l6nN5FveRf5uETtH/view?usp=sharing'>Resume</a>
        </nav>
        <div className='icons'>
                <div className='fas fa-bars' id='menu-btn' onClick={navbarHandler}></div>
        </div>
    </div>
  )
}

export default Header;