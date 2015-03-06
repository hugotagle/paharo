angular.module('paharo.services', [])

.factory('GlobalPC', ['$http', function ($http) {
    return {
        authenticate: function (data) {
            var queryString = 'username=' + data.username + '&password=' + data.password;
            alert(queryString);

            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            return $http.post('http://localhost/_dev/api/', queryString, {
                headers: {}
            });
        }
    }
}]);