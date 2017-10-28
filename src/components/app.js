angular.module('video-player')

.component('app', {
  controller: function(youTube, $scope, $http) {
    console.log(youTube.httpCall);

    this.videoData = window.exampleVideoData;
    //console.log('VIDEODATA = ', this.videoData);
    this.videoToPlay = this.videoData[0];
    this.currentSearch = '';
    this.titleclick = (dataToPlay) => {
      // console.log('clickargument = ', dataToPlay);
      this.videoToPlay = dataToPlay;
    };

    // //BANDAID USING CONTEXT TO GET VAL IN APP
    // context = this;
    // this.currentSearch = '';
    // this.searchClick = function() {
    //   console.log('THISCURRENTSEARCH = ', this.currentSearch);
    //   console.log('CONTEXTCURRENTSEARCH = ', context.currentSearch);
    //   console.log('THIS = ', this);
    //   console.log('CONTEXT = ', context);
    //   context.currentSearch = this.currentSearch;
    // };

    // //SOLUTION ES5
    // this.searchClick = function(findThisTerm) {
    //   this.currentSearch = findThisTerm;
    //   console.log('THISCURRENTSEARCH = ', this.currentSearch);
    //   console.log('THIS = ', this);
    // }.bind(this);

    //SOLUTION ES6
    this.searchClick = (findThisTerm) => {
      this.currentSearch = findThisTerm;
      console.log('THISCURRENTSEARCH = ', this.currentSearch);
      console.log('YOU ARE HERE = ', this);
      //Fixed binding by using ES6 ++ made sure videoToPlay is updated as well.
      var cb = (info) => { this.videoData = info; this.videoToPlay = this.videoData[0]; };
      var options = {q: findThisTerm,
        part: 'snippet',
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true,
        type: 'video' 
      };
      youTube.httpCall(options, cb);
      console.log('THIS = ', this);
    };
  },

  templateUrl: 'src/templates/app.html'
});
