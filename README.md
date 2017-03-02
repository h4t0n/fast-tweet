# Fast Tweet
A simple interface to send a tweet with a single nodejs function call.

## Install 

```
$ npm install fast-tweet --save
```

## Usage

Fast Tweet adds some methods to the [Twitter](https://www.npmjs.com/package/twitter) library.

You can use the `tweet` method to send a fast Tweet, and you can use all the methods of  [Twitter](https://www.npmjs.com/package/twitter).

### Initialization the library (same as Twitter)
```javascript
let Twitter = require('fast-tweet');

var client = new Twitter({
    consumer_key: CONSUMER_KEY,
    consumer_secret: CONSUMER_SECRET,
    access_token_key: ACCESS_TOKEN_KEY,
    access_token_secret: ACCESS_TOKEN_SECRET
});
```

### Tweet a single status message:
```javascript
client.tweet({
            status: "Hello World, I'm a fast tweet",
        }).then(function (tweet) {
            console.log("tweeted");
        }).catch(function (error) {
            console.log(error);
        });
```

#### Tweet a message with image
You have to specify the `imagePath` parameter (currently supported only file system images):
```javascript
client.tweet({
            status: "Test #abcd",
            imagePath: "test.png"
        }).then(function (tweet) {
            console.log("tweeted");
        }).catch(function (error) {
            console.log(error);
        });
```