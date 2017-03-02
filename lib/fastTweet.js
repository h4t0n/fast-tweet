let fs = require("fs");
let Twitter = require('twitter');

function Tweet(options) {
    Twitter.call(this, options);
}

Tweet.prototype = new Twitter();
Tweet.prototype.constructor = Tweet;

Tweet.prototype.tweet = function (data) {

    let status = data.status;
    let imagePath = data.imagePath;

    var that = this;

    if (imagePath) {
        let imageData = getDataFromFile(imagePath);
        return uploadMedia.call(this, imageData).then(function (media) {
            return sendTweet.call(that, status, media['media_id_string']);
        });
    } else {
        return sendTweet.call(that, status);
    }
};

Tweet.prototype.sendImage = function (imagePath, callback) {
    let imageData = getDataFromFile(imagePath);
    return uploadMedia.call(this, imageData)
        .then(function (media) {
            return media['media_id_string'];
        });
};

Tweet.prototype.sendTweet = sendTweet;

function getDataFromFile(path) {
    return fs.readFileSync(path);
}

function uploadMedia(data) {
    return this.post('media/upload', { media: data })
}

function sendTweet(status, imageId) {

    var data = { status: status };
    if (imageId)
        data.media_ids = imageId;

    return this.post('statuses/update', data);
}

module.exports = Tweet;