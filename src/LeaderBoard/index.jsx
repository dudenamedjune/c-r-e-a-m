import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Card from '../Card';

export default class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    axios.get('https://fq5ddaci86.execute-api.us-east-2.amazonaws.com/v1')
      .then((response) => {
        console.log(response);
        this.setState({ friends: response.data });
      });
  }

  renderFriends() {
    return this.state.friends.map(friend => (
      <Card>
        <ListItem className="friend" alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={friend.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={friend.name}
            secondary={(
              <React.Fragment>
                <Typography component="span" color="textPrimary">
                  {friend.desc}
                </Typography>
              </React.Fragment>
              )}
          />
        </ListItem>
      </Card>
    ));
  }

  render() {
    return (
      <List className="friends-group">
        {this.renderFriends()}
      </List>
    );
  }
}
