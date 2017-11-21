/**
 * Created by Liam on 20/11/17.
 */

var app = angular.module('Comparison', ['ngMaterial']);

app.controller('MainCtrl', function($scope, $mdDialog, $mdBottomSheet) {

    $scope.openDialog = function(ev){
        $mdDialog.show({
            controller: DialogController2,
            templateUrl: 'ComparisonOptions.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        });
    };

});

function DialogController2($scope, $mdDialog) {
    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
}
