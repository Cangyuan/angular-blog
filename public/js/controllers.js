var controllerAll=angular.module('ctr_all',[]);
controllerAll.controller('wrController',function ($scope) {
    alert('1');
})
controllerAll.controller('adrcontroller',function($scope){
    $scope.articles=[
        {
            "state":"发布",
            "times":"2",
            "title":"使用Yeoman和Polymer创建Web应用",
            "date":"2014-07-02",
            "coms":"33",

        },
        {
            "state":"发布",
            "times":"2",
            "title":"使用Yeoman和Polymer创建Web应用",
            "date":"2014-07-02",
            "coms":"33",

        },
        {
            "state":"发布",
            "times":"2",
            "title":"使用Yeoman和Polymer创建Web应用",
            "date":"2014-07-02",
            "coms":"33",

        }
    ]
})
controllerAll.controller('comrcontroller',function($scope){
    $scope.comments=[
        {
            "author":"沧苑",
            "title":"使用Yeoman和Polymer创建Web应用",
            "date":"2014-07-02",

        },
        {
            "author":"沧苑",
            "title":"使用Yeoman和Polymer创建Web应用",
            "date":"2014-07-02",

        }
    ]
})
controllerAll.controller('myController',function($scope){
    $scope.win=1;

    var location=window.location.toString();
    if(location.indexOf("post")!=-1){
        $scope.win=1;
    }
    if(location.indexOf("comment")!=-1){
        $scope.win=2;
    }
    $scope.navChange=function(index){
        $scope.win=index;
    }
})