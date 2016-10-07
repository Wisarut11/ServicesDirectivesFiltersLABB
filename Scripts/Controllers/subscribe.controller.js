angular.module("mainModule")
    .controller("SubscribeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Subscribe";
           

            $scope.unsubscribe = function (author) {
                var index = $scope.subscribedAuthors.indexOf(author);
                $scope.subscribedAuthors.splice(index, 1);

                $scope.getFeed();
                $scope.savesubscribedAuthors();
            };

            $scope.getFeed();

            console.log($scope.subscribedAuthors);
            //console.log($scope.feed);

        }
    ]);