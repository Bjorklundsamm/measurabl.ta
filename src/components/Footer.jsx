//libraries
import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  #footer {
    position: fixed;
    bottom: 5px;
    right: 0px;
    background: rgba(0,177,143,1);
    border: 10px solid rgba(255,255,255,1);
    border-radius: 500px;
    padding: 5px;
    z-index: 2019;
  }

  #name {
    width: 100%;
  }

  .link {
    width: 135px;
    border-radius: 50px;
    margin: 0px 10px 5px 10px;
    border-right: 2px rgba(255,255,255,1) solid;
    border-left: 2px rgba(255,255,255,1) solid;
    &:hover {
      background: 4px rgba(255,255,255,.5);
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
          className="text header-1 text-center no-event"
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
          className="text link text-center"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/bjorklundsamm/"
          target="_blank"
          rel="noreferrer"
          className="text link text-center"
        >
          LinkedIn
        </a>
        <a
          href="https://Sbjorklund.me"
          target="_blank"
          rel="noreferrer"
          className="text link text-center"
        >
          Portfolio
        </a>
      </div>
    </section>
  </Styles>
);

export default Footer;
