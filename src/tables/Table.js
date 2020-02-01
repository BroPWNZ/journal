import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} from 
       'react-bootstrap-table'
import './Table.css'

 
class Table1 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey
                             dataField='id'
                             dataAlign='center'
                             headerAlign="left"
                             width="15%"
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
          <TableHeaderColumn dataField='value'
                             dataAlign='center'
                             headerAlign="right"
							 width="15%">
            Часы
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}
 
export default Table1