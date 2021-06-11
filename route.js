//Deals with routing and retrieving info from the API
const fetch = require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Cap the limit to like 2000
router.route('/comics/:comicID').get(async (req, res) => {
  let comicID = req.params.comicID;
  console.log(`/comics/${comicID} endpoint called`);
  const url = `https://xkcd.com/${comicID}/info.0.json`;
  const options = {
    method: 'GET',
  };

  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((e) => {
      console.error({
        message: 'Error occured',
        error: e,
      });
    });
  //console.log('RESPONSE: ', response);
  //sends response formatted in JSON back
  //res.json(response);
  //Send data to view engine here

  let script = response.transcript;
  let cleanedScript = (script = script.replace(/(?:\r\n|\r|\n)/g, '@'));

  res.render('comic', {
    month: response.month,
    day: response.day,
    year: response.year,
    title: response.safe_title,
    transcript: cleanedScript,
    number: response.num,
    image: response.img,
    alt: response.alt,
  });
});

module.exports = router;
