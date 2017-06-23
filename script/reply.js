'use strict';

const Images = require('../src/images');
const Twitter = require('../src/twitter');
const ReplyTweet = require('../src/tweets/reply_tweet');
const RequestTweet = require('../src/tweets/request_tweet');

console.log(reply_tweet)

let stream = Twitter.stream();
 
 console.log(tweets)

stream.on('tweet', (payload) => {
  let request_tweet = new RequestTweet(payload);

 console.log (tweet)

  if (request_tweet.shouldReply()) {
    let image = new Images().getFromText(request_tweet.getText());
    if (!image) { return; }

console.log(request_tweet)

    let reply_tweet = new ReplyTweet(request_tweet, image);
    Twitter.reply(reply_tweet);

  console.log(reply_tweet)
  }

});

stream.on('error', (payload) => {
  console.error(payload);
});
