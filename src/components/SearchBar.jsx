  
import React from "react";

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
    this.props.clearSearch(() => {
      this.setState({
        search: ''
      })
    });
  }

  render() {
    return (
      <div
        className="row"
      >
        <form
          id="search-bar"
          onSubmit={this.handleSubmit}
        >
          <input
            id="search-bar-input"
            type="text"
            name="search"
            placeholder="Enter your search here"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Submit"
          />
          <button
           onClick={this.handleClear}
          >
            Clear Search
          </button>
        </form>
      </div>
    )
  }
}

export default SearchBar;