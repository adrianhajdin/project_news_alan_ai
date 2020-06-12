import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import { Typography } from '@material-ui/core';
import NewsCards from './components/NewsCards';

const App = () => {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: '64370f4c903e66c5b517887fefa45c1b2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          console.log('DOGODILO SE POSTAVLJANJE');
          if (articles.length) {
            setNewsArticles(articles);
            setActiveArticle(-1);
          }
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          console.log(number, newsArticles);
          console.log(articles);
          window.open(`${articles[number - 1].url}`, '_blank');
          // setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
      },
    });
  }, []);

  console.log(newsArticles);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ padding: '0 10%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
        <Typography variant="h5" component="h2">Try saying: "Give me the latest news."</Typography>
        <img src="https://alan.app/voice/images/previews/preview.jpg" className="alanLogo" alt="logo" />
        <Typography variant="h5" component="h2">Try saying: "Give me the latest news."</Typography>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
