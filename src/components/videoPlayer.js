angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    current: '<'
  },
  controller: function() {
    this.$onInit = function () {
      console.log('VIDPLAYER CURRENT = ', this.current);
    };
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
   