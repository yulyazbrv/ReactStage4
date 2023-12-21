import React, { useState } from 'react';
import springLogo from '../../images/spring-logo.svg';
import menu from '../../images/menu.png';
import arrowDown from '../../images/arrow-down.png';
import './Header.css';

const Header = (props) => {
  const { firstMenu, secondMenu, thirdMenu, fourthMenu, fifthMenu, sixthMenu } = props;
  const [tabIndex, setTabIndex] = useState(0);
  const [showMobile, setShowMobile] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <img className="main-logo" alt="logo main" src={springLogo} />
          <img
            className="icon-adaptive-menu"
            alt="logo menu"
            src={menu}
            onClick={() => {
              setShowMobile(true);
            }}
          />
          {showMobile ? (
            <nav className="mobile-menu">
              <div
                className="sumbol-close"
                onClick={() => {
                  setShowMobile(false);
                }}
              >
                <h1>x</h1>
              </div>
              {showMobile ? (
                <div className="container-mobile-menu">
                  <div className="item-menu">
                    <h1 className="menu-title">Why Spring</h1>
                    <div className="open-hidden-menu1">
                      <img
                        className="arrow-icon"
                        src={arrowDown}
                        alt="arrow"
                        onClick={() => {
                          tabIndex === 1 ? setTabIndex(0) : setTabIndex(1);
                        }}
                      />
                    </div>
                  </div>
                  <div className="first-mobile-hidden-menu">
                    {tabIndex === 1
                      ? firstMenu.map((item, index) => (
                          <div key={index}>
                            <h2>{item.name}</h2>
                          </div>
                        ))
                      : null}
                  </div>
                  <div className="item-menu">
                    <h1 className="menu-title">Learn</h1>
                    <div className="open-hidden-menu2">
                      <img
                        className="arrow-icon"
                        src={arrowDown}
                        alt="arrow"
                        onClick={() => {
                          tabIndex === 2 ? setTabIndex(0) : setTabIndex(2);
                        }}
                      />
                    </div>
                  </div>
                  <div className="second-mobile-hidden-menu">
                    {tabIndex === 2
                      ? secondMenu.map((item, index) => (
                          <div key={index}>
                            <h2>{item.name}</h2>
                          </div>
                        ))
                      : null}
                  </div>
                  <div className="item-menu">
                    <h1 className="menu-title">Projects</h1>
                    <div className="open-hidden-menu3">
                      <img
                        className="arrow-icon"
                        src={arrowDown}
                        alt="arrow"
                        onClick={() => {
                          tabIndex === 3 ? setTabIndex(0) : setTabIndex(3);
                        }}
                      />
                    </div>
                  </div>
                  <div className="third-mobile-hidden-menu">
                    {tabIndex === 3
                      ? thirdMenu.map((item, index) => (
                          <div key={index}>
                            <h2>{item.name}</h2>
                          </div>
                        ))
                      : null}
                  </div>

                  <div className="item-menu">
                    <h1 className="menu-title">Training</h1>
                    <div className="open-hidden-menu4">
                      <img
                        className="arrow-icon"
                        src={arrowDown}
                        alt="arrow"
                        onClick={() => {
                          tabIndex === 4 ? setTabIndex(0) : setTabIndex(4);
                        }}
                      />
                    </div>
                  </div>
                  <div className="fourth-mobile-hidden-menu">
                    {tabIndex === 4
                      ? fourthMenu.map((item, index) => (
                          <div key={index}>
                            <h2>{item.name}</h2>
                          </div>
                        ))
                      : null}
                  </div>

                  <div className="item-menu">
                    <h1 className="menu-title">Support</h1>
                    <div className="open-hidden-menu5">
                      <img
                        className="arrow-icon"
                        src={arrowDown}
                        alt="arrow"
                        onClick={() => {
                          tabIndex === 5 ? setTabIndex(0) : setTabIndex(5);
                        }}
                      />
                    </div>
                  </div>
                  <div className="fifth-mobile-hidden-menu">
                    {tabIndex === 5
                      ? fifthMenu.map((item, index) => (
                          <div key={index}>
                            <h2>{item.name}</h2>
                          </div>
                        ))
                      : null}
                  </div>

                  <div className="item-menu">
                    <h1 className="menu-title">Community</h1>
                    <div className="open-hidden-menu6">
                      <img
                        className="arrow-icon"
                        src={arrowDown}
                        alt="arrow"
                        onClick={() => {
                          tabIndex === 6 ? setTabIndex(0) : setTabIndex(6);
                        }}
                      />
                    </div>
                  </div>
                  <div className="sixth-mobile-hidden-menu">
                    {tabIndex === 6
                      ? sixthMenu.map((item, index) => (
                          <div key={index}>
                            <h2>{item.name}</h2>
                          </div>
                        ))
                      : null}
                  </div>
                </div>
              ) : null}
            </nav>
          ) : null}

          <nav className="nav">
            <div className="nav-with-hidden1">
              <div className="nav-link">
                <span>Why Spring</span>
                <div className="hidden-menu" id="hidmen1">
                  {firstMenu.map((item, index) => (
                    <ul key={index}>
                      <li>{item.name}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
            <div className="nav-with-hidden2">
              <div className="nav-link">
                <span>Learn</span>
                <div className="hidden-menu" id="hidmen2">
                  {secondMenu.map((item, index) => (
                    <ul key={index}>
                      <li>{item.name}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
            <div className="nav-with-hidden3">
              <div className="nav-link">
                <span>Projects</span>
                <div className="hidden-menu" id="hidmen3">
                  {thirdMenu.map((item, index) => (
                    <ul key={index}>
                      <li>{item.name}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>

            <div className="nav-with-hidden4">
              <div className="nav-link">
                <span>Academy</span>
                <div className="hidden-menu" id="hidmen4">
                  {fourthMenu.map((item, index) => (
                    <ul key={index}>
                      <li>{item.name}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
            <div className="nav-with-hidden5">
              <div className="nav-link">
                <span>Solution</span>
                <div className="hidden-menu" id="hidmen5">
                  {fifthMenu.map((item, index) => (
                    <ul key={index}>
                      <li>{item.name}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
            <div className="nav-with-hidden6">
              <div className="nav-link">
                <span>Community</span>
                <div className="hidden-menu" id="hidmen6">
                  {sixthMenu.map((item, index) => (
                    <ul key={index}>
                      <li>{item.name}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
