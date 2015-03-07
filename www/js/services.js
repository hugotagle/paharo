angular.module('paharo.services', [])

.factory('GlobalPC', ['$http', function ($http) {
    return {
        authenticate: function (data) {
            
            var queryString = 'username=' + data.username + '&password=' + data.password;
            alert(queryString);

            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            return $http.post('http://' + window.localStorage.getItem('host') + '/_dev/api/', queryString, {
                headers: {}
            });
        },
        getProfile: function (data) {

            var fullUrl = 'http://' + window.localStorage.getItem('host') + '/_dev/api/?method=profile&format=json&authKey='+data.authKey;
            alert(fullUrl);
            
            return $http.get(fullUrl);
        }
    }

    //    return {
    //        getProfile: function (data) {
    //                var queryString = 'username=' + data.username + '&password=' + data.password;
    //                //alert(queryString);
    //
    //                //$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    //                return $http.get('http://localhost/_dev/api/?method=profile&format=json&authKey=', queryString, {
    //                    headers: {}
    //                });
    //            }
    //            //http://localhost/_dev/api/?method=profile&format=json&authKey=8b29356b1c66f9b6f113fc47f5274c27
    //    }

}]);