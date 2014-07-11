function DataBase (request,name) {
  switch(request)
  {
  	case 'create':{
  		var db = Ti.Database.install('ui/wanago','wanago');
  		db.close();
  		TI.API.info("Base de datos instalada");
  	}
  	break;
  	
  	case 'insert':{
  		
  	}
  	break;
  }
}
module.exports = DataBase;