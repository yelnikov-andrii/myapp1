import React from 'react';
import { Container } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <ul className='footer__list'>
          <li>
            <a 
              href='tel:911'
              className='footer__link'
            >
             Phone
            </a>
          </li>
          <li>
            <a
              href='mailto:andriiyelnikov@gmail.com'
              className='footer__link'
            >
            Email
            </a>
          </li>
        </ul>
        <div>
          <p className='text-center white'>
            2023
          </p>
        </div>
      </Container>
    </footer>
  );
};

