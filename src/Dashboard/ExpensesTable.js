import React, { useContext } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import moment from 'moment';
import { DataContext } from '../Providers/DataProvider';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function ExpensesTable() {
  const classes = useStyles();
  const { data } = useContext(DataContext);
  const rows = Object.values(data);
  return (
    <React.Fragment>
      <Title>Recent Report</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Diocese</TableCell>
            <TableCell>Leader</TableCell>
            <TableCell>Member</TableCell>
            <TableCell>Committee Members</TableCell>
            <TableCell>Activities</TableCell>
            {/* <TableCell align="right">Activities</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{moment(row.date).format('MM/DD/YYYY')}</TableCell>
              <TableCell>{row.diocese}</TableCell>
              <TableCell>{row.leader}</TableCell>
              <TableCell>{row.member}</TableCell>
              <TableCell>{row.committee}</TableCell>
              <TableCell>{row.activity}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Reports
        </Link>
      </div>
    </React.Fragment>
  );
}
