import React from 'react';
import FooterContent from './FooterContent';
import './Footer.css';

export default function FooterWrapper() {
  return (
    <div className='footer-wrapper'>
      <div className='footer-sticky-container'>
        <div className='footer-content'>
          <FooterContent />
        </div>
      </div>
    </div>
  );
}