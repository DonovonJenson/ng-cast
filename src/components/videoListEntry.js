angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    current: '<',
    clickontitle: '<'
  },
  controller: function () {
    this.$onInit = function() {
      console.log('WHAT IS IN VIDEO LISTENTRY = ', this.clickontitle);

    };
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
