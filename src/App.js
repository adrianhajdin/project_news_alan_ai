import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Typography } from '@material-ui/core';

import NewsCards from './components/NewsCards';

// let newsArticles = [
//   {
//     author: 'Karl de Vries, CNN',
//     content: 'Washington (CNN)President Donald Trump announced late Friday night that he is rescheduling a rally that was to be held on June 19 -- Juneteenth, the holiday commemorating the end of slavery in the Un… [+2912 chars]',
//     description: 'President Donald Trump announced late Friday night that he is rescheduling a rally that was to be held on June 19 -- Juneteenth, the holiday commemorating the end of slavery in the United States -- "out of respect for this holiday."',
//     publishedAt: '2020-06-13T04:03:54Z',
//     source: {
//       id: 'cnn',
//       name: 'CNN',
//     },
//     title: "Trump reschedules Tulsa rally 'out of respect' for Juneteenth - CNN",
//     url: 'https://www.cnn.com/2020/06/12/politics/donald-trump-tulsa-rally-juneteenth/index.html',
//     urlToImage: 'https://cdn.cnn.com/cnnnext/dam/assets/200609090312-donald-trump-0608-super-tease.jpg',
//   },
//   {
//     author: 'Eric Mack',
//     content: "SpaceX's Crew Dragon spacecraft, perched atop the company's Falcon 9 rocket, took off from Cape Canaveral on May 30, carrying two astronauts to the International Space Station on a NASA mission.\r\nJoe… [+1366 chars]",
//     description: "For its third launch in two weeks, Elon Musk's rocket company will conduct its first Starlink ride-share mission and make room for three Planet Labs satellites.",
//     publishedAt: '2020-06-13T03:58:15Z',
//     source: {
//       id: null,
//       name: 'CNET',
//     },
//     title: 'How to watch SpaceX launch 58 more Starlink satellites Saturday - CNET',
//     url: 'https://www.cnet.com/how-to/how-to-watch-spacex-launch-58-more-starlink-satellites-early-saturday-morning/',
//     urlToImage: 'https://cnet3.cbsistatic.com/img/FYDznjYMyjK22iIXbwjaSJISIvA=/2020/03/04/44ebcf66-4f03-4f6b-b502-91aafdd5fda5/twitter-in-stream-wide-spacex-xjcsat-18-slc-40-900x600.jpg',
//   },
//   {
//     author: 'Phil Helsel',
//     content: 'A Kentucky teen who killed two classmates and injured others when he opened fire at his high school in 2018 was sentenced to two life sentences Friday.\r\nGabriel Parker, 18, will receive an additional… [+1542 chars]',
//     description: 'A Kentucky man who opened fire at his high school in 2018 when he was 15, killing two students and injuring others, was sentenced to two life terms on Friday.',
//     publishedAt: '2020-06-13T02:37:30Z',
//     source: {
//       id: 'nbc-news',
//       name: 'NBC News',
//     },
//     title: 'Kentucky high school shooter sentenced to 2 life terms - NBC News',
//     url: 'https://www.nbcnews.com/news/us-news/kentucky-high-school-shooter-sentenced-2-life-terms-n1230976',
//     urlToImage: 'https://media3.s-nbcnews.com/j/newscms/2020_24/3389676/200612-gabriel-parker-ac-945p_9917aa8a699434198f7dc8cc50195440.nbcnews-fp-1200-630.jpg',
//   },
//   {
//     author: 'Shams Charania',
//     content: 'As the NBA nears the resumption of the 2019-20 season on July 31, a new reality is beginning to emerge.The NBA’s Board of Governors approved a 22-team return format for the season last week, followed… [+755 chars]',
//     description: "Sources revealed to The Athletic the things that were said on Friday's call among NBA players.",
//     publishedAt: '2020-06-13T02:37:08Z',
//     source: {
//       id: null,
//       name: 'The Athletic',
//     },
//     title: 'Sources reveal details of call among 80 NBA players led by Kyrie Irving - The Athletic',
//     url: 'https://theathletic.com/1866845/2020/06/12/sources-reveal-details-of-call-among-80-nba-players-led-by-kyrie-irving/',
//     urlToImage: 'https://cdn.theathletic.com/app/uploads/2020/06/11152652/GettyImages-1199305468-1024x699.jpg',
//   },
//   {
//     author: 'Alyse Stanley',
//     content: 'Officials in California and Washington State are investigating Amazons business practices with a focus on whether the tech giant abuses its power over third-party sellers on its online marketplace, a… [+2057 chars]',
//     description: 'Officials in California and Washington State are investigating Amazon’s business practices with a focus on whether the tech giant abuses its power over third-party sellers on its online marketplace, according to reports from the New York Times and the Wall St…',
//     publishedAt: '2020-06-13T02:03:24Z',
//     source: {
//       id: null,
//       name: 'Gizmodo.com',
//     },
//     title: "Amazon's Reportedly Fielding Probes From California, Washington State Over Trade Practices - Gizmodo",
//     url: 'https://gizmodo.com/amazons-reportedly-fielding-probes-from-california-was-1844020691',
//     urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/bqsh7hqwjeci65vzrhll.jpg',
//   },
//   {
//     author: 'Simon Samano',
//     content: 'For the second time in as many fights, Jessica Eye missed weight and this time she heard about it from a prominent UFC women’s flyweight contender.\r\nPrior to UFC on ESPN 10 weigh-ins, Eye was confide… [+3334 chars]',
//     description: 'Jessica Eye was in no mood to hear criticism after a tough weight cut resulted in her missing 126 pounds for UFC on ESPN 10.',
//     publishedAt: '2020-06-13T02:02:16Z',
//     source: {
//       id: 'usa-today',
//       name: 'USA Today',
//     },
//     title: 'Jessica Eye stands up to Joanne Calderwood criticism after UFC on ESPN 10 weight miss - MMA Junkie',
//     url: 'https://mmajunkie.usatoday.com/2020/06/ufc-on-espn-10-jessica-eye-responds-joanne-calderwood-criticism-weight-miss',
//     urlToImage: 'https://usatmmajunkie.files.wordpress.com/2020/06/jessica-eye-ufc-on-espn-10-official-weigh-ins.jpg?w=1000&h=576&crop=1',
//   },
//   {
//     author: '',
//     content: 'Yesterday’s PlayStation 5 showcase packed a strong lineup of AAA and independently developed games destined for the console, but the Spider-Man: Miles Morales reveal got some of the strongest reactio… [+761 chars]',
//     description: "The developer of 'Spider-Man: Miles Morales' confirmed this PS5 game is a \"standalone\" title and not a remastered expansion of the 2018 game or anything else.",
//     publishedAt: '2020-06-13T01:59:00Z',
//     source: {
//       id: 'engadget',
//       name: 'Engadget',
//     },
//     title: "Yes, 'Spider-Man: Miles Morales' for PS5 is a standalone game - Engadget",
//     url: 'https://www.engadget.com/spider-man-miles-morales-playstation-5-014800465.html',
//     urlToImage: 'https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-06%2F358dcd00-ad17-11ea-ab1f-e8d71681c0c4&client=amp-blogside-v2&signature=42f844ae5b8a6e710f7a2313ca841d62d0a6485c',
//   },
//   {
//     author: 'Alec Snyder, CNN',
//     content: '(CNN)As municipalities across the United States revisit the naming and display of monuments honoring people with histories of racism and violence toward minorities, the Christopher Columbus statue an… [+5351 chars]',
//     description: 'A petition has started on change.org asking for the renaming of the circle and the removal of the statue "from public view."',
//     publishedAt: '2020-06-13T01:55:00Z',
//     source: {
//       id: 'cnn',
//       name: 'CNN',
//     },
//     title: "Cuomo, de Blasio don't want to see Christopher Columbus statue removed or NYC's Columbus Circle renamed - CNN",
//     url: 'https://www.cnn.com/2020/06/12/us/nyc-columbus-statue-trnd/index.html',
//     urlToImage: 'https://cdn.cnn.com/cnnnext/dam/assets/200612142953-christopher-columbus-statue-ny-super-tease.jpg',
//   },
//   {
//     author: 'AFP',
//     content: 'Washington (AFP) - Coronavirus-hit car rental company Hertz was granted permission Friday to sell $1 billion in shares, an extraordinary move after it declared bankruptcy in the United States and Can… [+1283 chars]',
//     description: 'Coronavirus-hit car rental company Hertz was granted permission Friday to sell $1 billion in shares, an extraordinary move after it declared bankruptcy in...',
//     publishedAt: '2020-06-13T01:46:50Z',
//     source: {
//       id: null,
//       name: 'Yahoo Entertainment',
//     },
//     title: 'Hertz allowed to sell $1 bn in shares despite bankruptcy - Yahoo News',
//     url: 'https://news.yahoo.com/hertz-allowed-sell-1-bn-shares-despite-bankruptcy-014214833.html',
//     urlToImage: 'https://s.yimg.com/ny/api/res/1.2/23jPNyCqZoVBsnDPUc5h8Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyODA7aD04NTEuNjY2NjY2NjY2NjY2Ng--/https://s.yimg.com/uu/api/res/1.2/y6ZsuTfg8aKacX9gNeMc8g--~B/aD01MTE7dz03Njg7c209MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en_us/News/afp.com/08e64004b0a36a6499746440954c60a17e751afa.jpg',
//   },
//   {
//     author: 'Jack Healy, Nicholas Bogel-Burroughs',
//     content: 'Wayne Reyes Jr., whose father was shot and killed by Minneapolis police officers in 2006, said he was hopeful that lawmakers would make meaningful changes this time, but said he was angry it had take… [+1834 chars]',
//     description: 'The Minneapolis City Council and Minnesota Legislature convened to consider sweeping changes to policing. Political and procedural hurdles are already apparent.',
//     publishedAt: '2020-06-13T01:43:15Z',
//     source: {
//       id: null,
//       name: 'New York Times',
//     },
//     title: 'Calls for Transforming Police Run Into Realities of Governing in Minnesota - The New York Times',
//     url: 'https://www.nytimes.com/2020/06/12/us/minneapolis-police-defunding.html',
//     urlToImage: 'https://static01.nyt.com/images/2020/06/12/us/12UNREST-MINNESOTA-capitol/12UNREST-MINNESOTA-capitol-facebookJumbo.jpg',
//   },
//   {
//     author: null,
//     content: 'Live coverage of the countdown and launch of a SpaceX Falcon 9 rocket from pad 40 at Cape Canaveral Air Force Station. The mission will launch SpaceX’s ninth batch of Starlink broadband satellites. T… [+64 chars]',
//     description: null,
//     publishedAt: '2020-06-13T01:38:08Z',
//     source: {
//       id: null,
//       name: 'Spaceflight Now',
//     },
//     title: 'Live coverage: Falcon 9 rocket ready for predawn launch Saturday - Spaceflight Now',
//     url: 'https://spaceflightnow.com/2020/06/13/falcon-9-starlink-8-mission-status-center/',
//     urlToImage: null,
//   },
//   {
//     author: null,
//     content: 'In todays IGN Daily Fix, Sydnee Goodman brings us the latest in gaming news. We talk about Sony boss Jim Ryans explanation of the PS5s console design and a newly leaked Star Wars game.\r\n#ign#dailyfix… [+3 chars]',
//     description: 'In today’s IGN Daily Fix, Sydnee Goodman brings us the latest in gaming news. We talk about Sony boss Jim Ryan’s explanation of the PS5’s console design and ...',
//     publishedAt: '2020-06-13T01:36:52Z',
//     source: {
//       id: null,
//       name: 'YouTube',
//     },
//     title: 'Sony Boss Explains PS5 Design - IGN Daily Fix - IGN',
//     url: 'https://www.youtube.com/watch?v=VG9G6m-ytnk',
//     urlToImage: 'https://i.ytimg.com/vi/VG9G6m-ytnk/maxresdefault.jpg',
//   },
//   {
//     author: 'Eric Schmitt, Michael D. Shear',
//     content: 'Never did I dream that troops taking that same oath would be ordered under any circumstance to violate the constitutional rights of their fellow citizens much less to provide a bizarre photo op for t… [+2027 chars]',
//     description: 'The address comes as the coronavirus spreads — and during a breakdown in relations between the president and the nation’s top military leaders.',
//     publishedAt: '2020-06-13T01:09:58Z',
//     source: {
//       id: null,
//       name: 'New York Times',
//     },
//     title: 'Graduating West Point Cadets Isolate for Two Weeks Ahead of Trump Speech - The New York Times',
//     url: 'https://www.nytimes.com/2020/06/12/us/politics/trump-west-point.html',
//     urlToImage: 'https://static01.nyt.com/images/2020/06/12/us/politics/12dc-westpoint/12dc-westpoint-facebookJumbo.jpg',
//   },
//   {
//     author: 'David E. Sanger, Choe Sang-Hun',
//     content: 'Mr. Trumps initiative was widely praised, at first. After a quarter-century of fruitless negotiations at lower levels, a president-to-president summit seemed refreshing. But while the meeting had fab… [+2026 chars]',
//     description: 'North Korea’s nuclear arsenal is far larger than it was when President Trump and Kim Jong-un of North Korea first met.',
//     publishedAt: '2020-06-13T00:51:00Z',
//     source: {
//       id: null,
//       name: 'New York Times',
//     },
//     title: 'Two Years After Trump-Kim Meeting, Little to Show for Personal Diplomacy - The New York Times',
//     url: 'https://www.nytimes.com/2020/06/12/world/asia/korea-nuclear-trump-kim.html',
//     urlToImage: 'https://static01.nyt.com/images/2020/06/12/us/politics/12dc-korea-assess/12dc-korea-assess-facebookJumbo.jpg',
//   },
//   {
//     author: 'Mack Jones',
//     content: 'SALT LAKE CITY Rep. Ben McAdams says he is outraged by Treasury Secretary Steve Mnuchins decision to withhold information on who received loan money from the $500 billion Paycheck Protection Program.… [+1415 chars]',
//     description: 'Congressman Ben McAdams is “outraged” over Treasury Secretary Steve Mnuchin’s refusal to disclose information on who has received loans from the Paycheck Protection Program.',
//     publishedAt: '2020-06-13T00:43:23Z',
//     source: {
//       id: null,
//       name: 'Deseret News',
//     },
//     title: 'Ben McAdams ‘outraged’ over refusal to disclose PPP loan information - Deseret News',
//     url: 'https://www.deseret.com/utah/2020/6/12/21289787/mcadams-outraged-treasury-department-paycheck-protection-loan-steve-mnuchin-covid-19',
//     urlToImage: 'https://cdn.vox-cdn.com/thumbor/kqYzzyxD9jA3p8-5veqrXvgSaXQ=/0x308:4100x2455/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/20032960/merlin_2775524.jpg',
//   },
//   {
//     author: 'Vincent Barone',
//     content: 'The Trump administration on Friday announced it is reversing an Obama-era regulation that prohibited discrimination against transgender patients in health care.\r\nThe announcement from the Department … [+1567 chars]',
//     description: 'The Trump administration on Friday announced it is reversing an Obama-era regulation that prohibited discrimination against transgender patients in health care. The announcement from the Department…',
//     publishedAt: '2020-06-13T00:40:33Z',
//     source: {
//       id: null,
//       name: 'New York Post',
//     },
//     title: 'Trump administration eliminates Obama-era transgender health care protections - New York Post ',
//     url: 'https://nypost.com/2020/06/12/trump-administration-cancels-transgender-health-care-rules/',
//     urlToImage: 'https://thenypost.files.wordpress.com/2020/06/trump-9.jpg?quality=90&strip=all&w=1200',
//   },
//   {
//     author: 'Brent Johnson | NJ Advance Media for NJ.com',
//     content: 'President Donald Trump is hosting Gov. Phil Murphy for dinner at his Bedminster golf club Friday night to discuss New Jerseys recovery and reopening from the coronavirus pandemic, as well as infrastr… [+4089 chars]',
//     description: "Gov. Phil Murphy is expected to talk about New Jersey's response to and reopening front the coronavirus pandemic.",
//     publishedAt: '2020-06-13T00:30:00Z',
//     source: {
//       id: null,
//       name: 'nj.com',
//     },
//     title: 'Murphy dines with Trump at president’s Bedminster golf club - NJ.com',
//     url: 'https://www.nj.com/coronavirus/2020/06/murphy-dines-with-trump-at-presidents-bedminster-golf-club.html',
//     urlToImage: 'https://www.nj.com/resizer/PFMCvTGAh3LWPilQ1MNpAoAeSKo=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/WDUK5HRFNFDVVB2CPPLV2Z2AUY.JPG',
//   },
//   {
//     author: null,
//     content: null,
//     description: 'Prime Minister Justin Trudeau said today he has "serious questions" about the arrest of Athabasca Chipewyan First Nation Chief Allan Adam after viewing recen...',
//     publishedAt: '2020-06-13T00:18:29Z',
//     source: {
//       id: null,
//       name: 'YouTube',
//     },
//     title: 'RCMP dashcam video shows officers tackling, punching Chief Allan Adam - CBC News',
//     url: 'https://www.youtube.com/watch?v=kKfRbvUFvFs',
//     urlToImage: 'https://i.ytimg.com/vi/kKfRbvUFvFs/maxresdefault.jpg',
//   },
//   {
//     author: null,
//     content: 'In a newly released comedy special, Comedian Dave Chappelle addressed the murder of George Floyd. In the socially-distant comedy special entitled 8:46, a nod to the length of time the officers knelt … [+1275 chars]',
//     description: 'In a newly released comedy special, Comedian Dave Chappelle addressed the murder of George Floyd. In the socially-distant comedy special entitled “8:46,” a n...',
//     publishedAt: '2020-06-12T23:56:45Z',
//     source: {
//       id: null,
//       name: 'YouTube',
//     },
//     title: "'Wrath Of God:' Dave Chappelle Addresses Police Officers In George Floyd Death | MSNBC - MSNBC",
//     url: 'https://www.youtube.com/watch?v=J-KHxxcFClY',
//     urlToImage: 'https://i.ytimg.com/vi/J-KHxxcFClY/maxresdefault.jpg',
//   },
//   {
//     author: 'Joan E. Solsman',
//     content: 'HBO Max, which streams the full catalog of Game of Thrones, launched May 27. \r\nHBO\r\nHBO Max, when it arrived two weeks ago as an amped-up app to stream HBO with a lot of extra programming, also broug… [+2353 chars]',
//     description: 'Roku and Fire TV customers who rely on HBO Go to watch on their TVs will be out of luck until the companies reach a deal.',
//     publishedAt: '2020-06-12T23:31:22Z',
//     source: {
//       id: null,
//       name: 'CNET',
//     },
//     title: 'HBO is getting rid of HBO Go, renaming HBO Now since HBO Max is live - CNET',
//     url: 'https://www.cnet.com/news/hbo-max-hbo-go-hbo-now-roku-amazon-fire-tv-sunsetting/',
//     urlToImage: 'https://cnet4.cbsistatic.com/img/ZQIyheX6cYx_Fe4HrfG8haSkdEw=/2020/05/27/089c39a8-2f6d-43f6-a7cf-3b2723240921/hbo-max-app.png',
//   },
// ];

const App = () => {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  //   newsArticles = [];

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
        {/* <Typography variant="h5" component="h2">Try saying: "Give me the latest news."</Typography> */}
        <img src="https://alan.app/voice/images/previews/preview.jpg" className="alanLogo" alt="logo" />
        {/* <Typography variant="h5" component="h2">Try saying: "Give me the latest news."</Typography> */}
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
