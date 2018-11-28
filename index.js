const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var cors = require('cors')

express()
  //.options('/weather', cors())
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))  
  //Weather test page
  .get('/weather', (req, res))
  .get('/weather', (req, res) => res.render('pages/weather'))
   // .get('/weather', fetchWeather);
	
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
	