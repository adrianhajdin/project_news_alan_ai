import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

import NewsCard from './NewsCard';

const useStyles = makeStyles({
  withChildren: {
    visibility: 'initial !important',
  },
});

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grid style={{ padding: '0 10%', width: '100%', margin: 0 }} container alignItems="stretch" spacing={3}>
        {[...Array(4).keys()].map(() => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            {/* <Skeleton variant="text" classes={{ withChildren: classes.withChildren }} style={{ dislay: 'flex', alignItems: 'center', justifyContent: 'center' }} animation="wave" variant="rect" width="100%" height="57vh">
              test
              <Typography style={{ visibility: 'initial !important' }} variant="h5" component="h2">Try saying: "Give me the latest news!"</Typography>

            </Skeleton> */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '57vh', backgroundColor: '#e2e2e2', padding: '10%', borderRadius: 10 }}>
              <Typography variant="h5" component="h2">Try saying: "Give me the latest news!"</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grow in>
      <Grid style={{ padding: '0 10%', width: '100%', margin: 0 }} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
