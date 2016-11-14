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


app.controller('studentController', function($scope,studentAgeService){
	$scope.students=[];
	function Student(name, address, dob){
		this.name = name;
		this.address = address;
		this.dob = dob;
		this.age = studentAgeService.getAge(this.dob);
	}
	var s1 = new Student('Tom', 'Galway', new Date(1995, 10, 19));
	var s2 = new Student('John', 'Tuam', new Date(1996, 07, 11));
	var s3 = new Student('Mary', 'Ballinasloe', new Date(1995, 08, 01));
	var s4 = new Student('Fred', 'Athenry', new Date(1994, 07, 11));
	$scope.students.push(s1,s2,s3,s4);
});

app.controller('GMITController', function($scope, studentAgeService){
	$scope.GMIT = {
		name: 'Galway-Mayo Institute of Technology', 
		address:'Galway, Letterfrack, Mountbellew, Castlebar',
		founded: new Date(1972,08,18),
		age: studentAgeService.getAge(new Date(1972,08,18))

		
	
	};
});