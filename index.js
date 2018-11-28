var express = require('express')
var path = require('path')
var PORT = process.env.PORT || 5000
var app = express()

app.use(cors())

//express()
 // .use(cors({ origin: 'https://www.ncdc.noaa.gov' }))
 // .use(cors(corsOptions))
  app.use(cors({credentials: true, origin: 'https://www.ncdc.noaa.gov'}))
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))  
  //Weather test page
  app.get('/weather', (req, res) => res.render('pages/weather'))
	
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`)) 
	