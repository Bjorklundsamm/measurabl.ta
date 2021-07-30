import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let newEntry = this.props.entry;
    return(
      <tr>
        {Object.entries(newEntry).map(([key, value]) => (
              <td
                className="table-entry-data table-entry"
              >
                {value}
              </td>
        ))}
      </tr>
    )
  }
}

export default Movie;