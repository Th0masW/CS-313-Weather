var express = require('express')
var path = require('path')
var PORT = process.env.PORT || 5000
var cors = require('cors')
var app = express()

app.use(cors())

//express()
  app.use(cors({ origin: 'https://www.ncdc.noaa.gov' }))

  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))  
  //Weather test page
  app.options('/weather', cors())
  app.get('/weather', cors(),(req, res) => res.render('pages/weather'))
  app.get('/weather', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})


  app.listen(PORT, () => console.log(`Listening on ${ PORT }`)) 
	