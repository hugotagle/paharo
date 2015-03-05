angular.module('paharo.services', [])

.factory('GlobalPC', ['$http', function ($http) {
    return {
        authenticate: function (login) {
            var queryString = 'username=' + login.username + '&password=' + login.password;
            alert(queryString);

            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            return $http.post('https://localhost/_dev/api/', queryString, {
                headers: {}
            });
        }
    }
}]);