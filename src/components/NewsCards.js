import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import NewsCard from './NewsCard';

const NewsCards = ({ articles, activeArticle }) => {
  if (!articles.length) {
    return (
      <Grid style={{ padding: '0 10%', width: '100%', margin: 0 }} container alignItems="stretch" spacing={3}>
        {/* <Skeleton animation="wave" variant="rect" width={210} height={118} /> */}

        {[...Array(4).keys()].map(() => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <Skeleton animation="wave" variant="rect" width="100%" height="57vh" />
            <Typography variant="body2" color="textSecondary" component="h2">Try saying: "Give me the latest news!"</Typography>
          </Grid>
        ))}
      </Grid>
    );
    return <h1>Give me a command.</h1>;
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
