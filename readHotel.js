module.exports = function(){

	var express = require('express');
	var router = express.Router();

	//function to select hotel information
	function getHotel(res, mysql, context, id, complete){
		var sql = ("SELECT h.name, h.phone_number, hp.price FROM Hotel h INNER JOIN Hotel_Price hp ON h.id = hp.Hotel_Id WHERE hp.date = ?"){
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

	//display hotels 
	router.get('/', function(req, res){
		var callbackCount = 0;
		var context = {};
		//This line is used to delete, filter, or search using AJAX
		context.jscripts = ["deletehotel.js", "filterhotel.js", "searchhotel.js"];
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