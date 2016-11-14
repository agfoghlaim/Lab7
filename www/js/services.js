app.service('ageService', function(){
	this.newAge2 = function(age2){
		if(age2>=0 && !isNaN(age2)){
		return parseInt(age2)+1;
	}else{
		return "??";
	}
	}
});