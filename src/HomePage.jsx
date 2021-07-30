//libraries
import React, { Component } from 'react';
import Styled from 'styled-components';
//components
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Table from "./components/Table.jsx";
import Footer from "./components/Footer.jsx";




const Styles = Styled.div`
  #homepage {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background: rgb(22,45,70);
    background: linear-gradient(180deg, rgba(22,45,70,1) 31%, rgba(20,59,78,1) 83%, rgba(17,71,85,1) 100%);
  }

  #wave-1 {
    bottom: 0;
    position: fixed;
    width: 100%;
    z-index: 0;
  }
  
  #wave-1 path {
    fill: rgba(22,45,70,.5);
  }

  #wave-2 {
    bottom: 0;
    position: absolute;
    width: 100%;
    z-index: 0;
  }

  #wave-2 path {
    fill: rgba(0,177,143,1);
  }
`


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usersByName: { 
        "data": [
          {"id":"1","firstName":"Karen","lastName":"Page","age":79},
          {"id":"2","firstName":"Jessica","lastName":"Jones","age":12},
          {"id":"3","firstName":"Frank","lastName":"Castle", "age": null},
          {"id":"4","firstName":"Matt","lastName":"Murdock","age":71},
          {"id":"5","firstName":"Luke","lastName":"Cage","age":51},
          {"id":"6","firstName":"Danny","lastName":"Rand","age":71},
          {"id":"7","firstName":"Trish","lastName":"Walker","age": null},
          {"id":"8","firstName":"Foggy","lastName":"Nelson","age":14},
          {"id":"9","firstName":"Jeri","lastName":"Hogarth","age": null},
          {"id":"10","firstName":null,"lastName":null,"age":83},
        ]
      }
    }
  }

  render() {
    return (
      <Styles>
          <div
            id="homepage"
          >
            <section
              className="container"
            >
              <Header />
            </section>
            <section
             className="container"
            >
            <div
                className="row center-align-x"
            >
              <SearchBar />
            </div>
            <div
              className="row center-align-x"
            >
              <section
                className="table-container"
              >
                <h2
                  className="text g header-2 no-event"
                >
                  See User Information Below
                </h2>
                <h3 
                  className="text g header-3 no-event"
                >
                  (Click on an entry to copy it to your clipboard!)
                </h3>
                <Table tableEntries={this.state.usersByName}/>
              </section>
            </div>
            </section>
            <section
              className="container"
            >
              <svg id="wave-1" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 358.67">
                <path className="cls-1" d="M0,225s300-257,683,0,683,-200,683,-100V400H0Z" transform="translate(0 -41.33)"/>
              </svg>
              <svg id="wave-2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 358.67">
                <path className="cls-1" d="M0,300s500-175,650,40,683,-350,900,100V400H0Z" transform="translate(0 25)"/>
              </svg>
              <Footer />
            </section>
          </div>
      </Styles>
    )
  }
}

export default Home;
