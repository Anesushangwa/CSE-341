const routes = require('express').Router();

routes.get('/',(req,res) => {
    res.send('hazel shangwa')
});

module.exports = routes;