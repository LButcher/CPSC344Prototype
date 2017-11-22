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

    $scope.rating =true
    $scope.price =true
    $scope.distance =true


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
        if($scope.distance==true && $scope.criteria.indexOf('distance (km)')==-1){
            $scope.criteria.push('distance (km)')
        }
        else if($scope.distance==false && $scope.criteria.indexOf('distance (km)')!=-1){
            $scope.criteria.splice($scope.criteria.indexOf('distance (km)'),1)
        }



        console.log("updated")
    }

    $scope.highlightBest = function(){
        var table = document.getElementById('comparisonTable');
        var rows = table.rows.length;
        var compTable = {}
        var criteria = $scope.criteria

        for(var i=1;i<rows;i++){
            var temp = table.rows[i]
            compTable[temp.cells[0].innerHTML] =
                {
                    'option1': temp.cells[1].innerHTML,
                    'option2': temp.cells[2].innerHTML
                }
                temp.cells[1].id="option1_"+criteria[i-1]
                temp.cells[2].id="option2_"+criteria[i-1]

        }

        $scope.compTable = compTable
        $scope.compareCells()


    }

    $scope.compareCells = function () {
        var criteria = $scope.criteria

        for(var i=0;i<criteria.length;i++){
            var tempCell1 = $scope.compTable[criteria[i]]['option1']
            var tempCell2 = $scope.compTable[criteria[i]]['option2']

            if(criteria[i]=='rating'){
                console.log("diff: ")

                if((parseFloat(tempCell1)-parseFloat(tempCell2))<0){
                    document.getElementById('option2_rating').style.backgroundColor='green';
                }
                else if((parseFloat(tempCell1)-parseFloat(tempCell2))==0){
                    document.getElementById('option1_rating').style.backgroundColor='yellow';
                    document.getElementById('option2_rating').style.backgroundColor='yellow';
                }
                else{
                    document.getElementById('option1_rating').style.backgroundColor='green';
                }
            }
            else if(criteria[i]=='price'){
                if(tempCell1.length<tempCell2.length){
                    document.getElementById('option1_price').style.backgroundColor='green';
                }
                else if(tempCell1.length==tempCell2.length){
                    document.getElementById('option1_price').style.backgroundColor='yellow';
                    document.getElementById('option2_price').style.backgroundColor='yellow';
                }
                else{
                    document.getElementById('option2_price').style.backgroundColor='green';
                }
            }
            else if(criteria[i]=='distance (km)'){
                if((parseInt(tempCell1)-parseInt(tempCell2))<0){
                    document.getElementById('option1_distance (km)').style.backgroundColor='green';
                }
                else if((parseInt(tempCell1)-parseInt(tempCell2))==0){
                    document.getElementById('option1_distance (km)').style.backgroundColor='yellow';
                    document.getElementById('option2_distance (km)').style.backgroundColor='yellow';
                }
                else{
                    document.getElementById('option2_distance (km)').style.backgroundColor='green';
                }
            }

        }
    }


    $scope.changeTab = function(nav){

        if(nav=='n'){
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
