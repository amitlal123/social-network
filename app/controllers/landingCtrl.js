angular.module('socialApp')
.controller('landingCtrl', function(ProfileService, $stateParams){
  this.profile = $stateParams.profile;
});
