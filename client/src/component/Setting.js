import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Paper,
  FormLabel,
  TextField,
} from "@material-ui/core";
import CategoryList from "./CategoryList";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  paperClass: {
    padding: theme.spacing(2),
  },
}));

export default function Setting() {
  const classes = useStyles();
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
              />                </Grid>
              <Grid item xs={4} md={4} lg={4}>
                <Button variant="contained" color="primary">
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
