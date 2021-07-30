//libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
//components
import SearchBar from "./components/SearchBar.jsx"
import Table from "./components/Table.jsx"
import Footer from "./"




const Styles = Styled.div`
  #homepage {
    margin: 0;
    padding: 0;
  }
`


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usersByAge: {'defs': ["id", "age"], "data": [{"id":"1","age":79},{"id":"2","age":12},{"id":"4","age":71},{"id":"5","age":51},{"id":"8","age":14},{"id":"9","age":71},{"id":"10","age":83}]},
      usersByName: { 'defs': ["ID", "firstName", "lastName"], "data": [{"id":"1","firstName":"Karen","lastName":"Page"},{"id":"2","firstName":"Jessica","lastName":"Jones"},{"id":"3","firstName":"Frank","lastName":"Castle"},{"id":"4","firstName":"Matt","lastName":"Murdock"},{"id":"5","firstName":"Luke","lastName":"Cage"},{"id":"6","firstName":"Danny","lastName":"Rand"},{"id":"7","firstName":"Trish","lastName":"Walker"},{"id":"8","firstName":"Foggy","lastName":"Nelson"},{"id":"9","firstName":"Jeri","lastName":"Hogarth"}]}
    }
  }

  render() {
    return (
      <Styles>
          <div
            id="homepage"
          >
            <section
              id="table-1"
            >
              <div
                className="row"
              >
              <h1>View IDs by Age</h1>
              <SearchBar />
              </div>
              <Table tableEntries={this.state.usersByAge}/>
            </section>
            <section>
              <div
                className="row"
              >
                <h1>View IDs by Name</h1>
                <SearchBar />
              </div>
              <Table tableEntries={this.state.usersByName}/>
            </section>
          </div>
      </Styles>
    )
  }
}

export default Home;
