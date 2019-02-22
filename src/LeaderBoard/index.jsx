import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { sortBy } from 'lodash';
import Card from '../Card';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  logo: {
    fontFamily: 'Pacifico',
    color: '#50D986',
    fontWeight: '200',
    paddingTop: '1rem',
    paddingLeft: '1rem',
  },
  icon: {
    paddingTop: '1.2rem',
    paddingRight: '1.2rem',
    height: '100%',
  },
  title: {
    fontWeight: '400',
    marginTop: '1rem',
    marginLeft: '1.5rem',
    fontFamily: 'Open Sans',
    fontSize: '1rem',
  },
  friends: {
    fontWeight: '400',
    marginTop: '1rem',
    marginLeft: '1.5rem',
    fontFamily: 'Open Sans',
    fontSize: '14px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#0057b8',
  },
});
class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    axios.get('https://6wf2ss99a1.execute-api.us-east-2.amazonaws.com/v1')
      .then(({ data: { body } }) => {
        const parsedData = JSON.parse(body);
        const friends = parsedData.reduce((accum, {
          M: {
            FriendName: {
              S: name,
            },
            LBScore: {
              N: score,
            },
          },
        }) => [...accum, { name, score }], []);
        this.setState({ friends: sortBy(friends, [friend => (friend.score)]).reverse() });
      });
  }

  renderFriends() {
    const {
      friends,
    } = this.state;
    const { classes } = this.props;
    return friends.map(friend => (
      <Card className="leaderBoardCard">
        <ListItem className="friend" alignItems="flex-start">
          <ListItemAvatar>
            <AccountCircle color="primary" />

          </ListItemAvatar>
          <ListItemText
            primary={friend.name}
            secondary={(
              <React.Fragment>
                <Typography component="span" color="textPrimary">
                  Awesome points: {friend.score}
                </Typography>
              </React.Fragment>
              )}
          />
        </ListItem>
      </Card>
    ));
  }

  render() {
    const { classes } = this.props;
    return (
      <List className="friends-group">
        <Typography component="span" variant="h6" className={classes.title} color="textPrimary">
        A little healthy competition is a great thing.
Compare your progress with friends here.
        </Typography>

        <Typography component="span" variant="h6" className={classes.friends} color="textPrimary">
         My Friends
        </Typography>
        {this.renderFriends()}
      </List>
    );
  }
}

export default withStyles(styles)(Leaderboard);
