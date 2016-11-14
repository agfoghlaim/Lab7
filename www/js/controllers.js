app.controller('ctrl', function($scope, ageService){
	$scope.nextAge = function(age){
		if(age >=0 && !isNaN(age)){
		$scope.newAge = parseInt(age)+ 1;
	}else{
		$scope.newAge = "??";
	}

}
	$scope.nextYear2 = function(age2){
		$scope.newAge2 = ageService.newAge2(age2);
	
	}
});