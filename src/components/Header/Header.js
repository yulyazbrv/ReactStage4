import React, { useState } from 'react';
import { MenuTitles } from '../../data/data';
import springLogo from '../../images/spring-logo.svg';
import menu from '../../images/menu.png';
import arrowDown from '../../images/arrow-down.png';
import './Header.css';

const Header = () => {
  const [showMobile, setShowMobile] = useState(false);
  const [expandedItems, setExpandedItems] = useState([]);
  
  const renderMobileMenuItems = (menuTitles) => {
    return menuTitles.map((item, index) => <p key={index}>{item.name}</p>);
  };
  const handleArrowClick = (index) => {
    const updatedExpandedItems = [...expandedItems];
    updatedExpandedItems[index] = !updatedExpandedItems[index];
    setExpandedItems(updatedExpandedItems);
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header-inner'>
          <img className='main-logo' alt='logo main' src={springLogo} />
          <img
            className='icon-adaptive-menu'
            alt='logo menu'
            src={menu}
            onClick={() => {
              setShowMobile(true);
            }}
          />
          {showMobile ? (
            <nav className='mobile-menu'>
              <div
                className='sumbol-close'
                onClick={() => {
                  setShowMobile(false);
                }}
              >
                <h1>x</h1>
              </div>
              {showMobile ? (
                <div className='container-mobile-menu'>
                  {MenuTitles.map((title, index) => (
                    <div key={index} className='item-menu'>
                      <div className='title-container'>
                        <h1>{title.desc}</h1>
                        <img
                          className='arrow-icon'
                          src={arrowDown}
                          alt='arrow'
                          onClick={() => handleArrowClick(index)}
                        />
                      </div>
                      <div className='items-container'>
                        {expandedItems[index]
                          ? renderMobileMenuItems(title.items)
                          : null}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </nav>
          ) : null}
          <nav className='nav'>
            {MenuTitles.map((title, index) => (
              <div key={index} className='container-menu'>
                <div className='nav-link'>
                  <span>{title.desc}</span>
                  <div className='hidden-menu'>
                    {title.items.map((item, index) => (
                      <ul key={index}>
                        <li>{item.name}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
