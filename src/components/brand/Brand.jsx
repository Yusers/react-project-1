import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => {
  return (
    <div className='gpt3__brand section_padding'>
      <div className='gpt3__brand-container'>
        <img src={google} alt='google' />
        <img src={slack} alt='slack' />
        <img src={atlassian} alt='atlassian' />
        <img src={dropbox} alt='dropbox' />
        <img src={shopify} alt='shopify' />
      </div>
    </div>
  );
};

export default Brand;
