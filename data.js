function products($scope, $http, $templateCache) {
    $scope.selectedFilter = 'price';
    $scope.items = [];
    $scope.fetch = function(){    
        $http.get('datafile.json').
            success(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.items = data;
                $scope.data = data;
                $scope.status = status;
            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert('Error!')
            });
	};
}