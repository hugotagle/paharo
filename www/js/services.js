angular.module('paharo.services', [])

.factory('GlobalPC', ['$http', 'PARSE_CREDENTIALS', function ($http, PARSE_CREDENTIALS) {
    return {
        authenticate: function () {
            return $http.post('https://localhost/_dev/api/', data, {
                headers: {}
            });
        }
    }
}]);