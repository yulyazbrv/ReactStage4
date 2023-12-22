import React from 'react';
import footerIcon from '../../images/footer.svg';
import './Support.css';

const Support = () => {
  return (
    <div className='fourth-intro'>
      <div className='container-fourth'>
        <div className='circle-banner'></div>
        <img className='footer-icon' alt='icon footer' src={footerIcon} />
        <div className='container-gets'>
          <div className='child-gets'>
            <p className='get-news'>Get ahead</p>
            <p>
              VMware offers training and certification to turbo-charge your
              progress.
            </p>
            <a href='#section'>Learn more</a>
          </div>
          <div className='child-gets'>
            <p className='get-news'>Get support</p>
            <p>
              Spring Runtime offers support and binaries for OpenJDK™, Spring,
              and Apache Tomcat® in one simple subscription.
            </p>
            <a href='#section'>Learn more</a>
          </div>
          <div>
            <p className='get-news'>Upcoming events</p>
            <p>Check out all the upcoming events in the Spring community.</p>
            <a href='#section'>View all</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
