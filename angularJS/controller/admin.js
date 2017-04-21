/*
 * @Author: Marte
 * @Date:   2016-12-23 18:15:27
 * @Last Modified by:   Marte
 * @Last Modified time: 2016-12-26 13:35:51
 */
app.controller('admin', function($scope, $http) {
    $scope.code = '';

    $scope.sub = function() {
        if($scope.fabu){
        $http({
                method: 'post',
                url: 'http://localhost/blog/php/add.php',
                params: $scope.fabu,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .success(function(data) {
                console.log(data);

                if (data.code == 100) {

                    $scope.code = "发布成功！";
                }
                if (data.code == 0) {
                    $scope.code = "添加失败！";
                }
            })
            .error(function(error) {
                $scope.code = error;
            });
    }
}
});