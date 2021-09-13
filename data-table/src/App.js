import './App.css';
import { Component } from 'react';
import TableHtml from './TableHtml/TableHtml';
import _ from 'lodash'
import Search from './Search/Search';
import Profile from './Profile/Profile';

class App extends Component {

state = {
  data: [],
  row: null,
  search: ''
}

async componentDidMount() {
     const response = await fetch(`https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json`)
     const data = await response.json()

      
      this.setState({
         data
     })
    }

onSort = sortField => {
  const clonedData = this.state.data.concat()
  const data = _.orderBy(clonedData,sortField )

  this.setState({
    data,
  })
}

onRowSelect = row => {
  this.setState({row})
}

searchHandler = search => {
  this.setState({search})
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

    render() {
      const filteredData = this.getFilteredData()
        return (
        <div className="container">
          <Search onSearch={this.searchHandler}/>
          {
              
             <TableHtml
             data={filteredData}
             onSort={this.onSort}
             onRowSelect={this.onRowSelect}

             />

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