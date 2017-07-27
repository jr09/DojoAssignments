const router = require('express').Router();
const path = require('path');

module.exports = router
  .all('*', function(request, response) {
    console.log("im hit!");
    response.sendFile(path.join(__dirname, '../../../dist/index.html'));
  });
