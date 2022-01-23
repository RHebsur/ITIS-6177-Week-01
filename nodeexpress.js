const express = require('express')
const app = express()
const port = 2000

app.get('/', (req, res) => {
  res.send('Hello World express application!')
})

app.listen(port, function(error) {
    if(error){
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port '+ port);
    }
});