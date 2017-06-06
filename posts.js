var app = angular.module("app", []);

app.service("postsService", function ($http, $q)
{
	var deferred = $q.defer();
	$http.get('http://jsonplaceholder.typicode.com/posts').then(function (data)
	{
		deferred.resolve(data);
	});

	this.getPosts = function ()
	{
		return deferred.promise;
	}
})

.controller("postsCtrl", function ($scope, postsService)
{
	var promise = postsService.getPostss();
	promise.then(function (data)
	{
		$scope.posts = data.data;
	});
})