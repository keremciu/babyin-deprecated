import React from 'react';

// material ui elements
const UI = require('material-ui');
const { Table, TableHeaderColumn, TableRow, TableHeader, TableRowColumn,
  TableBody, FloatingActionButton } = UI;

import EditIcon from 'material-ui/svg-icons/image/edit';
import AddIcon from 'material-ui/svg-icons/content/add';
import ViewIcon from 'material-ui/svg-icons/image/remove-red-eye';

export default ({collection}) => (
  <div className='itemList'>
      <Table fullWidth>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn><T label="schoolname" /></TableHeaderColumn>
            <TableHeaderColumn><T label="form_count" /></TableHeaderColumn>
            <TableHeaderColumn><T label="actions" /></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          showRowHover={true}
          displayRowCheckbox={false}
        >
          {collection.map(record => (
            <TableRow>
              <TableRowColumn><strong>{record.name}</strong></TableRowColumn>
              <TableRowColumn>{record.studentCount}</TableRowColumn>
              <TableRowColumn className="table--actions">
                <a href={`/classrooms/${record._id}`}><ViewIcon hoverColor="#8726F7" /></a>
                <a href={`/classrooms/${record._id}/edit`}><EditIcon hoverColor="#8726F7" /></a>
              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <FloatingActionButton
        className="float--btn"
        secondary={true}
        linkButton
        href="/classrooms/add">
        <AddIcon />
      </FloatingActionButton>
  </div>
);
