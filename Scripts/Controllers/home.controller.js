/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        "postsApi",
        function ($scope, postsApi) {
            $scope.title = "Home";

            //Subscribe post by author
            $scope.subscribe = function (author) {
                if (author != null)
                    $scope.subscribedAuthors.push(author);
                //console.log("hello");
                $scope.savesubscribedAuthors();
            }

            //Up Votes post
            $scope.upVote = function (post) {
                post.upvotes++;
                postsApi.updateUpvotePost(post);

            }
            //Down Votes post
                $scope.downVote = function (post) {
                    post.downvotes++;
                    postsApi.updateDownvotePost(post);
                
               
            };

            $scope.voteUp = 0;
            $scope.voteDown = 0;


        }

        
    ]);

