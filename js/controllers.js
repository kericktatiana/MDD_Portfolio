var galleryControllers = angular.module('galleryControllers', []);

galleryControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').success(function(data) {
		$scope.websites = data;
	});
}]);

