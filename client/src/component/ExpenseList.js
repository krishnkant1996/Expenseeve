import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddUpdateExpense from './AddUpdateExpense';
import Button from '@material-ui/core/Button';

// Generate Order Data
function createData(id, category, itemName, amount, date) {
  return { id, category, itemName, amount, date };
}

const rows = [
  createData(0,  'Elvis Presley', 'Tupelo, MS',"82",'16 Mar, 2019',),
  createData(2,  'Elvis Presley', 'Tupelo, MS',"82",'16 Mar, 2019',),
  createData(3,  'Elvis Presley', 'Tupelo, MS',"82",'16 Mar, 2019',),
  createData(4,  'Elvis Presley', 'Tupelo, MS',"82",'16 Mar, 2019',),
  createData(5,  'Elvis Presley', 'Tupelo, MS',"82",'16 Mar, 2019',),
  createData(6,  'Elvis Presley', 'Tupelo, MS',"82",'16 Mar, 2019',),
  createData(7,  'Elvis Presley', 'Tupelo, MS',"82",'16 Mar, 2019',),
  createData(8,  'Elvis Presley', 'Tupelo, MS',"82",'16 Mar, 2019',),
  createData(9,  'Elvis Presley', 'Tupelo, MS',"82",'16 Mar, 2019',),
];
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function ExpenseList() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
      <React.Fragment>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Add expense
        </Button>  

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell>Item Name</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Expense Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.itemName}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more expense
        </Link>
      </div>
      <AddUpdateExpense open={open} handleClose={handleClose} />
    </React.Fragment>
  );
}
