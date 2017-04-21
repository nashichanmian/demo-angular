/*
 * @Author: Marte
 * @Date:   2016-12-16 11:11:14
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-03-28 17:28:07
 */

var app = angular.module('app', ['ngRoute', 'Login']);
app.controller('index', function($scope, $rootScope) {
    $rootScope.user = {
        "name": '',
        "password": ''
    };
    $rootScope.id = '';
    $rootScope.visible = true;
})
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when(
            '/', {
                templateUrl: 'content.html'
            }
        )
        .when(
            '/article', {
                templateUrl: 'article.html'
            }
        )
        .when(
            '/message', {
                templateUrl: 'message.html'
            }
        )
        .when(
            '/about', {
                templateUrl: 'about.html'
            }
        )
        .when(
            '/admin', {
                templateUrl: 'admin.html'
            }
        )
        .when(
            '/article/:id', {
                templateUrl: 'detail.html',
                controller: 'detail'
            }
        )
        .otherwise({
            redirectTo: '/'
        });
}])
app.directive('footer', function() {
    var json2 = {
        restrict: 'A',
        templateUrl: './views/footer.html'
    }
    return json2;
});

//导航栏
app.directive('navbar', function() {
    var json = {
        restrict: 'E',
        templateUrl: './views/navbar.html'
    }
    return json;
});
app.factory('getdetail', [
    '$rootScope',
    '$http',
    '$routeParams',
    function($rootScope, $http, $routeParams) {
        return {
            getDetail: function(id) {
                $http.get('http://localhost/blog/php/pages.php', {
                        params: {
                            id: id
                        }
                    })
                    .success(function(json) {
                        $rootScope.Jsona = json.data;
                        console.log($rootScope.Jsona[0]);
                    })
                    .error(function(error) {
                        alert('获取失败' + error);
                    });
            }
        }
    }
]);
app.controller('detail', ['$rootScope', 'getdetail', '$http', '$scope', '$routeParams', function($rootScope, getdetail, $http, $scope, $routeParams) {
    console.log(1);
    getdetail.getDetail($routeParams.id);
}]);