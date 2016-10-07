angular.module("mainModule")
    .service("postsApi", [
        "$http",
        "$q",
        function ($http, $q) {
            var api = "http://dummyapi.kodalagom.se/api";
            var posts = api + "/posts";
            var upvotes = posts + "/upvote";
            var downvotes = posts + "/downvote";

            this.getPosts = function () {
                var deferred = $q.defer();

                $http.get(posts)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.addPost = function (newPost) {
                var deferred = $q.defer();

                $http.post(posts, newPost)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.updatePost = function (updatedPost) {
                var deferred = $q.defer();

                $http.put(posts + "/" + updatedPost.id, updatedPost)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            //Vote funktion Api
            this.updateUpvotePost = function (updatedPost) {
                var deferred = $q.defer();

                $http.put(upvotes + "/" + updatedPost.id, updatedPost)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };
            //Vote funktion Api
            this.updateDownvotePost = function (updatedPost) {
                var deferred = $q.defer();

                $http.put(downvotes + "/" + updatedPost.id, updatedPost)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.deletePost = function (id) {
                var deferred = $q.defer();

                $http.delete(posts + "/" + id)
                    .then(function (response) {
                        deferred.resolve();
                    }, function (response) {
                        deferred.resolve();
                    });

                return deferred.promise;
            };


        }
    ]);