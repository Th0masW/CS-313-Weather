const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const cors = require('cors')
var app = express()

express()
  .options('*', cors()) // include before other routes
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))  
  //Weather test page
  .get('/weather',cors(), (req, res) => res.render('pages/weather'))
   // .get('/weather', fetchWeather);
	
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
	function fetchWeather(request, response) {

	var harCoded = "ad adasd";
	var JSONdata = harCoded
	
	response.render('pages/weather', JSONdata)
}