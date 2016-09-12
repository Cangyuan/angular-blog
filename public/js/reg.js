/**
 * Created by chenyi on 2016/8/16.
 */
var app = angular.module('myApp',['blog_directive']);
// app.factory('userListService', ['$http',
//     function($http) {
//         var doRequest = function(username, path) {
//             return $http({
//                 method: 'POST',
//                 url: '../../plugin/user.js'
//             });
//         }
//         return {
//             userList: function(username) {
//                 return doRequest(username, 'userList');
//             }
//         };
//     }
// ]);

app.controller('regCtr', ['$scope', '$http',
//     $scope.users={
//
// };

    function($scope,$http) {
        $scope.reg=function () {

            $http({
                url:'/register',
                method:'POST',
                data: $scope.user,
            }).success(function(data,header,config,status){
//响应成功
                console.log($scope.user);
                console.log(data);



            }).error(function(data,header,config,status){
//处理响应失败
                alert("响应失败")
            });
        }
        return false;

    }
]);
