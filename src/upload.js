 
const fs = require('fs'); // part of Node, no npm install needed  
const path = require('path'); // part of Node, no npm install needed

const Twit = require('Twit'); // npm install twit

// you will need an object with your Twitter data
const myTweetObj = {  
  
  twitter_handle: '@wikiemojibot',
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};


function _twitterImagePub(myTweetObj, resolve, reject) {

  const T = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token:         myTweetObj.access_token,
    access_token_secret:  myTweetObj.access_secret
  });

  const PATH = path.join(__dirname, `data/images.json`);

  T.postMediaChunked({ file_path: PATH }, function (err, data, response) {

    const mediaIdStr = data.media_id_string;
    const meta_params = { media_id: mediaIdStr };

    T.post('media/metadata/create', meta_params, function (err, data, response) {

      if (!err) {

        const params = { status: myTweetObj.content, media_ids: [mediaIdStr] };

        T.post('statuses/update', params, function (err, tweet, response) {

          console.log(tweet);
          const base = 'https://twitter.com/';
          const handle = myTweetObj.twitter_handle;
          const tweet_id = tweet.id_str;
          resolve({
            live_link: `${base}${handle}/status/${tweet_id}`
          });

        }); // end '/statuses/update'

      } // end if(!err)

    }); // end '/media/metadata/create'

  }); // end T.postMedisChunked
}git statsugit statusgit push te pucchyu lpela uncle ne ?git checkout -b testuploadgit statusgit add .git commit -m "add upload.js for test"hagit statusgit pushgit checkout mastergit statullsgit pushnpm testpuchh ne keh nahi to vandho nahi it's okaynavu work avyu hajami leohi am going for lunch see ya ! 360 picyoyo mali jay