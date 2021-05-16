const chalk = require('chalk');
const yargs = require('yargs');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = yargs.argv.location

if(!location){
    console.log(chalk.red.bold('Please provide a location!'))

}else{
    geocode(location, (error, {latitude, longitude, location} = {}) => {
        if(error){
            return console.log('Error : ', error)
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log('Error : ', error)
            }
            
            console.log(location)
            console.log(forecastData)
        })
    })
}