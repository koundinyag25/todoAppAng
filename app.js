var app = angular.module('myApp', []);
app.controller('TodoCtrl', ['$scope', function($scope) {
  $scope.todoList = [{
    subject: "Angular.js",
    isCompleted: false,
    id: 1
  }, {
    subject: "React.js",
    isCompleted: false,
    id: 2
  }, {
    subject: "Bootstrap",
    isCompleted: false,
    id: 3
  }];
  $scope.messageStatus = function() {
    if ($scope.todoList.length == 0) {
      return $scope.message = "You dont have any tasks";
    } else if ($scope.todoList.length > 0) {
      $scope.boop = true;
    }
  }




  $scope.create = function() {
    if (event.keyCode == 13 && $scope.todo.subject || (event.type == "click" && $scope.todo.subject)) {
      $scope.todoList.push({
        subject: $scope.todo.subject,
        isCompleted: false,
        id: $scope.todoList.length + 1
      });
      $scope.todo.subject = "";
    }
  }

  $scope.remove = function(x) {
    angular.forEach($scope.todoList, function(todo) {
      if (x === todo.id) {
        var i = $scope.todoList.indexOf(todo);
        $scope.todoList.splice(i,1);
      }
    });
  }

  $scope.remain = function() {
    var count = 0;
    angular.forEach($scope.todoList, function(data) {
      if (data.isCompleted === false) {
        count++;
      }
    });
    return count;
  }

  $scope.clearAll = function() {
    $scope.todoList = [];
  }

}]);
