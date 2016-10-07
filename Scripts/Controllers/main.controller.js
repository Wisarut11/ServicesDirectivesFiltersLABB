/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        "postsApi",
        function ($scope, $location, $route, postsApi) {
            $scope.$route = $route;
            $scope.posts = [];
            // Subscribe 
            //$scope.feed = [];
            $scope.subscribedAuthors = [];

            $scope.feed = [];

            //Subscribe----------------------------
            $scope.getFeed = function () {
                //console.log(123);
                $scope.feed = $scope.posts.filter(function (post) {
                    //console.log($scope.subscribedAuthors.indexOf(post.author));
                    return $scope.subscribedAuthors.indexOf(post.author) != -1;
                });
            };

            $scope.loadsubscribedAuthors = function () {
                var datastring = localStorage.getItem("subscribedAuthors");
                if (datastring)
                    $scope.subscribedAuthors = JSON.parse(datastring);
            }

            $scope.savesubscribedAuthors = function () {
                var jsonString = JSON.stringify($scope.subscribedAuthors);
                localStorage.setItem("subscribedAuthors", jsonString);

            }

            postsApi.getPosts()
                .then(function (data) {
                    if (data != null)
                        $scope.posts = data;

                    $scope.getFeed();
                });

            $scope.go = function (url) {
                $location.path(url);
            };

            $scope.loadsubscribedAuthors();
        }
    ]);