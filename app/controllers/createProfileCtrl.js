angular.module('socialApp')
.controller('createProfileCtrl', function(ProfileService, $state){
    this.profile = {};
    this.saveProfile = function(){
      this.profile.imageUrl = this.imageUrl;
      if(!this.profile.friends) {
        this.profile.friends = [];
      }

      var savedProfile = ProfileService.createProfile(this.profile);

      if(savedProfile) {
        $state.go('landing',{profile: savedProfile});
      }
    }

});
