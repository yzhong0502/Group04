const app = require('./app');
const port = 3000;

//const session = require('express-session');

//app.use(session({secret: 'edurekaSecert'}));

app.get('/',(req,res) => {
    res.send("Express server is running.");
})

const server = app.listen(port, () => {
  console.log('Express server listening on port ' + port);
});
