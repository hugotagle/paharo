angular.module('paharo.services', [])

.factory('GlobalPC', ['$http', function ($http) {
    return {
        authenticate: function (data) {
            
            var queryString = 'username=' + data.username + '&password=' + data.password;
            //alert(queryString);

            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            return $http.post('http://' + window.localStorage.getItem('host') + '/pc/api/', queryString, {
                headers: {}
            });
        },
        getProfile: function (data) {

            var fullUrl = 'http://' + window.localStorage.getItem('host') + '/pc/api/?method=profile&format=json&authKey='+data.authKey;
            //alert(fullUrl);
            
            return $http.get(fullUrl);
        }
    }

}]);
