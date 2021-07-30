//libraries
import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    #header {
      position: relative;
      top: 0;
      left: 0;
      z-index: 2019;
    }

    #title {
      text-decoration: none;
      cursor: pointer;
    }

    #measurabl-logo {
      width: 20%;
      min-width: 75px;
      border-bottom: 5px solid #ffffff;
    }
`


const Header = () => (
  <Styles>
    <section
      id="header"
    >
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
        <a
          id="title"
          href="https://gist.github.com/kheiligh/1f8208ac1a91eee1db8b1d92c8d4d1fd"
          target="_blank"
          rel="noreferrer"
        >
          <h1
            className="text header-2 no-event"
          >
            frontend technical assessment
          </h1>
        </a>
      </div>

    </section>
  </Styles>
);

export default Header;
  