// // Name: News
// // Description: Gives the latest headlines on topics like health, science, entertainment, sports, business, and technology. Each news headline has a corresponding image.

// title('News');

// intent('give me the news from $(query* (.*))', (p) => {
//   const API_KEY = '7bdfb1b10aca41c6becea47611b7c35a';
//   let NEWS_API_URL = `http://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;

//   if (p.query.value) {
//     NEWS_API_URL = `${NEWS_API_URL}&sources=${p.query.value}`;
//   }

//   api.request(NEWS_API_URL, (error, response, body) => {
//     if (error || response && response.statusCode !== 200) {
//       print(`failed to get news${error}`);
//       p.play('(Sorry,|) (Something went wrong.|There was an error.|) (I\'m unable to get the news at this time.|I wasn\'t able to get the news.) (Please try again.|)');
//     } else {
//       const { articles } = JSON.parse(body);

//       p.play({ embeddedPage: true, page: 'news.html', command: 'newHeadlines', articles });

//       if (p.query.value) {
//         p.play(`Here are the (latest|recent) $(N headlines) on ${p.query.value}.`,
//           `Here's the (recent|latest) $(N news) on ${p.query.value}.`,
//           `Here are the (latest|recent) ${p.query.value} $(N headlines).`,
//           `Here's the (recent|latest) ${p.query.value} $(N news)`);
//       } else {
//         p.play('Here are the (latest|recent) $(N headlines).',
//           'Here\'s the (latest|recent) $(N news).');
//       }

//       for (let i = 0; i < articles.length; i++) {
//         p.play({ embeddedPage: true, command: 'highlight', page: 'news.html', article: articles[i] });
//         p.play(`${articles[i].title}`);
//       }

//       p.play({ embeddedPage: true, command: 'unSelect' });
//     }
//   });
// });

// // CATEGORIES

// intent('what\'s up with $(query* (.*))', (p) => {
//   const API_KEY = '7bdfb1b10aca41c6becea47611b7c35a';
//   let NEWS_API_URL = `http://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;

//   console.log(p.query);
//   if (p.query.value) {
//     NEWS_API_URL = `${NEWS_API_URL}&q=${p.query.value}`;
//   }

//   api.request(NEWS_API_URL, (error, response, body) => {
//     if (error || response && response.statusCode !== 200) {
//       print(`failed to get news${error}`);
//       p.play('(Sorry,|) (Something went wrong.|There was an error.|) (I\'m unable to get the news at this time.|I wasn\'t able to get the news.) (Please try again.|)');
//     } else {
//       const { articles } = JSON.parse(body);

//       console.log(articles);

//       p.play({ embeddedPage: true, page: 'news.html', command: 'newHeadlines', articles });

//       if (p.query.value) {
//         p.play(`Here are the (latest|recent) $(N headlines) on ${p.query.value}.`,
//           `Here's the (recent|latest) $(N news) on ${p.query.value}.`,
//           `Here are the (latest|recent) ${p.query.value} $(N headlines).`,
//           `Here's the (recent|latest) ${p.query.value} $(N news)`);
//       } else {
//         p.play('Here are the (latest|recent) $(N headlines).',
//           'Here\'s the (latest|recent) $(N news).');
//       }

//       for (let i = 0; i < articles.length; i++) {
//         p.play({ embeddedPage: true, command: 'highlight', page: 'news.html', article: articles[i] });
//         p.play(`${articles[i].title}`);
//       }

//       p.play({ embeddedPage: true, command: 'unSelect' });
//     }
//   });
// });

// // CATEGORIES
// const CATEGORIES = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
// const CATEGORIES_INTENT = `${CATEGORIES.map((category) => `${category}~${category}`).join('|')}|`;

// intent(`(show|what is|tell me|what's|what are|what're|read) (the|) (recent|latest|) $(N news|headlines) (in|about|on|) $(T~ ${CATEGORIES_INTENT})`,
//   `(read|show|get|bring me) (the|) (recent|latest|) $(C~ ${CATEGORIES_INTENT}) $(N news|headlines)`, (p) => {
//     const API_KEY = '7bdfb1b10aca41c6becea47611b7c35a';
//     let NEWS_API_URL = `http://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=us`;

//     if (p.C.label) {
//       NEWS_API_URL = `${NEWS_API_URL}&category=${p.C.label}`;
//     }

//     api.request(NEWS_API_URL, (error, response, body) => {
//       if (error || response && response.statusCode !== 200) {
//         print(`failed to get news${error}`);
//         p.play('(Sorry,|) (Something went wrong.|There was an error.|) (I\'m unable to get the news at this time.|I wasn\'t able to get the news.) (Please try again.|)');
//       } else {
//         const { articles } = JSON.parse(body);

//         p.play({ embeddedPage: true, page: 'news.html', command: 'newHeadlines', articles });

//         if (p.T.label) {
//           p.play(`Here are the (latest|recent) $(N headlines) on ${p.T.label}.`,
//             `Here's the (recent|latest) $(N news) on ${p.T.label}.`,
//             `Here are the (latest|recent) ${p.T.label} $(N headlines).`,
//             `Here's the (recent|latest) ${p.T.label} $(N news)`);
//         } else {
//           p.play('Here are the (latest|recent) $(N headlines).',
//             'Here\'s the (latest|recent) $(N news).');
//         }

//         for (let i = 0; i < articles.length; i++) {
//           p.play({ embeddedPage: true, command: 'highlight', page: 'news.html', article: articles[i] });
//           p.play(`${articles[i].title}`);
//         }

//         p.play({ embeddedPage: true, command: 'unSelect' });
//       }
//     });
//   });

// intent('What does this app do?', 'How does this work?', 'What can I do here?', 'How should I use this?',
//   reply('This is a news project, and you can provide the most recent headlines in mainstream media'
//         + ' Just ask me anything about the news, and I will try to answer it'));

// intent('(types|categories|topics) (of|in) the news (now|)', 'What (types|categories|topics) of news do you have?',
//   reply(`We provide news on ${CATEGORIES.join(', ')}`));
