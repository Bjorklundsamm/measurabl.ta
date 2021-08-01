//libraries 
import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  #search-bar {
    background-color: rgba(255,255,255,1);
    padding: 5px 10px 5px 10px;
    border-radius: 100px;
  }

  #submit-btn {
    background-color: rgba(0,177,143,1);
    padding: 2px 10px 2px 10px;
    border-radius: 50px;
    &:hover {
      background: rgba(0,177,143,.5);
      transition: .3s ease;
    }
  }

  #clear-btn {
    color: rgba(0,177,143,.5);
    &:hover {
      color: rgba(0,177,143,1);
      transition: .3s ease;
    }
  }

  .search-bar-content {
    background-color: rgba(255,255,255,1);
    border: none;
    outline: none;
  }
`

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange (event) {
    let { name } = event.target
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    let { search } = this.state;
    this.props.handleSearch(search, () => {
      this.setState({
        search: ''
      })
    })
  }
  
  handleClear(event) {
    event.preventDefault();
    this.props.clearSearch();
    this.setState({
      search: ''
    })
  }

  render() {
    return (
      <Styles>
        <section
          id="search-bar-container"
        >
          <form
            id="search-bar"
            onSubmit={this.handleSubmit}
          >
            <input
              id="search-bar-input"
              type="text"
              name="search"
              className="search-bar-content text g"
              placeholder="Enter your search here"
              value={this.state.search}
              onChange={this.handleChange}
            />
            <button
              onClick={this.handleClear}
              id="clear-btn"
              className="search-bar-content text g"
            >
              ⛌
            </button>
            <input
              type="submit"
              value="⚲"
              id="submit-btn"
              className="search-bar-content text"
            />
          </form>
        </section>
      </Styles>
    )
  }
}

export default SearchBar;