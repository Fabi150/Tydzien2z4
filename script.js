function createData(obj) {
 
    var data = obj;
	
	return {
		
		set: function(key, value){
			
			if(key!==undefined && value!==undefined){
				data[key] = value;
			}else{
				console.log("Musisz podać dwa parametry!");
			}
			
		},
		
		get: function(propertyName){
			
			if(data[propertyName] !== undefined){
				return data[propertyName];
			}else{
				console.log("Nie ma takiego klucza jak "+propertyName);
			}
			
			
		},
	};
 
}
 
var data = createData({});
 
data.set("name", "Janek");
 
console.log( data.get("name") );
