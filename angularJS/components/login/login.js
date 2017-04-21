app.directive('login', function() {
    var json = {
        restrict: 'E',
        templateUrl: './components/login/login.html'
    }
    return json;
});

angular.module('Login', []).controller('login', function($scope, $http, $timeout, $rootScope) {
    $scope.showinfo = "";
    $scope.myform = function() {
        $http({
                method: 'post',
                url: 'http://localhost/angularJs/php/login.php',
                params: $scope.user,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .success(function(data) {

                if (data.code == 100) {
                    $scope.showinfo = "登陆成功!";
                    $rootScope.id = $rootScope.user.name;
                    $timeout(function() {
                        $('#close').trigger("click");
                    }, 1000);
                    $('.login-button').hide();
                    $timeout(function() {
                        $rootScope.visible = false;
                    }, 3000);
                } else {
                    $scope.showinfo = "登陆失败，请核对用户名密码";
                }
            })
            .error(function(error) {
                alert("错误");
                $scope.showinfo = error;
            });
    }
});