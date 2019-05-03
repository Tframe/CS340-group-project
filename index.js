/* CS 361
 * Group 15
 * Tool Software Suite
 * Mock Server
 */


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const router = express.Router();


// mount middleware
app.use(bodyParser.json());


// const htmlDir = path.join(__dirname + '/ToolLibrary');


// routes
// CITE: https://codeforgeek.com/2015/01/render-html-file-expressjs/
// normal entry 
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/ToolLibrary/loginPage.html'));
});
// explicit pages
// login 
router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname+'/ToolLibrary/loginPage.html'));
});
// view tools page
router.get('/view-tools', function (req, res) {
	res.sendFile(path.join(__dirname+'/ToolLibrary/view-tools-demo.html'));
});
// create accounts page
router.get('/create-account', function (req, res) {
    res.sendFile(path.join(__dirname+'/ToolLibrary/create-patron-demo.html'));
});


// static files
app.use(express.static(__dirname + '/ToolLibrary'));
app.use(express.static(__dirname + '/ToolLibrary/assets'));


// use router
app.use('/', router);


// set up port
const port = process.env.PORT || 5002;
// run server
app.listen(port, () => {
    console.log("Server listening on port " + port);
});
