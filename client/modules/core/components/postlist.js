import React from 'react';

// material ui elements
const UI = require('material-ui');
const { Table, TableHeaderColumn, TableRow, TableHeader,
  TableRowColumn, TableBody, FloatingActionButton } = UI;

import EditIcon from 'material-ui/svg-icons/image/edit';
import ContentAdd from 'material-ui/svg-icons/content/add';

const styles = {
  floatbtn: {
    position: 'fixed',
    bottom: 22,
    right: 22,
  },
};

const PostList = ({posts}) => (
  <div className='postlist'>
      <Table fullWidth>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Post Title</TableHeaderColumn>
            <TableHeaderColumn>Actions</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody showRowHover>
          {posts.map(post => (
            <TableRow>
              <TableRowColumn>{post.title}</TableRowColumn>
              <TableRowColumn><a href={`/post/${post._id}`}><EditIcon /></a></TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <FloatingActionButton style={styles.floatbtn} linkButton href="new-post">
        <ContentAdd />
      </FloatingActionButton>
  </div>
);

export default PostList;
