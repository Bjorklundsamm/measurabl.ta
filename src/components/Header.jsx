//libraries
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
`


const Header = () => (
  <Styles>
          <div
            className="row"
          >
            <img
              id="measurabl-logo"
              className="brand"
              src="https://www.measurabl.com/wp-content/uploads/2019/01/measurabl_logo_white.svg"
              alt="REQUEST NOT MET - Logo"
            />
          </div>
          <div
            className="row"
          >
            <h1>Front-end Tehcnical Assessment</h1>
          </div>
  </Styles>
);

export default Header;
  