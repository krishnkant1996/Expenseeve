import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import Settings from '@material-ui/icons/Settings';
import PeopleIcon from '@material-ui/icons/People';
import { Link } from 'react-router-dom';

export const Sidebar = (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <Home />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to="/setting">
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary="Setting"  />
    </ListItem>
    <ListItem button component={Link} to="/profile">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Profile"  />
    </ListItem>
    
  </div>
);

