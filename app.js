'use strict';

const SwaggerExpress = require('swagger-express-mw'),
	  cors           = require('cors'),
	  mongoose       = require('mongoose'),
	  express        = require('express'),
	  bodyParser     = require('body-parser');

require('./api/models/user');
require('./api/models/pub');
require('./api/models/race');
require('./api/models/fillTestData')();

const app = express();
// app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

mongoose.connect('mongodb://localhost:27017/restrace');
mongoose.Promise = require('q').Promise;

const config = {
	appRoot: __dirname // required config
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
	if (err) {
		throw err;
	}

	// install middleware
	swaggerExpress.register(app);

	const port = process.env.PORT || 10010;
	app.listen(port);

	if (swaggerExpress.runner.swagger.paths['/hello']) {
		console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
	}
});


app.use('/', require('./api/routes/api'));//(app, express));

module.exports = app; // for testing
