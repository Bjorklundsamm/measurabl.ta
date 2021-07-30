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
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .col {
    display: flex;
    flex-direction: col;
  }

  show-borders {
    
  }
`

function App () {
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
