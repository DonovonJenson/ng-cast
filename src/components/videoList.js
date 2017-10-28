angular.module('video-player')
.component('videoList', {
  // TODO
  bindings: {
    videos: '<',
    titleClickFn: '<'
  },
  controller: function() {
    this.$onInit = function() {
      //console.log('WHAT IS IN VIDEO LIST = ', this.videos);
      //console.log('FUNCTION = ', this.titleClickFn);
    };
    //this.videostolist = this.videos;
    //console.log('VIDEOS IN videoLIST.JS = ', this);
    //console.log('VIDEOSTOLIST IN videoLIST.JS = ', this.videostolist);
  },
  templateUrl: 'src/templates/videoList.html'
});
