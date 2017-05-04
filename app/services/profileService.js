var appProfileService = angular.module('socialApp');
appProfileService.service('ProfileService', function(){
  var profiles = [];

  this.getProfiles = function() {
    return profiles;
  }

  function generateId() {
    var randomNum = Math.floor(Math.random() * 100);
    if(profiles.length > 0) {
      for (var i = 0; i < profiles.length; i++) {
        if(profiles[i].id === randomNum) {
          generateId();
        }
      }
    }
    return randomNum;
  }
//Re-written Create Profile
  this.createProfile = function(profile) {
    profile.id = generateId();
    profiles.push(profile);
    return populateFirstandLastName(profile);
  }

  function populateFirstandLastName(profile) {
    var fullName = profile.name;
    var spaceIndex = fullName.indexOf(' ');
    if(spaceIndex === -1) {
      profile.firstName = fullName;
    } else {
      profile.firstName = fullName.substring(0,spaceIndex);
      profile.lastName = fullName.substring(spaceIndex + 1);
    }
    return profile;
  }

  // Update Profile
  this.updateProfile = function(profile) {
    for (var i = 0; i < profiles.length; i++) {
      if(profiles[i].id === profile.id) {
        profiles[i].name = profile.name;
        profiles[i].tagLine = profile.tagLine;
        profiles[i].bio = profile.bio;
        profiles[i].imageUrl = profile.imageUrl;
        break;
      }
    }
  }

});
