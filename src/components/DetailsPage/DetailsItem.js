import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '75%',
    marginTop: theme.spacing.unit * 2,
    overflowX: 'auto',
    marginBottom: '15px',
    marginLeft:'125px',
  },
  table: {
    minWidth: 500,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    icon: {
      margin: theme.spacing.unit,
      fontSize: 32,
    },
  },
});

function DetailsItem(props) {
  const { classes, item } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Latitude</CustomTableCell>
            <CustomTableCell>Longitude</CustomTableCell>
            <CustomTableCell>Image URL</CustomTableCell>
            <CustomTableCell>Video URL</CustomTableCell>
            <CustomTableCell>Delete</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {item.map(data => (
            <TableRow key={data.id}>
              <TableCell component="th" scope="row">
                {data.latitude}
              </TableCell>
              <TableCell >{data.longitude}</TableCell>
              <TableCell >{data.img_url}</TableCell>
              <TableCell >{data.video_url}</TableCell>
              <TableCell><DeleteOutlined  className={classes.icon} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

DetailsItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailsItem);
