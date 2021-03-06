//libraries
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from "axios";

// Components
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Table from "./components/Table.jsx";
import Footer from "./components/Footer.jsx";

// Resources 
import StaticData from "./static-copy.json"



const Styles = styled.div`
  #homepage {
    position: absolute;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background: rgb(22,45,70);
    background: linear-gradient(180deg, rgba(22,45,70,1) 31%, rgba(20,59,78,1) 83%, rgba(17,71,85,1) 100%);
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

  .text-center {
    text-align: center;
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
      data: [],
      status: null
    };
    this.search = this.search.bind(this);
    this.getStatus = this.getStatus.bind(this);
    this.getData = this.getData.bind(this);
    this.setData = this.setData.bind(this);
    this.aLittleTreat = this.aLittleTreat.bind(this);
  }

  async componentDidMount() {
    await this.getStatus();
    setTimeout(() => {
      let { status } = this.state
      if(status === 'live') {
        this.getData();
      } else {
        this.setData();
      }
    }, 3000)

    this.aLittleTreat();
  }

// Requests
  async getStatus() {
    let url = '/get-status';
    axios.get(url)
     .then(() => {
       this.setState({
         status: 'live'
       })
     }).catch(() => {
      this.setState({
        status: 'devMode'
      })
    })
  }

  async getData() {
    console.log(this.state.status)
    let url = '/get-data';
    let reqData = [
      'http://5c37c33f7820ff0014d927c5.mockapi.io/msr/names',
      'http://5c37c33f7820ff0014d927c5.mockapi.io/msr/ages'
    ];
    axios.get(url, {
      params: {
        urls: reqData,
      },
    })
    .then(({data}) => {
      this.setState({
        data,
        dataReceived: true,
      })
    })
    .catch((console.log))
  }

  async setData() {
    this.setState({
      data: StaticData,
    })
  }

// Search Bar
  async search(q, callback) {
    if(q) {
    let { data } = this.state;
    let matches = [];
    for (var entry of data) {
      for (var key in entry) {
        let str = JSON.stringify(entry[key]).toLowerCase();
        if(str.includes(q)) {
          let idMatch = false;
          if(matches.length < 1) matches.push(entry)
          for (var match of matches) {
              if (match.id === entry.id) {
                  idMatch = true;
              }
          }
          if(!idMatch) {
              matches.push(entry)
          }
        }
      }
    } if (!matches.length) matches.push({results: 'no matches found'});
    this.setState({
      data: matches
    })
   }
  }


// Check your Dev Console
  aLittleTreat() {
    let secret = "01010100 01101000 01100001 01101110 01101011 00100000 01111001 01101111 01110101 00100000 01100110 01101111 01110010 00100000 01111001 01101111 01110101 01110010 00100000 01100011 01101111 01101110 01110011 01101001 01100100 01100101 01110010 01100001 01110100 01101001 01101111 01101110 00100000 00101101 00100000 01010011 01100001 01101101 00100000 01000010 00101110"
    var wordFromBinary = secret.match(/([10]{8}|\s+)/g).map(function(fromBinary){
        return String.fromCharCode(parseInt(fromBinary, 2) );
    }).join('');
    return console.log(wordFromBinary);
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
            <SearchBar  handleSearch={this.search} clearSearch={this.getData}/>
          </div>
          <div
            className="row center-align-x"
          >
            <Table data={this.state.data} status={this.state.status} />
          </div>
            <Footer />
        </div>
      </Styles>
    )
  }
}

export default App;
