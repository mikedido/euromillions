const express = require('express');
const app = express();
const axios = require('axios')
const CircularJSON = require('circular-json');
const cors = require('cors')

app.use(cors())

app.get('/', async (req, res, next) => {
    try {
        await axios.get("https://www.fdj.fr/api/service-draws/v1/games/euromillions/draws?include=results,addons&range=0-0")
        .then((response)=>{
            let json = CircularJSON.stringify(response.data[0]);
            res.send(json);
          }).catch((error)=>{
            console.log(error);
          });
      }
      catch (err) {
        next(err)
      }
})

if (process.env.NODE_ENV !== 'test') {

    app.listen(process.env.PORT || 9000);
    console.log('Server UP on port', process.env.PORT || 9000);
}
  
module.exports = app;