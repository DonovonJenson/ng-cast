angular.module('video-player')
.service('youTube', function($http) {

  this.httpCall = function (options, callBack) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: options
    }).then(function successCallback(response) {
      console.log('GET CALL WORKED, RESPONSE.DATA.ITEMS = ', response.data.items);
      callBack(response.data.items);

    }, function errorCallback(response) {
      console.log('GET CALL FAILED', response);

    });
  };

});
