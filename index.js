const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const cors = require('cors')
//var rp = require('request-promise')
const http = require('http')

const corsOptions = {
  origin: 'https://www.ncdc.noaa.gov'
}

express()
  .options('*', cors())
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))  
  //Weather test page
  .get('/weather', cors(corsOptions),(req, res) => res.render('pages/weather'))
   // .get('/weather', fetchWeather);
   //.get('/states', cors(corsOptions), (req, res) => res.render('pages/states'))
   //.get('/states', getStates)
   .get('/states', getState)
 
function getState(request, response) {

    var request = require("request");

    var options = {
        method: 'GET',
        url: 'https://www.ncdc.noaa.gov/cdo-web/api/v2/data',
        qs:
        {
            datasetid: 'NORMAL_MLY',
            datatypeid: 'MLY-TAVG-NORMAL',
            startdate: '2010-07-01',
            enddate: '2010-08-01',
            stationid: 'GHCND:USC00047821'
        },
        headers:
        {
            'Postman-Token': '52e9ac6a-52bf-4a6a-8263-b3ef13e21a1d',
            'cache-control': 'no-cache',
            token: 'zycPIftdPBYeXUhNBlkqmlbOjeCqvoWy'
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });

    response.render('pages/states', JSONdata)
}



  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
	function fetchWeather(request, response) {

	var harCoded = "ad adasd";
	var JSONdata = harCoded
	
	response.render('pages/weather', JSONdata)
}


