const express = require('express');
const path = require('path');

// Initiliazations
const app = express();
require('./database');
require('./config/passport');

// Setting
app.set('port', process.env.PORT || 3000);

// Routes
app.use(require('./routes/index'));

// Server is listenning
app.listen(app.get('port'),()=>{
    console.log('server on port ',app.get('port'));
});