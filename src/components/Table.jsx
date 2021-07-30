//libraries
import React from 'react';
import styled from 'styled-components';
//components
import TableEntry from './TableEntry.jsx';

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        columns: this.props.tableEntries.defs,
        data: this.props.tableEntries.data
      }
  }

 render() {
  return (
    <table
        className="table"
    >
      <tbody
        className="table-body"
      >
        <tr>
          {this.state.columns.map(i => (
              <th
                className="table-entry-head table-entry"
              >
                {i}
              </th>
          ))}
        </tr>
        {this.state.data.map((entry) => {
          return (
          <TableEntry entry={entry} key={entry.id}/>
        )})}
      </tbody>
    </table>
    )
  }
}



export default Table;