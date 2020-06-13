import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import alanBtn from '@alan-ai/alan-sdk-web';

import { makeStyles } from '@material-ui/core/styles';
import jsMasteryLogo from './3.png';
import NewsCards from './components/NewsCards';

const useStyles = makeStyles({
  footer: {
    position: 'fixed', bottom: 40, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#22289a',
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
      <div style={{ padding: '0 10%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
        {newsArticles.length
          ? (
            <>
              <Typography variant="h5" component="h2">Try saying: "Open article number 5."</Typography>
              <Typography variant="h5" component="h2">Try saying: "Go back" or "Give me the instructions</Typography>
            </>
          )
          : null}
        <img src="https://alan.app/voice/images/previews/preview.jpg" className="alanLogo" alt="logo" />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      {/* <div className={classes.footer}>
        <a className={classes.link} href="">Adrian Hajdin, JavaScript Mastery</a> <img src={jsMasteryLogo} height="50px" />
      </div> */}
    </div>
  );
};

export default App;
