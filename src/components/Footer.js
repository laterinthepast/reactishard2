import React from 'react';
import './styles/Footer.scss';

function Footer() {
  return (
    <div className='footer-container' id="contact">
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            
            <a
              class='social-icon-link instagram'
              href="https://www.instagram.com/lookmummyicancode/"
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link linkedin'
              href="https://www.linkedin.com/in/rafal-wrona-b6287688/"
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;