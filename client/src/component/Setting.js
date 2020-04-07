import React,{useEffect} from "react";
import { connect } from 'react-redux';
import * as actions from "../store/actions/index";
import {
  Grid,
  Button,
  Paper,
  FormLabel,
  TextField,
  makeStyles
} from "@material-ui/core";
import CategoryList from "./CategoryList";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },   

}));

export  function Setting(props) {
  const [categoryName, setCategoryName] = React.useState("");
  const { addCategory,error } = props;
  const classes = useStyles();
  useEffect(()=>{
    console.log(error)
  if(!error){
    setCategoryName("")
  }

  },[error])
  return (

    <>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={4} md={4} lg={4}>
                <FormLabel>Total Budget</FormLabel>
              </Grid>
              <Grid item xs={4} md={4} lg={4}>
              <TextField
                id="standard-multiline-flexible"
                label="Amount"
                multiline
                rowsMax="4"
              />              
              </Grid>
              <Grid item xs={4} md={4} lg={4}>
                <Button variant="contained" color="primary">
                  Update
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={4} md={4} lg={4}>
                <FormLabel>Categories</FormLabel>
              </Grid>
              <Grid item xs={4} md={4} lg={4}>
              <TextField
                label="Categorie name here"
                multiline
                rowsMax="4"
                onChange={(e)=>{setCategoryName(e.target.value)}}
              />                </Grid>
              <Grid item xs={4} md={4} lg={4}>
                <Button variant="contained" color="primary" onClick={()=>{
                  addCategory(categoryName);
                  setTimeout(()=>{
                    setCategoryName("")
                  },1000)
                }}>
                  Add
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* Recent CategoryList */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <CategoryList />
          </Paper>
        </Grid>
      </Grid>
    </>
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
    addCategory: (name) => dispatch(actions.addCategory(name))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);
