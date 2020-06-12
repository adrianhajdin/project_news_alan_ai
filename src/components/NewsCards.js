import React from 'react';
import { Grid } from '@material-ui/core';

import NewsCard from './NewsCard';

const NewsCards = ({ articles, activeArticle }) => {
  if (!articles.length) {
    return <h1>Give me a command.</h1>;
  }

  return (
    <Grid style={{ padding: '0 10%' }} container alignItems="stretch" spacing={3}>
      {articles.map((article, i) => (
        <NewsCard activeArticle={activeArticle} i={i} article={article} />
      ))}
    </Grid>
  );
};

export default NewsCards;
