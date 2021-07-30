//libraries
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Home from "./HomePage.jsx";


const Styles = styled.div`
  #page {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
// default layouts
  .row {
    display: flex;
    flex-direction: row;
  }

  .col {
    display: flex;
    flex-direction: col;
  }

  .center-align-y {
    display: block;
    align-items: center;
  }

  .center-align-x {
    justify-content: center;
  }

  .mr-auto {
    margin-right: auto;
  }

  .ml-auto {
    margin-left: auto;
  }


// global styles
  .container {
    height: fit-content;
    min-height: 100px;
    margin: auto;
  }

  .table-container {
    position: fixed;
    text-align: center;
    background: rgba(255,255,255,1);
    border-radius: 10px;
    padding: 10px;
    margin: auto;
    z-index: 2019;
  }

  .text {
    font-family: 'Red Rose', cursive;
    font-size: 21px;
    color: rgba(255,255,255,1);
    text-decoration: none;
  }

  .g {
    color: rgba(0,177,143,1);
  }

  .header-1 {
    font-size: 48px;
    margin: 0;
    padding: 0;
  }

  .header-2 {
    font-size: 28px;
    margin: 0;
    padding: 0;
  }

  .header-3 {
    font-size: 12px;
    margin: 0;
    padding: 0;
  }


  .no-event {
    pointer-events: none;
  }

  .show-border {
    border: 5px rgba(255,255,255,1) dashed;
  }
`

function App () {
  console.log('Thank you for your consideration!');
  console.log('- Sam B.');
  const location = useLocation();

  return (
    <Styles>
      <div
        id="page"
      >
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Styles>
  );
}


export default App;
