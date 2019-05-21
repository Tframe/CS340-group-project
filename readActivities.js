module.exports = function(){

	var express = require('express');
	var router = express.Router();

	//function to select hotel information
	function getHotel(res, mysql, context, id, complete){
		var sql = ("SELECT a.name, a.phone_number, ap.price FROM Activity a INNER JOIN Activity_Price ap ON a.id = ap.Activity_Id WHERE ap.date = ?"){
		console.log(req.params)
		var inserts = [date];
		mysql.pool.query(sql, inserts, function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.person = results;
			complete();
		});
	}	
	
	//display cities
	router.get('/', function(req, res){
		var callbackCount = 0;
		var context = {};
		//This line is used to delete, filter, or search using AJAX
		context.jscripts = ["deleteactivity.js", "filteractivity.js", "searchactivity.js"];
		var mysql = req.app.get('mysql');
		getCity(res, mysql, context, complete);
		function complete(){
			callbackCount++;
			if(callbackCount >= 2){
				res.render('city', context);
			}
		}
	});
	
	return router;
}();