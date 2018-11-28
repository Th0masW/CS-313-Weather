var express = require('express')
var path = require('path')
var PORT = process.env.PORT || 5000
var cors = require('cors')
var app = express()

var corsOptions = {
  origin: 'https://www.ncdc.noaa.gov',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

//express()
  //app.use(cors({ origin: 'https://www.ncdc.noaa.gov' }))
  //app.options('*', cors(corsOptions))
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))  
  //Weather test page
  app.options('/weather', cors(corsOptions))
  app.get('/weather', cors(corsOptions),(req, res) => res.render('pages/weather'))
  


  app.listen(PORT, () => console.log(`Listening on ${ PORT }`)) 
	