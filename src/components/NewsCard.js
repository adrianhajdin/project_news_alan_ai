import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  media: {
    height: 300,
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    margin: 16,
    padding: '0 !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  date: {
    margin: '16px 0 0 16px !important',
  },
  source: {
    margin: '16px 16px 0 0 !important',
  },
});

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, activeArticle, i }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={3} style={{ display: 'flex', border: activeArticle === i ? '2px solid red' : null }}>
      <Card style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
        <CardActionArea href={url}>
          <CardMedia className={classes.media} image={urlToImage} title={title} />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className={classes.date} variant="body2" color="textSecondary" component="h2">{`${(new Date(publishedAt)).toDateString()} ${(new Date(publishedAt)).toLocaleTimeString()}`}</Typography>
            <Typography className={classes.source} variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
          </div>
          <Typography style={{ paddingLeft: '16px' }} gutterBottom variant="h5" component="h2">{title}</Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">Learn More</Button>
          <Typography variant="body2" color="textSecondary" component="h2">{i + 1}</Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsCard;
