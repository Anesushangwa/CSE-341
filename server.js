const express = require('express');

// const hostname = '127.0.0.1';
const app = express()
const port = process.env.PORT || 300

app.use('/', require('./routes'))

app.listen(port, () =>{
    console.log(`example app ${port}`)
})
