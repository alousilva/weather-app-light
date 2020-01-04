const request = require('request');

const apiKey = '';
const city = process.argv[2] || 'porto';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

request(url, (err, response, body) => {
    if (err) {
        console.log('error:', error);
    } else {
        let weather = JSON.parse(body);
        let message = `It is ${weather.main.temp} degrees in ${weather.name}.`;
        console.log('message:', message);
    }
});
