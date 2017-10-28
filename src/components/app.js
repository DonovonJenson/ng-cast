angular.module('video-player')

.component('app', {
  controller: function() {
    this.videoData = window.exampleVideoData;
    //console.log('VIDEODATA = ', this.videoData);
    this.titleclick = (videoToPlay) => {
      console.log('click');
      console.log(videoToPlay);
    };
  },
 
  templateUrl: 'src/templates/app.html'
});
