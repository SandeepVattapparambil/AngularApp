var AngularApp = angular.module('AngularApp',[]);
AngularApp.controller('authorController', function authorController($scope) {
	$scope.author={
		'Name':'Sandeep Vattapparambil',
		'Job':'CTO',
		'Company':'Mainaa.com'
	}
});
