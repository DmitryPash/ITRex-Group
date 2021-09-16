import './App.css';
import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import TableHtml from './TableHtml/TableHtml'
import _, { filter } from 'lodash'
import Search from './Search/Search'
import Profile from './Profile/Profile'



class App extends Component {

state = {
  data: [],
  row: null,
  search: '',
  sort: ' asc',
  sortField: 'id',
  currentPage: 0,
  displayData: []
}

async componentDidMount() {
     const response = await fetch(`https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json`)
     const data = await response.json()

      
      this.setState({
         data: _.orderBy(data, this.state.sortField, this.state.sort)
     })
    }

onSort = sortField => {
  const clonedData = this.state.data.concat()
  const sort = this.state.sort === ' asc' ? 'desc' : ' asc'
  const data = _.orderBy(clonedData,sortField, sort )

  this.setState({
    data,
    sort,
    sortField

  })
}

onRowSelect = row => {
  this.setState({row})
}

searchHandler = search => {
 
  this.setState({search, currentPage: 0})
}

getFilteredData() {
  const {data, search} = this.state
  if (!search) {
    return data
  }

  return data.filter(item => {
    return item['firstName'].toLowerCase().includes(search.toLowerCase())
  })
}

handlePageClick = ({selected}) => {
  this.setState({currentPage: selected})
}

    render() {
      const pageSize  = 10
      const filteredData = this.getFilteredData()
      const pageCount = Math.ceil(filteredData.length / pageSize)
      const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage]
 
        return (
        <div className="container">

        

          
          { 
          <React.Fragment>
            <Search onSearch={this.searchHandler}/>
            <TableHtml
             data={displayData}
             onSort={this.onSort}
             sort={this.state.sort}
             sortField={this.state.sortField}
             onRowSelect={this.onRowSelect}
             />
          </React.Fragment>

          }


          {
             this.state.data.length > pageSize 
            ? <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
            pageClassName ="page-item"
            pageLinkClassName="page-link"
            forcePage={this.state.currentPage}
          /> : null
          }

         

          {
            this.state.row
            ? <Profile person={this.state.row} />
            : null
          }
           
            
        </div>
        )
    }
}

export default App;