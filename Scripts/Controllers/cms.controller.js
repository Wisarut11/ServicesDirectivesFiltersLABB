/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("CmsController", [
        "$scope",
        "postsApi",
        function ($scope, postsApi) {
            $scope.title = "Cms";

            $scope.deletePost = function (post) {
                postsApi.deletePost(post.id)
                    .then(function () {
                        var index = $scope.posts.map(function (post) {
                            return post.id;
                        }).indexOf(post.id);

                        $scope.posts.splice(index, 1);
                    });
            }
        }
    ]);