import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

import NewsCard from './NewsCard';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '57vh',
    padding: '10%',
    borderRadius: 10,
    color: 'white',
  },
});

const skeletons = [
  { color: '#00838f', title: 'Latest news', text: '"Give me the latest news"' },
  { color: '#1565c0', title: 'News in a Category', text: '"Give me the latest [Technology] news"' },
  { color: '#4527a0', title: 'News by Term', text: '"What\'s up with [Playstation 5]"' },
  { color: '#283593', title: 'News from a Source', text: '"Give me the news from [CNN]"' },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>

        <Grid style={{ padding: '0 5%', width: '100%', margin: 0 }} container alignItems="stretch" spacing={3}>
          {skeletons.map((skeleton) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
              <div
                className={classes.card}
                style={{ backgroundColor: skeleton.color,
                }}
              >
                <Typography variant="h5" component="h5">{skeleton.title}</Typography>
                <Typography variant="h6" component="h6">Try saying: <br /> {skeleton.text}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid style={{ padding: '0 5%', width: '100%', margin: 0 }} container alignItems="stretch" spacing={3}>
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
