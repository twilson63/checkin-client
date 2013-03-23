var request = require('request');

module.exports = function(url) {
  setInterval(function() {
    request.post(url).pipe(process.stdout);
  }, 60 * 1000 * 5
  );
}


