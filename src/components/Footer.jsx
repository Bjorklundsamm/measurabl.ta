//libraries
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
`


const Footer = () => (
  <Styles>
    <div
      className="row"
    >
      <h3>design by</h3>
      <h1>Samuel Bjorklund</h1>   
    </div>
    <div
      className="row"
    >
      <button>GitHub</button>
      <button>LinkedIn</button>
      <button>Portfolio</button>
    </div>
  </Styles>
);

export default Footer;
  