//libraries
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import $ from 'jquery';

const Styles = styled.div`
  #table-container {
    position: relative;
    text-align: center;
    background: rgba(255,255,255,1);
    border-radius: 10px;
    padding: 10px;
    z-index: 2019;
  }

  #table {
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

//Pagination Styles
  .pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    margin-top: 20px;
    padding: 0;
    font-family: 'Red Rose', cursive;
  }
   
  .pagination a {
    cursor: default;
    padding: 10px 15px 10px 15px;
    border-radius: 100px;
    border: 1px solid rgba(0,177,143,1);
    color: rgba(255,255,255,1);
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

const Table = (props) => {
  const { data } = props;

  // Pagination Settings
  const [pagination, setPagination] = useState({
    data: data,
    offset: 0,
    numberPerPage: 6,
    pageCount: 0,
    currentData: [],
  });

  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageCount: props.data.length / pagination.numberPerPage,
      currentData: props.data.slice(
        pagination.offset,
        pagination.offset + pagination.numberPerPage,
      ),
    }));
  }, [pagination.numberPerPage, pagination.offset, props.data]);

  const HandlePageClick = (event) => {
    const { selected } = event;
    const offset = selected * pagination.numberPerPage;
    setPagination({ ...pagination, offset });
  };

  let copyToClipboard = (e) => {
    e.preventDefault();
    var $i = $(e.target).closest('tr').attr('value');
    navigator.clipboard.writeText($i);
  };

  return (
    <Styles>
      <section
        id="table-container"
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
        <table
          id="table"
        >
          <tbody
            className="table-body"
          >
            <tr>
              {Object.entries(data[0]).map(([key, value]) => (
                <th
                  key={key}
                  className="text table-entry table-head no-event"
                >
                  {!key? "n/a" : key}
                </th>
              ))}
            </tr>
            {pagination.currentData && pagination.currentData.map(entry => (
              <tr 
                key={entry.id}
                className="table-row"
                value={JSON.stringify(entry)}
                onClick={copyToClipboard}
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
            ))}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel="◄"
          nextLabel="►"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={pagination.pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={HandlePageClick}
          containerClassName="pagination"
          activeClassName="active"
          pageClassName="page-link"
        />
      </section>
    </Styles>
  )
}


export default Table;
