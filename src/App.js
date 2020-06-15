import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import alanBtn from '@alan-ai/alan-sdk-web';

import { makeStyles } from '@material-ui/core/styles';
import jsMasteryLogo from './3.png';
import NewsCards from './components/NewsCards';

const useStyles = makeStyles({
  footer: {
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    color: 'white',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120px',
  },
  link: {
    textDecoration: 'none',
    color: '#22289a',
    marginRight: 20,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '3%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: 'rgba(21, 101, 192)',
    margin: '0 12px',
    textAlign: 'center',
    height: '25vmin',
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
const App = () => {
  const classes = useStyles();

  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: '64370f4c903e66c5b517887fefa45c1b2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          window.open(`${articles[number - 1].url}`, '_blank');
        }
      },
    });
  }, []);

  return (
    <div>
      <div className="logoContainer">
        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back <br />Give me the instructions</Typography></div>
          </div>
        ) : null}
        <img src="https://alan.app/voice/images/previews/preview.jpg" className="alanLogo" alt="logo" />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      {!newsArticles.length ? (
        <div className={classes.footer}>
          <a className={classes.link} href="#a">Adrian Hajdin, JavaScript Mastery</a>
          <img src={jsMasteryLogo} height="50px" />
        </div>
      ) : null}
    </div>
  );
};

export default App;
