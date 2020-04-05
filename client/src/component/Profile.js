
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        User Details
      </Typography>
      <List disablePadding>
        
          <ListItem className={classes.listItem} >
            <ListItemText primary={"First Name"}  />
            <Typography variant="body2">{"Krishnkant "}</Typography>
          </ListItem>
          <ListItem className={classes.listItem} >
            <ListItemText primary={"Last Name"}  />
            <Typography variant="body2">{"Tiwari "}</Typography>
          </ListItem>
          <ListItem className={classes.listItem} >
            <ListItemText primary={"Mobile"}  />
            <Typography variant="body2">{"564856895561 "}</Typography>
          </ListItem>
         
       
      </List>
    </React.Fragment>
  );
}
