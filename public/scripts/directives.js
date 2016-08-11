//app.directive('myHeader', function(){
//	return {
//		restrict: 'E',
//		templateUrl: 'partials/nav.html',
//		controller: 'headerCtrl'
//	}
//});

app.directive('mySlideToggle', function () {
    return {
        restrict:'C',
        link: function (scope, element, attrs) {
            scope.$on("toogleDiv", function(e, val){
              element.slideToggle();
            });
        }                  
    }
});