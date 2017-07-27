var Twit = require('twit');
var fs = require('fs');

var T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var b64content = fs.readFileSync('Desktop/bg.jpg', { encoding: 'base64' });

// first we must post the media to Twitter
T.post('media/upload', { media_data: b64content }, function (err, data,response) {

  // now we can reference the media and post a tweet (media will attach to the tweet)
  var mediaIdStr = data.media_id_string;
  var params = { status: 'Tweet with a photo!', media_ids: [ mediaIdStr ] };

  T.post('statuses/update', params, function (err, data,response) {
    console.log(data);
  });
});