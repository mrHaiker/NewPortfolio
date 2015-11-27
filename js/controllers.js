portfolioApp.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
    function ($scope, $location, $anchorScroll) {
        $scope.gotoMenu = function() {
            $location.hash('menu');
            $anchorScroll();
        };
        $scope.gotoTop = function () {
            $location.hash('home');
            $anchorScroll();
        }
    }]);
