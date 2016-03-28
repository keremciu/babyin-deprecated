import React from 'react';

// material ui elements
const UI = require('material-ui');
const { Table, TableHeaderColumn, TableRow, TableHeader, TableRowColumn, TableBody, TableFooter, FloatingActionButton } = UI;

// material ui svg icons
import EditIcon from 'material-ui/lib/svg-icons/image/edit';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import ViewIcon from 'material-ui/lib/svg-icons/image/remove-red-eye';

const styles = {
  floatbtn: {
    position: 'fixed',
    bottom: 22,
    right: 22,
  },
};

export default ({collection}) => (
  <div className='postlist'>
      <Table fullWidth>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn><T label="schoolname" /></TableHeaderColumn>
            <TableHeaderColumn><T label="capacity" /></TableHeaderColumn>
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
              <TableRowColumn>{record.capacity}</TableRowColumn>
              <TableRowColumn className="table--actions">
                <a href={`/preschools/${record._id}`}><ViewIcon hoverColor="#8726F7" /></a>
                <a href={`/preschools/${record._id}/edit`}><EditIcon hoverColor="#8726F7" /></a>
              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <FloatingActionButton secondary={true} style={styles.floatbtn} linkButton href="preschools/add"><ContentAdd /></FloatingActionButton>
  </div>
);
