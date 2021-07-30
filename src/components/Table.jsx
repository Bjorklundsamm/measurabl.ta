//libraries
import React from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import $ from 'jquery';

const Styles = styled.div`
  .table {
      position: relative;
      width: 100%;
      background: rgba(0,177,143,1);
      padding: 10px;
      border-radius: 10px;
      text-align: center;
  }

  .table-row:hover {
    background: rgba(255,255,255,.3);
    cursor: pointer;
  }

  .table-entry {
    padding: 5 10 5 10;
  }

  .table-head {
    font-size: 26px !important;
    text-decoration: underline 2px rgba(255,255,255,1) !important;
  }

  .pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    margin-top: 20px;
    padding: 0;
   }
   
   .pagination a {
    cursor: default;
    padding: 10 15 10 15;
    border-radius: 100px;
    border: 1px solid #6c7ac9;
    color: #6c7ac9;
    margin-left: 10px;
   }
   
   .pagination li:not(.disabled) a:hover {
    background: rgba(0,177,143,.4);
    cursor: pointer;
   }
   
   .pagination li a {
    font-weight: bold;
    color: rgba(255,255,255,1);
    background: rgba(0,177,143,1);
    border: none;
    border-radius: 100px;
   }

   .pagination li.disabled a, li.active a {
    pointer-events: none;
    color: rgba(255,255,255,1);
    background: rgba(0,177,143,.4);
    border: none;
   }
`

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data: [],
        perPage: 6,
        page: 0,
        pages: 0,
      }
      
  }

  componentDidMount() {
    const {perPage} = this.state;
    const {data} = this.props.tableEntries;
    this.setState({
      data,
      pages: Math.ceil(data.length / perPage)
    });
  };

  handlePageClick = (event) => {
    let page = event.selected;
    this.setState({page})
  }

  copyToClipboard = (e) => {
    e.preventDefault();
    var $i = $(e.target).closest('tr').attr('value');
    navigator.clipboard.writeText($i);
  };

  render() {
    const {page, perPage, pages, data} = this.state;
    let items = data.slice(page * perPage, (page + 1) * perPage);
    

    let entries = items.map(entry => (
      <tr 
        key={entry.id}
        className="table-row"
        value={JSON.stringify(entry)}
        onClick={this.copyToClipboard}
      >
        {Object.entries(entry).map(([key, value]) => (
          <td
            key={`${entry.id}_${key}`}
            className="text table-entry table-data"
          >
            {!value? "n/a" : value}
          </td>
        ))}
      </tr>
    )) || '';

    return (
      <Styles>
        <table
            className="table"
        >
          <tbody
            className="table-body"
          >
            <tr>
              {Object.entries(this.props.tableEntries.data[0]).map(([key, value]) => (
                <th
                  key={key}
                  className="text table-entry table-head no-event"
                >
                  {!key? "n/a" : key}
                </th>
              ))}
            </tr>
            {entries}
          </tbody>
        </table>
        <ReactPaginate
           previousLabel={'◄'}
           nextLabel={'►'}
           pageCount={pages}
           onPageChange={this.handlePageClick}
           containerClassName={'pagination'}
           activeClassName={'active'}
        />
      </Styles>
    )
  }
}



export default Table;