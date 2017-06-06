var app = angular.module("app", []);

app.service("usersService", function ($http, $q)
{
	var deferred = $q.defer();
	$http.get('http://jsonplaceholder.typicode.com/users').then(function (data)
	{
		deferred.resolve(data);
	});

	this.getUsers = function ()
	{
		return deferred.promise;
	}
})

.controller("usersCtrl", function ($scope, usersService)
{
	var promise = usersService.getusers();
	promise.then(function (data)
	{
		$scope.users = data.data;
	});
})