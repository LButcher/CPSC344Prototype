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


    $scope.info = info
    $scope.option1 = option1 //cafe1, sushi2 etc
    $scope.option2=option2
    $scope.confirm=false

    //Checkboxes= True by default, easier for user to opt-out than to opt-in
    $scope.rating =false
    $scope.price =false
    $scope.distance =false


    //Possible table criteria
    $scope.criteria =['rating','price','distance (km)']



    //Update table criteria : Add/delete rows
    $scope.updateCriteria = function(){
        if($scope.rating==true && $scope.criteria.indexOf('rating')==-1){
           $scope.criteria.push('rating')
            $scope.insertRow('rating')
        }
        else if($scope.rating==false && $scope.criteria.indexOf('rating')!=-1){
            $scope.criteria.splice($scope.criteria.indexOf('rating'),1)
            $scope.deleteRow('rating')
        }
        if($scope.price==true && $scope.criteria.indexOf('price')==-1){
            $scope.criteria.push('price')
            $scope.insertRow('price')

        }
        else if($scope.price==false && $scope.criteria.indexOf('price')!=-1){
            $scope.criteria.splice($scope.criteria.indexOf('price'),1)
            $scope.deleteRow('price')

        }
        if($scope.distance==true && $scope.criteria.indexOf('distance (km)')==-1){
            $scope.criteria.push('distance (km)')
            $scope.insertRow('distance (km)')

        }
        else if($scope.distance==false && $scope.criteria.indexOf('distance (km)')!=-1){
            $scope.criteria.splice($scope.criteria.indexOf('distance (km)'),1)
            $scope.deleteRow('distance (km)')

        }

        //$scope.highlightBest()

    };

    //Generate full table on first time load
    $scope.loadTable=function () {
        $scope.updateCriteria()
        for(var i = 0;i<$scope.criteria.length;i++){
            $scope.insertRow($scope.criteria[i])
        }
    }

    $scope.insertRow = function (criteria) {
        var row = document.getElementById('comparisonTable').insertRow();
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        $scope.insertRowCells(cell0,cell1,cell2,criteria)
    }

    //Generates the cell information for the added row
    $scope.insertRowCells =function(cell0,cell1,cell2, criteria){
        cell0.innerHTML = criteria
        cell1.innerHTML = $scope.info[option1][criteria]
        cell2.innerHTML = $scope.info[option2][criteria]
        $scope.compareCells(cell1,cell2,criteria);
    }

    $scope.deleteRow = function(criteria){
        var rows = document.getElementById('comparisonTable').rows;
        //start at 1 because we don't care about header
        for(var i=1;i<rows.length;i++){
            if(rows[i].cells[0].innerHTML==criteria){
                document.getElementById('comparisonTable').deleteRow(i);
            }
        }
    }


    // Compares cell1 to cell2 and depending on the criteria of that row decides which is "better".
        // Highlighted "better" cell, both if equal
    $scope.compareCells = function (cell1, cell2,criteria) {

            if(criteria=='rating'){

                if((parseFloat(cell1.innerHTML)-parseFloat(cell2.innerHTML))<0){
                    $scope.highlightCell(cell2,'lime')
                }
                else if((parseFloat(cell1.innerHTML)-parseFloat(cell2.innerHTML))==0){
                    $scope.highlightCell(cell1,'yellow')
                    $scope.highlightCell(cell2,'yellow')
                }
                else{
                    $scope.highlightCell(cell1,'lime')
                }
            }
            else if(criteria=='price'){
                if(cell1.innerHTML.length<cell2.innerHTML.length){
                    $scope.highlightCell(cell1,'lime')

                }
                else if(cell1.innerHTML.length==cell2.innerHTML.length){
                    $scope.highlightCell(cell1,'yellow')
                    $scope.highlightCell(cell2,'yellow')
                }
                else{
                    $scope.highlightCell(cell2,'lime')

                }
            }
            else if(criteria=='distance (km)'){
                if((parseFloat(cell1.innerHTML)-parseFloat(cell2.innerHTML))<0){
                    $scope.highlightCell(cell1,'lime')
                }
                else if((parseFloat(cell1.innerHTML)-parseFloat(cell2.innerHTML))==0){
                    $scope.highlightCell(cell1,'yellow')
                    $scope.highlightCell(cell2,'yellow')
                }
                else{
                    $scope.highlightCell(cell2,'lime')
                }
            }

        }

    $scope.highlightCell = function (cell,color) {
        cell.style.backgroundColor=color
    }



    $scope.changeTab = function(nav){

        if(nav=='n'){
            $scope.updateCriteria()
            $scope.selectedIndex=1
        }
        else{
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
