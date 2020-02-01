import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} from 
       'react-bootstrap-table'
import './Table.css'

 
class Table2 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey
                             dataField='id'
                             dataAlign='center'
                             headerAlign="left"
                             width="25%"
                             tdStyle={
                                 {backgroundColor: 'color'}}>
            №
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'
                             dataAlign='center'
                             headerAlign="center"
                             width="75%">
            Фамилия
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}
 
export default Table2