var mongoose = require('mongoose');

// Connect to Mongodb
var username = process.env.MONGO_DB_USERNAME || 'someUserName';
var password = process.env.MONGO_DB_PASSWORD || 'somePassword';

var host = process.env.MONGODB_SERVICE_HOST || '127.0.0.1';
var port = process.env.MONGODB_SERVICE_PORT || '27017';

var database = process.env.MONGO_DB_DATABASE || 'sampledb';
console.log('---DATABASE PARAMETERS---');
console.log('Host: ' + host);
console.log('Port: ' + port);
console.log('Username: ' + username);
console.log('Password: ' + password); 
console.log('Database: ' + database);



var connectionString = 'mongodb://' + username + ':' + password +'@' + host + ':' + port + '/' + database;
console.log('---CONNECTING TO---');
console.log(connectionString);
mongoose.connect(connectionString);

mongoose.connection.once('open', (data) => {
    console.log('Connection has been made');
    console.log(data);
});