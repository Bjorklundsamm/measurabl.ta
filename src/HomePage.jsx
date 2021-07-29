import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';


const Styles = Styled.div`
`


class Home extends Component {
  render() {
    return (
      <Styles>
          <h1>
              Hello World
          </h1>
      </Styles>
    )
  }
}

export default Home;
