const app = require('./app');
const express = require('express');
const port = 3000;
const bodyParser =  require('body-parser');
//const session = require('express-session');

//app.use(session({secret: 'edurekaSecert'}));

// homepage
app.get('/',(req,res) => {
    res.render('customer/home');
})

app.get('/admin',(req,res) => {
    res.render('admin/registerAndLogin');
})

const server = app.listen(port, () => {
  console.log('Express server listening on port ' + port);
});
