/**
 * Created by Liam on 20/11/17.
 */

var app = angular.module('Comparison', ['ngMaterial']);

app.controller('MainCtrl', function($scope, $mdDialog) {

    $scope.openDialog = function(ev){

        $mdDialog.show({
            controller: "DialogController",
            templateUrl: 'ComparisonOptions.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        });
    };



});

app.controller("DialogController", function($scope, $mdDialog){

    $scope.selectedIndex = 0;

    $scope.info = info
    $scope.option1 = option1
    $scope.option2=option2

    var rating =$scope.rating

    $scope.criteria =[]

    $scope.updateCriteria = function(){

        if($scope.rating==true && $scope.criteria.indexOf('rating')==-1){
           $scope.criteria.push('rating')
        }
        else if($scope.rating==false && $scope.criteria.indexOf('rating')!=-1){
            $scope.criteria.splice($scope.criteria.indexOf('rating'),1)
        }
        if($scope.price==true && $scope.criteria.indexOf('price')==-1){
            $scope.criteria.push('price')
        }
        else if($scope.price==false && $scope.criteria.indexOf('price')!=-1){
            $scope.criteria.splice($scope.criteria.indexOf('price'),1)
        }
        if($scope.distance==true && $scope.criteria.indexOf('distance')==-1){
            $scope.criteria.push('distance')
        }
        else if($scope.distance==false && $scope.criteria.indexOf('distance')!=-1){
            $scope.criteria.splice($scope.criteria.indexOf('distance'),1)
        }


        console.log("updated")
        console.log($scope.criteria)
    }

    $scope.changeTab = function(nav){

        if(nav=='n'){
            console.log($scope.selectedIndex)
            $scope.updateCriteria()
            $scope.selectedIndex=1
        }
        else{
            console.log($scope.selectedIndex)
            $scope.selectedIndex=0
        }
    }

    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };

});

app.controller('ChoiceCtrl', function($scope, $mdDialog) {



});