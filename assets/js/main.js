function CharacterCount($scope){

	$scope.counter = 0;
	$scope.typeOfCount = 'characterCount';

	$scope.update = function(){

		if($scope.typeOfCount == 'characterCount'){

			$scope.counter = $scope.input.length;

		}else{

			if($scope.input === ''){

				$scope.counter = 0;	

			}else{

				var removeDoubleSpaces = $scope.input.replace(/ +/g, " ");
				$scope.counter = removeDoubleSpaces.split(' ').length;

			}

		}

	}


	$scope.characterCountReset = function(){


		$scope.update();

	}



}
