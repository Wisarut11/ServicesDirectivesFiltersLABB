angular.module("mainModule")
    .controller("NewPostController", [
        "$scope",
        "postsApi",
        function ($scope, postsApi) {
            $scope.title = "New post";
            $scope.newPost = {};

            $scope.addPost = function () {
                postsApi.addPost($scope.newPost)
                    .then(function (data) {
                        console.log(data);
                        $scope.posts.push(data);
                        //$scope.newPost = {};
                        //$scope.go("/");
                    });
            };
        }
    ]);