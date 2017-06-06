var app = angular.module("app", []);

app.service("commentsService", function ($http, $q)
{
	var deferred = $q.defer();
	$http.get('http://jsonplaceholder.typicode.com/comments').then(function (data)
	{
		deferred.resolve(data);
	});

	this.getComments = function ()
	{
		return deferred.promise;
	}
})

.controller("commentsCtrl", function ($scope, commentsService)
{
	var promise = commentsService.getComments();
	promise.then(function (data)
	{
		$scope.comments = data.data;
	});
})