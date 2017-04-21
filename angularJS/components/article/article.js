/*
 * @Author: Marte
 * @Date:   2016-12-26 14:18:15
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-01-05 16:38:39
 */

app.controller('article', ['$scope','$http','$rootScope','getdetail',function($scope, $http, $rootScope,getdetail) {
    $http({
            method: 'get',
            url: 'http://localhost/blog/php/article.php',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function(res) {
            if (res.code == 100) {
                $scope.Json = res.data;
            }
        })
        .error(function(error) {
            alert(error);
        });
    // 小眼睛
    $scope.fnAcc = function(id) {
        $http.get('http://localhost/blog/php/article.php', {
                params: {
                    id: id
                }
            }).success(function(json) {
                for (var i = 0; i < $scope.Json.length; i++) {
                    if ($scope.Json[i].ID == id) {
                        $scope.Json[i].clicks++;
                        $http({
                                method: 'post',
                                url: 'http://localhost/blog/php/clicks.php',
                                params: {
                                    id: $scope.Json[i].ID,
                                    clicks: $scope.Json[i].clicks
                                },
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                }
                            }).success(function(json) {})
                            .error(function() {

                            });
                    }
                }
            })
            .error(function() {

            });

    };

}]);