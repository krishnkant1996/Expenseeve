import React,{useEffect} from "react";
import { connect } from 'react-redux';
import * as actions from "../store/actions/index";

import { makeStyles ,TableBody,TableCell,Link,TableHead,TableRow,Table,Button} from '@material-ui/core';
import {DeleteOutlineRounded} from '@material-ui/icons';
// Generate Order Data
function createData(id, category) {
  return { id, category };
}

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export  function CategoryList(props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  console.log(props)
  const { getCategory,category} = props;

  useEffect(() => {
    getCategory([]);
  }, [getCategory]);

  return (
      <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {category.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell><Button onClick={()=>{console.log(row.id)}}><DeleteOutlineRounded/></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more expense
        </Link>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    error: state.category.error,
    category: state.category.category,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategory: (response) => dispatch(actions.getCategory(response))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
