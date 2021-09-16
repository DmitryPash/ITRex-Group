import React from 'react'
import './Table.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (

    <table className="table">
        <thead>
        <tr>
             <th onClick={props.onSort.bind(null, 'id')}>id
                {props.sortField ==='id' ? <small>{props.sort}</small> : null}
             </th>
             <th onClick={props.onSort.bind(null, 'firstName')}>First name
             </th>
             <th onClick={props.onSort.bind(null, 'lastName')}>Last name</th>
             <th onClick={props.onSort.bind(null, 'email')}>Email</th>
             <th onClick={props.onSort.bind(null, 'phone')}>Phone</th>
             <th onClick={props.onSort.bind(null, 'adress.state')}>State</th>
         </tr>  
         </thead>
         <tbody>
         {props.data && props.data.map((item) => (
             <tr key={item.id + item.phone} onClick={props.onRowSelect.bind(null, item)}>
                 <td>{item.id}</td>
                 <td>{item.firstName}</td>
                 <td>{item.lastName}</td>
                 <td>{item.email}</td>
                 <td>{item.phone}</td>
                 <td>{item.adress.state}</td>
             </tr>
         ))}
         </tbody>
</table>

)