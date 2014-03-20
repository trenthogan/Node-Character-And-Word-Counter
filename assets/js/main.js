function CharacterCount($scope){

	$scope.counter = 0;

	$scope.update = function(){


		$scope.counter = $scope.input.length;

	}


}