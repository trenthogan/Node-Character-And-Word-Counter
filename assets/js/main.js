function CharacterCount($scope){

	$scope.counter = 0;
	$scope.typeOfCount = 'characterCount';

	$scope.update = function(){

		if($scope.typeOfCount == 'characterCount'){

			if($scope.input === '' || $scope.input === undefined){

				$scope.counter = 0;	

			}else{

				$scope.counter = $scope.input.trim().replace(/(\r\n|\n|\r)/gm,"").length;

			}

		}else{


			if($scope.input === '' || $scope.input === undefined){

				$scope.counter = 0;	

			}else{

				var removeDoubleSpaces = $scope.input.trim().replace(/ +/g, " ");
				var totalWords = removeDoubleSpaces.split(' ').length;

				$scope.counter = totalWords + removeDoubleSpaces.split("\n").length - 1;
				 

			}

		}

	}


	$scope.characterCountReset = function(){


		$scope.update();

	}



}
