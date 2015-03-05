angular.module('paharo.services', [])

.factory('GlobalPC', ['$http', function ($http) {
    return {
        authenticate: function (login) {
            //alert('authenticate');
            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            return $http.post('https://localhost/_dev/api/', login, {
                headers: {}
            });
        }
    }
}]);