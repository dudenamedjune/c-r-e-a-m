import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { sortBy } from 'lodash';
import Card from '../Card';

export default class Leaderboard extends Component {
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
    return friends.map(friend => (
      <Card className="leaderBoardCard">
        <ListItem className="friend" alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" />
          </ListItemAvatar>
          <ListItemText
            primary={friend.name}
            secondary={(
              <React.Fragment>
                <Typography component="span" color="textPrimary">
                  {friend.score}
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
