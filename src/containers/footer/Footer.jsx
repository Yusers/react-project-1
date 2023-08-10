import React from 'react';
import './footer.css';

const footerData = [
  { title: 'Links', links: ['Overons', 'Social Media', 'Counters', 'Contact'] },
  { title: 'Company', links: ['Terms & Conditions', 'Privacy Policy', 'Contact'] },
  {
    title: 'Get in touch',
    links: ['Crechterwoord K12 182 DK Alknjkcb', '085-132567', 'info@payme.net'],
  },
];

const Footer = () => {
  return (
    <div className='gpt3__footer section_padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient_text'>Do you want to step in to the future before others</h1>
        <p>
          <a href='#request'>Request Early Access</a>
        </p>
      </div>
      <div className='gpt3__footer-container'>
        <div className='gpt3__footer-logo'>
          <h2>GPT-3</h2>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links'>
          {footerData.map((item, index) => (
            <div className='gpt3__foter-links__container' key={index}>
              <h4>{item.title}</h4>
              {item.links.map((data) => (
                <p>
                  <a href={'#' + data}>{data}</a>
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className='copy-right'>© 2021 GPT-3. All rights reserved.</p>
    </div>
  );
};

export default Footer;
