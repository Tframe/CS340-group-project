module.exports = function(){

	var express = require('express');
	var router = express.Router();

	//function to select city information
	function getCity(res, mysql, context, id, complete){
		var sql = "SELECT name, state FROM City WHERE id = ?";
		var inserts = [id];
		mysql.pool.query(sql, inserts, function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.person = results[0];
			complete();
		});
	}	
	
	//display cities
	router.get('/', function(req, res){
		var callbackCount = 0;
		var context = {};
		//This line is used to delete, filter, or search using AJAX
		context.jscripts = ["deletecity.js", "filtercity.js", "searchcity.js"];
		var mysql = req.app.get('mysql');
		getCity(res, mysql, context, complete);
		function complete(){
			callbackCount++;
			if(callbackCount >= 1){
				res.render('city', context);
			}
		}
	});
	
	return router;
}();