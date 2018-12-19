const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const cors = require('cors')
var rp = require('request-promise')
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
 
   
      
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
	function fetchWeather(request, response) {

	var harCoded = "ad adasd";
	var JSONdata = harCoded
	
	response.render('pages/weather', JSONdata)
}

function getState(request, response) {
    

    response.render('pages/states', JSONdata)
}


