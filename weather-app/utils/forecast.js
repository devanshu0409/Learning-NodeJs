const chalk = require('chalk');
const request = require('postman-request');

const weather = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4decbbe174797107152360c794836429&query='+latitude+','+longitude+'&units=m'

    request({ url, json:true}, (error, {body} = {}) => {
        if(error){
            callback(chalk.red('Something went wrong . . . . . '), undefined)
            
        } else if(body.error) {
            callback(chalk.red(body.error.info), undefined)
    
        } else{
            callback( undefined, 'It is currently ' + chalk.blue(body.current.temperature + ' degrees ') + 'out. Although it feels like ' + chalk.yellow(body.current.feelslike + ' degrees.'))
        }
    })
}

module.exports = weather