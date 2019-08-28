var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {

   /* $window.onload = function(){
        if($cookies.getObject("stat") == true){
            $window.location.href = 'index.html';
        }
    }*/

    $scope.submit = function() {
        // alert("SUBMIT "+$scope.regObj.username);
        var stat="false";
        angular.forEach($scope.mydata, function(item){
            if((item.un==$scope.regObj.username)&&(item.pass==$scope.regObj.password)){
                stat="true";
                localStorage.setItem("username", item.un);
              /*  if(localStorage.getItem("username") == "user"){
                    document.getElementById("log").innerHTML = "login";
                };*/
            }
        });

        $scope.regObj.username="";
        $scope.regObj.password="";
        if(stat=="true"){
          window.location.href = 'halaman_2/index2.html';
        }

        else{
          document.getElementById("alr").style.display = "";
         
        }
    };
  
    $scope.regObj = {
      "username" : "",
      "password" : ""
    };

    $scope.mydata;
    $http.get("data.json").then(function(response) {
        $scope.mydata = response.data;
        angular.forEach($scope.mydata, function(item){
          // alert(item.email);  
        })
    });
});