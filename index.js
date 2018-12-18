const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const rp = require('request-promise);

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
   .get('/states', cors(corsOptions), (req, res) => res.render('pages/states'))
   //.get('/states', getStates)

    .get('/theWeather', function (req, res) {
        console.log("button pushed");
        let url = 'https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=NORMAL_MLY&datatypeid=MLY-TAVG-NORMAL&startdate=2010-07-01&enddate=2010-08-01&stationid=GHCND:USC00047821';
        let options = {
            uri: url,
            headers: { "token": "zycPIftdPBYeXUhNBlkqmlbOjeCqvoWy" },
            json: true
        };
        rp(options)
            .then(function (response) {
                res.send(response);
            })
    })

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
	function fetchWeather(request, response) {

	var harCoded = "ad adasd";
	var JSONdata = harCoded
	
	response.render('pages/weather', JSONdata)
}


