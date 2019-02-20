import React from 'react';
import { shape } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    margin: '1rem',
  },
  inline: {
    display: 'inline',
  },
  listItem: {
    borderRadius: '1rem',
    backgroundColor: theme.palette.background.paper,
    marginBottom: '1rem',
    boxShadow: '5px 5px grey',
  },
});

function AlignItemsList(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start" className={classes.listItem}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="http://lorempixel.com/400/200" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={(
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
            )}
        />
      </ListItem>
      <ListItem alignItems="flex-start" className={classes.listItem}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="http://lorempixel.com/400/200" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={(
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
)}
        />
      </ListItem>
      <ListItem alignItems="flex-start" className={classes.listItem}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="http://lorempixel.com/400/200" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={(
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
)}
        />
      </ListItem>
    </List>
  );
}

AlignItemsList.propTypes = {
  classes: shape({}).isRequired,
};

export default withStyles(styles)(AlignItemsList);
