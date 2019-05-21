module.exports = function(){

	var express = require('express');
	var router = express.Router();

	//function to select hotel information
	function getHotel(res, mysql, context, id, complete){
		var sql = ("SELECT a.name, a.phone_number, ap.price FROM Airline a INNER JOIN Airline_Price ap ON a.id = ap.Airline_Id WHERE ap.date = ? AND ap.starting_destingation_id = ? AND ap.ending_destingation_id = ?"){
		console.log(req.params)
		var inserts = [date, starting_destingation, ending_destination];
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
		context.jscripts = ["deleteairline.js", "filterairline.js", "searchairline.js"];
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