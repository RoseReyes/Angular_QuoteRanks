require('./server/config/mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
app.use(bodyParser.json());

// When using angular and express routes we only need to use one server 
//(express) while the angular should be watching only (ng-build --watch)
app.use(express.static(path.join(__dirname, './quoterank/dist/quoterank'))); 
//this path will tell your express app "after you're done checking all your routes, 
//try here next", and the 'dist' folder has your Angular stuff in it!

require('./server/config/routes.js')(app);

app.listen(8000, (() =>{
    console.log("listening on port 8000");
}))