const request = require('request');

const forecast = (latitude,longitude , callback)=>{
    
    const url ='https://api.darksky.net/forecast/c9495c3f74322b3a10625b16c4662177/' + latitude +"," +  longitude + "?units=auto";

    request({url,json:true},(error,response) =>{

        if(error){ // This check is for No internet conection.
            callback('Unable to connect to weather services!' , undefined);
        }
        else if(response.body.error){ // This check is for wrong arguments in API.
            callback('Unable to find location!' , undefined);
        }
        else{
            callback(undefined , {
                summary : response.body.daily.data[0].summary,
                temperature : response.body.currently.temperature ,
                rain : response.body.currently.precipProbability
            })
        }
    })

}

module.exports = forecast;