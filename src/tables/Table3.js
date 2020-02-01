import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} from 
       'react-bootstrap-table'
import './Table.css'

 
class Table3 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey
                             dataField='name'
                             dataAlign='center'
                             headerAlign="left"
                             
                             tdStyle={
                                 {backgroundColor: 'color'}}>
            Фамилия
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'
                             dataAlign='center'
                             headerAlign="center"
                             >
            Пн
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'
                             dataAlign='center'
                             headerAlign="right"
							 >
            Вт
          </TableHeaderColumn>
		  <TableHeaderColumn dataField='value'
                             dataAlign='center'
                             headerAlign="right"
							 >
            Ср
          </TableHeaderColumn>
		  <TableHeaderColumn dataField='value'
                             dataAlign='center'
                             headerAlign="right"
							 >
            Чт
          </TableHeaderColumn>
		  <TableHeaderColumn dataField='value'
                             dataAlign='center'
                             headerAlign="right"
							 >
            Пт
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}
 
export default Table3