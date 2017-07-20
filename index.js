let request = require('request');
const argv = require('yargs').argv;

let apiKey = 'c915fbf016210fc46c999a786c03a828';
let city = argv.c || 'porto';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

request(url, function(err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        let weather = JSON.parse(body);
        let message = `Its ${weather.main.temp} degrees in ${weather.name}.`;
        console.log('message:', message);
    }
});