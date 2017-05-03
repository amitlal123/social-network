var appMain = angular.module('socialApp');
appMain.controller('MainController',function($scope, ProfileService){
  $scope.test = 'Working';
  $scope.imageUrl = '';
  $scope.profiles = [];
  $scope.profile = {};
  $scope.profile.name = '';
  $scope.firstName = '';
  $scope.lastName = '';
  $scope.profile.imageUrl='http://www.kbklawyers.com/wp-content/uploads/2016/02/placeholder-person.jpg';

  $scope.getProfiles = function() {
    $scope.profiles = ProfileService.getProfiles();
  }

  $scope.saveProfile = function(){
    $scope.profile.imageUrl = $scope.imageUrl;
    if(!$scope.profile.friends) {
      $scope.profile.friends = [];
    }

    ProfileService.createProfile($scope.profile);
    // $scope.getProfiles();
    populateFirstandLastName();
  }

  function populateFirstandLastName() {
    var fullName = $scope.profile.name;
    var spaceIndex = fullName.indexOf(' ');
    if(spaceIndex === -1) {
      $scope.firstName = fullName;
    } else {
      $scope.firstName = fullName.substring(0,spaceIndex);
      $scope.lastName = fullName.substring(spaceIndex + 1);
    }
  }

});
