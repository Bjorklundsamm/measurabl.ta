//libraries
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from "axios";

// Components
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Table from "./components/Table.jsx";
import Footer from "./components/Footer.jsx";



const Styles = styled.div`
  #homepage {
    position: absolute;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background: rgb(22,45,70);
    background: linear-gradient(180deg, rgba(22,45,70,1) 31%, rgba(20,59,78,1) 83%, rgba(17,71,85,1) 100%);
    background-size: cover;
  }
// default layouts
  .row {
    display: flex;
    flex-direction: row;
    position: relavtive;
    margin-bottom: 10px;
  }

  .center-align-x {
    justify-content: center;
  }

// global styles
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

//SVG Waves
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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {"id": "DATA MISSING"}
      ],
      dataRecieved: false,
    };
    this.search = this.search.bind(this);
    this.getData = this.getData.bind(this);
  }

  async componentDidMount() {
    this.getData();
  }

// Requests
  getData() {
    let url = '/get-data';
    let reqData = [
      'http://5c37c33f7820ff0014d927c5.mockapi.io/msr/names',
      'http://5c37c33f7820ff0014d927c5.mockapi.io/msr/ages'
    ];
    
    axios.get(url, {
      params: {
        urls: reqData
      },
    })
      .then(({data}) => {
        this.setState({
          data,
          dataRecieved: true,
        })
      })
      .catch(console.log)
  }

// Search Bar
  search(q, callback) {
    if(q) {
    let { data } = this.state;
    let matches = [];
    for (var entry of data) {
      if ((entry.id).indexOf(q.toLowerCase()) > -1) {
        matches.push(entry);
      }
    }
    if (!matches.length) {
      matches.push({'id': 'No matches found...'})
    }
    this.setState({
      data: matches
    })
   }
  }
  clearSearch(callback) {
    callback();
  }

  render() {
    return (
      <Styles>
          <div
            id="homepage"
          >
            <section>
              <svg id="wave-1" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 358.67">
                <path className="cls-1" d="M0,225s300-257,683,0,683,-200,683,-100V400H0Z" transform="translate(0 -41.33)"/>
              </svg>
              <svg id="wave-2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 358.67">
                <path className="cls-1" d="M0,300s500-175,650,40,683,-350,900,100V400H0Z" transform="translate(0 25)"/>
              </svg>
            </section>
            <Header className="container"/>
            <div
              className="row center-align-x"
            >
              <SearchBar  handleSearch={this.search} clearSearch={this.clearSearch}/>
            </div>
            <div
              className="row center-align-x"
            >
              {this.state.dataRecieved && <Table data={this.state.data}/>}
            </div>
              <Footer />
          </div>
      </Styles>
    )
  }
}

export default App;
