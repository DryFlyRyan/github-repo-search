var express = require('express');
var querystring = require('querystring');
var fetch = require('node-fetch');
var cache = require('memory-cache');
var router = express.Router();


/* GET repos listing. */

router.get('/', async (req, res, next) => {
  try {
    const query = querystring.stringify(req.query);
    const savedResponse = cache.get(query);
    if (savedResponse) {
      console.log('saved query: ', query)
      res.send(savedResponse);
      return;
    }
    var response = await fetch(`https://api.github.com/search/repositories?${query}`);
    let data = await response.json();
    cache.put(query, data);
    res.send(data);
  } catch (error) {
    console.log('error', error)
  }
});

module.exports = router;
