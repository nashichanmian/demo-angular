
app.directive('signup',function(){
	var json={
		restrict:'E',
		templateUrl:'./views/signup.html'
	}
	return json;
});
app.directive('compare',function(){
    var o={};
    o.strict='AE';
    o.scope={
        orgText:'=compare'
    }
    o.require='ngModel';
    o.link=function(sco, ele, att, con){
        con.$validators.compare=function(v){
            return v==sco.orgText;
        }
        sco.$watch('orgText',function(){
            con.$validate();
        });
    }
    return o;
});
app.controller('signup', function($scope, $http, $timeout, $rootScope) {
    $scope.showinfo = "";
    $scope.submitForm = function() {
        $http({
                method: 'post',
                url: 'http://localhost/blog/php/signup.php',
                params: $rootScope.user,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .success(function(data) {

                if (data.code == 100) {
                    $scope.showinfo = "注册成功!请登陆！";
                    $timeout(function() {
                        $('#close2').trigger("click");
                    }, 2000);
                      $timeout(function() {
                        $('#denglu').trigger("click");
                    }, 3000);
                }
                if(data.code==1){
                    $scope.showinfo = "用户名已存在，请重新输入!";
                }
            })
            .error(function(error) {
                $scope.showinfo = error;
            });
    }
});