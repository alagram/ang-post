'use strict';

app.controller('ProfileCtrl', function($scope, $routeParams, Post, User) {
  $scope.user = User.findByUsername($routeParams.username);

  $scope.commentedPosts = {};

  $scope.upVotePost = function(postId, upVoted) {
    if (upVoted) {
      Post.clearVote(postId, upVoted);
    } else {
      Post.upVote(postId);
    }
  };

  $scope.downVotePost = function(postId, downVoted) {
    if (downVoted) {
      Post.clearVote(postId, !downVoted);
    } else {
      Post.downVote(postId);
    }
  };

  $scope.upVoted = function (post) {
    return Post.upVoted(post);
  };

  $scope.downVoted = function (post) {
    return Post.downVoted(post);
  };

  function populatePosts() {
    $scope.posts = {};

    angular.forEach($scope.user.posts, function(postId) {
      $scope.posts[postId] = Post.find(postId);
    });
  }

  function populateComments() {
    $scope.comments = {};

    angular.forEach($scope.user.comments, function(comment) {
      var post = Post.find(comment.postId);

      post.$on('loaded', function() {
        $scope.comments[comment.id] = post.$child('comments').$child(comment.id);

        $scope.commentedPosts[comment.postId] = post;
      });
    });
  }

  $scope.user.$on('loaded', function() {
    populatePosts();
    populateComments();
  });
});
