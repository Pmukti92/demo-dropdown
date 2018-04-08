// var app =  angular.module("app",[]);
// app.controller("HomeController",function($scope){

// });
// app.directive("HomeDirective",function(){
//     return{
//         template:'this is a dir'
//     }
// })

(function (angular) {
    'use strict';
    angular.module('app', [])

        .controller('HomeController', ['$scope', function ($scope) {
            console.log(window.location);
            $scope.selectedArray = [];
            $scope.selectedPersonString = '';
            $scope.dataArray = [
                {
                    id: 1,
                    name: "Mukti",
                    status: 'notSelected'
                }, {
                    id: 2,
                    name: "Pratik",
                    status: 'notSelected'
                }, {
                    id: 3,
                    name: "Rahul",
                    status: 'notSelected'
                },
                {
                    id: 4,
                    name: "Priya",
                    status: 'notSelected'
                }
            ];
            $scope.personArrayHandler = function (person) {
                if (person.status !== "selected") {
                    $scope.addToPersonArray(person);
                }
                else {
                    $scope.removeFromPersonArray(person);
                }
            }
            $scope.addToPersonArray = function (person) {
                $scope.selectedArray.push(person.name);
                $scope.dataArray.forEach(function (itr) {
                    if (itr.name === person.name) {
                        itr.status = 'selected'
                    }
                })
                $scope.selectedPersonString = $scope.selectedArray.join();
            }
            $scope.removeFromPersonArray = function (person) {
                $scope.selectedArray.forEach(function (itr, i) {
                    if (person.name === itr) {
                        $scope.selectedArray.splice(i, 1);
                    }
                })
                $scope.dataArray.forEach(function (itr) {
                    if (itr.name === person.name) {
                        itr.status = 'notSelected'
                    }
                })
                $scope.selectedPersonString = $scope.selectedArray.join();

            }
        }])

})(window.angular);