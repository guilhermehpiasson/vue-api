var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');

app.listen(process.env.PORT || 5000, function(){
	console.log('API escutando na porta: ' + this.address().port);
});
