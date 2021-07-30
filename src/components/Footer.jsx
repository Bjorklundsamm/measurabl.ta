//libraries
import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  #footer {
      position: fixed;
      bottom: 5;
      right: 5;
      background: rgba(255,255,255,1);
      border-radius: 50px;
      padding: 10px;
      z-index: 2019;
  }

  #name {
    text-align: center;
    width: 100%;
  }

  .link {
      text-align: center;
      width: 135px;
      border-radius: 50px;
      margin: 0 10 5 10;
      border-right: 2px rgba(0,177,143,1) solid;
      border-left: 2px rgba(0,177,143,1) solid;
      &:hover {
          background: 4px rgba(0,177,143,.5);
          transition: .5s ease;
      }
  }
`


const Footer = () => (
  <Styles>
    <section
      id="footer"
    >
      <div
        className="row"
      >
        <h1
          id="name"
          className="text g header-1 no-event"
        >
          Samuel Björklund
        </h1>   
      </div>
      <div
        className="row"
      >
        <a
          href="https://github.com/Bjorklundsamm"
          target="_blank"
          rel="noreferrer"
          className="text g link"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/bjorklundsamm/"
          target="_blank"
          rel="noreferrer"
          className="text g link"
        >
          LinkedIn
        </a>
        <a
          href="https://Sbjorklund.me"
          target="_blank"
          rel="noreferrer"
          className="text g link"
        >
          Portfolio
        </a>
      </div>
    </section>
  </Styles>
);

export default Footer;
