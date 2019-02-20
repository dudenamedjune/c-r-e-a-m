import React from 'react';
import { shape, element, string } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

const styles = {
  header: {
    backgroundColor: '#0056BF',
    color: 'white',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: 'white',
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const {
    children,
    classes,
    titleText,
    subTitleText,
  } = props;
  return (
    <Card className={classes.card}>
      {titleText
        && (
        <CardHeader
          className={classes.header}
          title={(
            <Typography
              className={classes.title}
              component="h5"
              variant="h5"
            >
              {titleText}
            </Typography>
        )}
          subheader={subTitleText}
        />
        )
    }

      <CardContent>
        {children}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: shape({}),
  children: element,
  titleText: string,
  subTitleText: string,
};

export default withStyles(styles)(SimpleCard);
