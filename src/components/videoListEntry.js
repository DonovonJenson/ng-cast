angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    current: '<',
    clickOnTitle: '<'
  },
  controller: function () {
    this.$onInit = function() {
      //console.log('WHAT IS IN VIDEO LISTENTRY = ', this.clickOnTitle);

    };
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
