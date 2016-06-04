module.exports = {
	'url' : function(appEnv){
		var mongoCreds = appEnv.getServiceCreds("brave-mongo");
		mongoCreds.database = process.env.TABULOUS_DB;
		return "mongodb://"+mongoCreds.user+":"+mongoCreds.password+"@"+mongoCreds.uri+":"+mongoCreds.port+"/"+mongoCreds.database+"?ssl=true";
	}
}