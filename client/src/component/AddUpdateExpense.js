import React  from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {   makeStyles } from '@material-ui/core/styles';

import DatePickers from './DatePickers'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
   
    formControl: {
        width: "100%",
        marginTop: theme.spacing(2),

      },
     
  }));

export default function FormDialog(props) {
    const [name, setName] = React.useState('Composed TextField');
    const classes = useStyles();
  
    const handleChange = (event) => {
      setName(event.target.value);
    };
    const [age, setAge] = React.useState('');

    const handleChangeAge = (event) => {
      setAge(event.target.value);
    };
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

  
  return (
    <>
     
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <form className={classes.root} noValidate autoComplete="off">
          <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="component-outlined">Item Name</InputLabel>
        <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Item name" />
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChangeAge}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="component-outlined">Amount</InputLabel>
        <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Amount" />
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
            <DatePickers selectedDate={selectedDate} handleDateChange={handleDateChange} ></DatePickers>
        </FormControl>
    </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
