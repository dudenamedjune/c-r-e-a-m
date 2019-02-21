import Grid from '@material-ui/core/Grid';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import LineChart from '../LineChart';
// import PieChart from '../PieChart';
import Card from '../Card';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 6,
    textAlign: 'center',
    borderRadius: 12,
    height: 140,
    margin: 10,
    color: theme.palette.text.secondary,
  },
  title: {
    fontWeight: '400',
    marginTop: '1rem',
    marginLeft: '1.5rem',
    fontFamily: 'Open Sans',
  },
  dashboardCons: {
    fontFamily: 'Open Sans',
  },
  rightIcons: {
    marginRight: '-1rem',
  },
});

function CenteredGrid(props) {
  const {
    classes,
    accountInfo: {
      totalSavings,
      biYearly,
    },
  } = props;
  return (
    <Grid item xs={12}>
      <Grid container>
        <Typography component="span" variant="h5" className={classes.title} color="textPrimary">
                Hi, Emily
        </Typography>
        <Grid item xs={12}>
          <Card
            titleText={`Total Saved: $${totalSavings}`}
          >
            {/* <PieChart /> */}
            <LineChart data={biYearly} />
          </Card>
        </Grid>
        <Grid container>
          <Grid xs={6} sm={3}>
            <Card className="homeCard">
              <Button component={Link} to="#"><img className="homeCardLinkImg" alt="Adjust Goals" src="/icons/ICON_AdjustGoals.svg" />
              </Button>
              <Typography align="center" component="span" variant="h5" className={classes.dashboardCons} color="textPrimary">
                Adjust Goals
              </Typography>
            </Card>
          </Grid>
          <Grid xs={6} sm={3}>
            <Card className="homeCard">
              <Button component={Link} to="#"><img className="homeCardLinkImg leftIcons" alt="Link Account" src="/icons/ICON_LinkAccount.svg" /></Button>
              <Typography align="center" component="span" variant="h5" className={classes.dashboardCons} color="textPrimary">
                Link Account
              </Typography>
            </Card>
          </Grid>
          <Grid xs={6} sm={3}>
            <Card className="homeCard">
              <Button component={Link} to="#"><img className="homeCardLinkImg" alt="Find Friends" src="/icons/ICON_FindFriends.svg" /></Button>
              <Typography align="center" component="span" variant="h5" className={classes.dashboardCons} color="textPrimary">
                Find Friends
              </Typography>
            </Card>
          </Grid>
          <Grid xs={6} sm={3}>
            <Card className="homeCard">
              <Button component={Link} to="#"><img className="homeCardLinkImg leftIcons" alt="Savings Tips" src="/icons/ICON_SavingTips.svg" /></Button>
              <Typography align="center" component="span" variant="h5" className={classes.dashboardCons} color="textPrimary">
                Saving Tips
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(CenteredGrid);
