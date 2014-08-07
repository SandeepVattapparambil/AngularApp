var AngularApp = angular.module('AngularApp',[
	'ngRoute',
	'authorController'
	]);
AngularApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'ListController'
	}).
	when('/details/:itemId', {
		templateUrl: 'partials/details.html',
		controller: 'DetailsController'
	}).
otherwise({
redirectTo: '/list'
});
}]);
